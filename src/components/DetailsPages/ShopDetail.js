import React, { useMemo, useState } from 'react'
import { useLocation, useParams, NavLink } from 'react-router-dom'
import { FortuneBasketData } from '../../data/LocalData'
import FortuneBasketSlider from '../Sliders/FortuneBasketSlider';
import RelatedProducts from '../Sliders/RelatedProducts';

const ShopDetail = () => {
	const location = useLocation();
	const params = useParams();
	const locationState = location?.state || null;

	// Resolve product either from location state or from id param fallback
	const product = useMemo(() => {
		if (locationState) return locationState;
		const idFromParam = params?.id ? Number(params.id) : null;
		if (!idFromParam) return null;
		return FortuneBasketData.find((p) => p.id === idFromParam) || null;
	}, [locationState, params]);

	const galleryImages = useMemo(() => {
		if (!product) return [];
	
		return [product.img, product.img, product.img, product.img];
	}, [product]);

	const [activeIndex, setActiveIndex] = useState(0);

	if (!product) {
		return (
			<>
				<section className='space-top'>
					<div className="container">
						<p className='text-center py-5'>Product not found.</p>
					</div>
				</section>
			</>
		);
	}

	const discountBadge = (
		<span className="inline-block text-[12px] bg-yellow-100 text-yellow-800 px-2 py-[2px] rounded-md ms-2 align-middle">
			64% + Extra 21% OFF
		</span>
	);

	return (
		<>
			<section className='space-top'>
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-6 col-12">
							<div className="p-3 rounded-xl second-bg">
								<div className="rounded-xl overflow-hidden bg-white">
									<img src={galleryImages[activeIndex]} alt={product?.title || 'Product'} className="w-100 object-cover" />
								</div>
								<div className="d-flex gap-2 mt-3">
									{galleryImages.map((img, idx) => (
										<button key={idx} className={`p-1 rounded-md border ${activeIndex === idx ? 'border-[#cda202]' : 'border-transparent'} bg-white`} onClick={() => setActiveIndex(idx)} aria-label={`Select image ${idx + 1}`}>
											<img src={img} alt={`thumb-${idx}`} className="object-cover" style={{ width: 80, height: 80 }} />
										</button>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="flex justify-between flex-col h-100">
								<h3 className="text-lora font-semibold mb-3 lg:text-[36px]">7 Mukhi Rudraksha</h3>
								<div className='d-flex align-items-baseline gap-2 mb-2'>
									<div className='text-[18px] fw-bold'>₹{product.price || '1,199'}</div>
                                    <div className='text-gray-500 text-[12px] line-through'>₹{product.realPrice || '1,996'}</div>
                                    <div>
									{discountBadge} 
                                    </div>
                                </div>
                                <div>

								<div className='text-sm mb-5'>Pack Of 1 Mali (21 Rudraksha)</div>
                                </div>

								<div className="mb-3">
									<h6 className='mb-3'>Benefits of 7 Mukhi Rudraksha</h6>
									<div className='bg-[#faf6e6] rounded-md p-3 '>
										<ul className='mb-0 ps-3 space-y-4 list-disc'>
											<li>Attracts Wealth & Prosperity</li>
											<li>Removes Negativity & Misfortune</li>
											<li>Balances Emotions</li>
											<li>Spiritual Growth</li>
										</ul>
									</div>
								</div>

                                <div className='d-inline-block'>

								<div className='bg-[#eedfa7] text-yellow-800 rounded-md px-3 py-2  mb-3'>
									Last 20 Pieces are left
								</div>
                                </div>

								<div className="d-flex gap-3 justify-between">
									<button className="py-3 px-4 text-[18px] main-bg hover:shadow-md text-white font-medium rounded-lg transition" style={{ fontFamily: 'Lora, serif' }}>
										Order Now
									</button>
									<NavLink className="py-3 px-4 text-[18px] border rounded-lg hover:text-[#cda202] text-decoration-none text-[#cda202]" to="/shop">Back to Shop</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='space-top'>
				<div className="container ">
					<h5 className=" lg:text-[24px] text-gray-900 font-semibold mb-3 text-lora" >
						You May Also Like
					</h5>
					<div className="row">
						<RelatedProducts relatedProductsData={FortuneBasketData} />
					</div>
				</div>
			</section>
		</>
	)
}

export default ShopDetail
