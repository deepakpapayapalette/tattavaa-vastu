import { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField, Button } from "@mui/material";


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
  const inputCustomStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#000000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cda202",
      },
    },
    "& .MuiInputLabel-root": {
      color: "gray",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#cda202",
    },
  }

    return (
        <div className="  flex items-center justify-center pt-5 p-4">
            <div className="bg-white rounded-lg border w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-[#CDA202] text-white px-6 py-2 flex items-center justify-between">
                    <h2 className="text-lg font-medium mb-0 text-lora">Continue with Phone</h2>
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
                  sx={inputCustomStyle}
                            />
                        </div>
                    </div>

                    {/* Get OTP button */}
                    <Button
                        onClick={handleGetOTP}
                        fullWidth
                        variant="contained"
                        sx={{
                            // fontSize: '18px',
                            fontFamily: 'Lora',
                            bgcolor: "#CDA202",
                            padding: '12px',
                        }}
                    >
                        Get OTP
                    </Button>
                    {/* Terms and privacy */}
                    <p className="text-sm text-gray-600 leading-relaxed pt-4 pt-lg-5" >
                        By Signing up, you agree to our{" "}
                        <NavLink to="#" className="text-[#CDA202] hover:text-yellow-700 underline">
                            Terms of Use
                        </NavLink>{" "}
                        and{" "}
                        <NavLink to="#" className="text-[#CDA202] hover:text-yellow-700 underline">
                            Privacy Policy
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}
