import { useId, useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const [countryCode, setCountryCode] = useState("+91");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "01",
    state: "",
    pinCode: "",
    city: "",
    streetAddress: ""
  });

  // Sample data
  const states = [
    { value: "andhra-pradesh", label: "Andhra Pradesh" },
    { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
    { value: "chhattisgarh", label: "Chhattisgarh" },
    { value: "goa", label: "Goa" },
    { value: "gujarat", label: "Gujarat" },
    { value: "haryana", label: "Haryana" },
    { value: "himachal-pradesh", label: "Himachal Pradesh" },
    { value: "jharkhand", label: "Jharkhand" },
    { value: "karnataka", label: "Karnataka" },
    { value: "kerala", label: "Kerala" },
    { value: "madhya-pradesh", label: "Madhya Pradesh" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "manipur", label: "Manipur" },
    { value: "meghalaya", label: "Meghalaya" },
    { value: "mizoram", label: "Mizoram" },
    { value: "nagaland", label: "Nagaland" },
    { value: "odisha", label: "Odisha" },
    { value: "punjab", label: "Punjab" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sikkim", label: "Sikkim" },
    { value: "tamil-nadu", label: "Tamil Nadu" },
    { value: "telangana", label: "Telangana" },
    { value: "tripura", label: "Tripura" },
    { value: "uttar-pradesh", label: "Uttar Pradesh" },
    { value: "uttarakhand", label: "Uttarakhand" },
    { value: "west-bengal", label: "West Bengal" },
    { value: "delhi", label: "Delhi" }
  ];

  const quantities = Array.from({ length: 20 }, (_, i) => ({
    value: String(i + 1).padStart(2, '0'),
    label: String(i + 1).padStart(2, '0')
  }));


  const countryOptions = [
    { value: "+91", label: "🇮🇳 +91" },
    { value: "+1", label: "🇺🇸 +1" },
    { value: "+44", label: "🇬🇧 +44" },
    { value: "+86", label: "🇨🇳 +86" },
    { value: "+33", label: "🇫🇷 +33" }
  ];

  // Product details
  const product = {
    name: "7 Mukhi Rudraksha",
    description: "Pack Of 1 Maal (21 Rudraksha)",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center"
  };

  // Pricing calculations
  const basePrice = 7996.00;
  const discount = 6803.00;
  const gstAndTaxes = 101.00;
  const shippingCharge = 200.00;
  const finalPrice = basePrice - discount + gstAndTaxes + shippingCharge;
  const total = finalPrice * parseInt(formData.quantity);

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return countryCode === '+91' ? /^[6-9]\d{9}$/.test(cleanPhone) : cleanPhone.length >= 7;
  };
  const validateName = (name) => name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
  const validatePinCode = (pin) => /^\d{6}$/.test(pin);

  const validateForm = (data) => {
    const newErrors = {};

    if (!validateName(data.name)) {
      newErrors.name = "Name must be at least 2 characters and contain only letters";
    }
    if (!validatePhone(data.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.state) {
      newErrors.state = "Please select your state";
    }
    if (!validatePinCode(data.pinCode)) {
      newErrors.pinCode = "Pin code must be 6 digits";
    }
    if (!data.city.trim()) {
      newErrors.city = "Please enter your city";
    }
    if (!data.streetAddress.trim()) {
      newErrors.streetAddress = "Please enter your street address";
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleInputChange = (field, value) => {
    let processedValue = value;

    if (field === 'phone') {
      processedValue = value.replace(/[^\d\s\-\(\)]/g, '');
      const cleanValue = processedValue.replace(/\D/g, '');
      const maxLength = countryCode === '+91' ? 10 : 15;
      if (cleanValue.length > maxLength) return;
    }

    if (field === 'name') {
      processedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    if (field === 'pinCode') {
      processedValue = value.replace(/\D/g, '').slice(0, 6);
    }

    const newFormData = { ...formData, [field]: processedValue };
    setFormData(newFormData);
    validateForm(newFormData);
  };

  const handleCountryCodeChange = (e) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    const newFormData = { ...formData, phone: "" };
    setFormData(newFormData);
    validateForm(newFormData);
  };

  const handleSubmit = () => {
    if (validateForm(formData)) {
      alert(`Order placed successfully!\n\nTotal Amount: ₹${total.toLocaleString()}\nQuantity: ${formData.quantity}\nDelivery Address: ${formData.streetAddress}, ${formData.city}, ${formData.state} - ${formData.pinCode}`);
    }
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      quantity: "01",
      state: "",
      pinCode: "",
      city: "",
      streetAddress: ""
    });
    setErrors({});
    setIsFormValid(false);
     navigate(-1)
  };
  const id = useId();
  console.log(id)

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border overflow-hidden">
          {/* Header */}
          <div className="bg-[#CDA202] text-white px-4 md:px-6 py-3 flex items-center justify-between mb-2">
            <h4 className="lg:text-[24px] text-lora ">Filled This form to order</h4>
                <IconButton className="close-btn"  onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
          </div>
          <div className="lg:p-[30px] p-5">
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Name */}
              <TextField
                label="Enter Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={errors.name}
                variant="outlined"
              />

              {/* Phone */}
              <TextField
                variant="outlined"
                label="Enter Your Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}

                error={errors.phone}
                type="tel"
                startAdornment={
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="h-full w-20 px-2 py-3 bg-gray-50 border-none focus:outline-none text-sm font-medium text-gray-700 cursor-pointer rounded-l"
                  >
                    {countryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                }
              />

              {/* Email */}
              <TextField
                label="Enter Your Email ID"
                variant="outlined"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                type="email"
              />

              {/* Quantity */}
              <FormControl fullWidth>
                <InputLabel id="Quantity">Quantity</InputLabel>
                 <Select
                    label="Quantity"
                  value={formData.quantity}
                  // options={quantities}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  error={errors.quantity}
                >
                  <MenuItem value="" disabled>  <em>None</em> </MenuItem>
                  {quantities.map((qtyData) => {
                    return (<MenuItem value={qtyData.value}>{ qtyData.label}</MenuItem>)
                  })}
                </Select>
              </FormControl>

              {/* State */}
              <FormControl fullWidth>
                <InputLabel  id='Choose Your State'>Choose Your State</InputLabel>
                 <Select
                    label="Choose Your State"
                  value={formData.state}
                 onChange={(e) => handleInputChange('state', e.target.value)}
                 error={errors.state}
                >
                  <MenuItem value="" disabled>  <em>Choose Your State</em> </MenuItem>
                  {states.map((stateName) => {
                    return (<MenuItem value={stateName.value}>{ stateName.label}</MenuItem>)
                  })}
                </Select>
              </FormControl>

              {/* Pin Code */}
              <TextField
                label="Enter Your Pin Code"
                value={formData.pinCode}
                onChange={(e) => handleInputChange('pinCode', e.target.value)}
                // placeholder="Pin code"
                error={errors.pinCode}
                type="text"
              />

              {/* City */}
              <TextField
                label="Enter Your City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                // placeholder="City"
                error={errors.city}
                type="text"
              />

              {/* Street Address */}
              <TextField
                label="Enter Your Street Address"
                value={formData.streetAddress}
                onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                // placeholder="Street"
                error={errors.streetAddress}
                   type="text"
              />
            </div>
            {/* Product Details */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-semibold text-gray-800">{product.name}</h4>
                  <p className="text-sm md:text-base text-gray-600 mb-1">{product.description}</p>
                  <p className="text-sm md:text-base text-gray-700">Quantity: {formData.quantity}</p>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-lora">Billing Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-700">Price</span>
                  <span className="font-medium">₹{basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-700">Discount</span>
                  <span className="font-medium text-green-600">(64%) ₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-700">Gst & Other Taxes</span>
                  <span className="font-medium">₹{gstAndTaxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span className="text-gray-700">Shipping Charge</span>
                  <span className="font-medium">₹{shippingCharge.toFixed(2)}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center text-lg md:text-xl font-bold">
                  <span className="text-gray-800">Total</span>
                  <span className="text-[#333333]">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <div className="">

            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full  py-3 px-6 rounded-lg transition-all duration-300 text-[18px] text-lora ${
                isFormValid
                  ? 'bg-[#cda202] hover:bg-[#B8920A] text-white cursor-pointer transform  shadow-sm'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Payment Process
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
