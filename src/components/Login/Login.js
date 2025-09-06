import { useState } from "react";
import { X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
       const navigate = useNavigate();
    const backFun= ()=>{
        navigate(-1);
    }
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleGetOTP = () => {
    if (phoneNumber.trim()) {
      alert(`OTP will be sent to ${countryCode} ${phoneNumber}`);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  return (
    <div className="  flex items-center justify-center pt-5 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-yellow-600 text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">Continue with Phone</h2>
            <X className="w-5 h-5 cursor-pointer hover:opacity-80" onClick={backFun} /> 
        </div>

        <div className="p-6">
          <p className="text-gray-800 font-medium mb-6">
            You will receive a 4 digit code for verification
          </p>

          {/* Phone number input section */}
          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-3">
              Enter Your Phone Number
            </label>
            
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              {/* Country code dropdown */}
              <div className="flex items-center bg-gray-50 border-r border-gray-300 px-3 py-3">
                <span className="text-gray-700 font-medium mr-1">{countryCode}</span>
                <svg 
                  className="w-4 h-4 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Phone number input */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Get OTP button */}
          <button
            onClick={handleGetOTP}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mb-6"
          >
            Get OTP
          </button>

          {/* Terms and privacy */}
          <p className="text-sm text-gray-600 leading-relaxed">
            By Signing up, you agree to our{" "}
            <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}