import { useState } from "react";
import { X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import { Button } from "bootstrap";

export default function Login() {
    const navigate = useNavigate();
    const backFun = () => {
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

    const countryOptions = [
        { value: "+91", label: "🇮🇳 +91" },
        { value: "+1", label: "🇺🇸 +1" },
        { value: "+44", label: "🇬🇧 +44" },
        { value: "+86", label: "🇨🇳 +86" },
        { value: "+33", label: "🇫🇷 +33" },
        { value: "+49", label: "🇩🇪 +49" },
        { value: "+81", label: "🇯🇵 +81" }
    ];


    return (
        <div className="  flex items-center justify-center pt-5 p-4">
            <div className="bg-white rounded-lg border w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-[#CDA202] text-white px-6 py-2 flex items-center justify-between">
                    <h2 className="text-lg font-medium mb-0 text-lora">Continue with Phone</h2>
                    {/* <X className="w-5 h-5 cursor-pointer hover:opacity-80" onClick={backFun} />  */} 

                    <IconButton className="close-btn" onClick={backFun}>
                        <CloseIcon />
                    </IconButton>
                </div>


                <div className="p-6">
                    <p className="text-gray-800 font-medium mb-6 ">
                        You will receive a 4 digit code for verification
                    </p>

                    {/* Phone number input section */}
                    <div className="mb-6">

                        <div className="flex  rounded-md overflow-hidden">
                            {/* <div className="flex items-center bg-gray-50 ">

                                <span className="text-gray-700 font-medium mr-1">{countryCode}</span>
                                <svg 
                  className="w-4 h-4 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                            </div> */}

                            {/* Phone number input */}
                            {/* <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          /> */}

                            <TextField
                                fullWidth
                                label="Enter Your Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <select style={{ marginRight: "8px" }} onChange={setCountryCode}>
                                        {countryOptions.map(el => <option value={el.value}>{el.value}</option>)}

                                    </select>,
                                }}
                            />
                        </div>
                    </div>

                    {/* Get OTP button */}
                    <button
                        onClick={handleGetOTP}
                        className="text-lora w-full bg-[#CDA202] hover:bg-yellow-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mb-6"
                    >
                        Get OTP
                    </button>

                    {/* <Button 
                      fullWidth
                      variant="contained"
                      className="submit-btn py-2 text-lora "
                      sx={{ fontSize: '18px', fontFamily: 'Lora', }} 
                  >
                      Request a call back
                  </Button> */}

                    {/* Terms and privacy */}
                    <p className="text-sm text-gray-600 leading-relaxed" >
                        By Signing up, you agree to our{" "}
                        <a href="#" className="text-[#CDA202] hover:text-yellow-700 underline">
                            Terms of Use
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#CDA202] hover:text-yellow-700 underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}