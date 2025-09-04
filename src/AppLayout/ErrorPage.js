import React from 'react'
import { 
    useRouteError, 
    NavLink, 
    useNavigate,
    
} from 'react-router-dom'

const Errorpage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const backFun= ()=>{
        navigate(-1);
    }

    // console.log(error);
    if (error.status === 404) {
        return (
            <div>
                <h1 style={{ color: 'red' }}>!404</h1>
                <h2>PAGE NOT FOUND</h2>
                <NavLink to="/">Back to Home</NavLink>

                <button className='btn mt-4' onClick={backFun}>Back to previous</button>
            </div>
        )
    }
    if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
    }
    if (error.status === 503) {
        return <div>Looks like our API is down</div>;
    }
}

export default Errorpage