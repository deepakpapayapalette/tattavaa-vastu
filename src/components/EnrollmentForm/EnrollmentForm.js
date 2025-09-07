import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {TextField,  Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EnrollmentForm() {
    const navigateBack = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        language: ""
    });
    console.log(formData)
    const [countryCode, setCountryCode] = useState("+91");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const languages = [
        { value: "english", label: "English" },
        { value: "hindi", label: "Hindi" },
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "chinese", label: "Chinese" },
        { value: "japanese", label: "Japanese" },
        { value: "korean", label: "Korean" }
    ];

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const cleanPhone = phone.replace(/\D/g, '');
        if (countryCode === '+91') {
            return /^[6-9]\d{9}$/.test(cleanPhone);
        }
        return cleanPhone.length >= 7 && cleanPhone.length <= 10;
    };

    const validateName = (name) => {
        return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
    };

    const validateForm = (data) => {
        const newErrors = {};

        if (!validateName(data.name)) {
            newErrors.name = "Name must be at least 2 characters and contain only letters";
        }

        if (!validatePhone(data.phone)) {
            newErrors.phone = countryCode === '+91'
                ? "Indian mobile number must be 10 digits and start with 6-9"
                : "Please enter a valid phone number";
        }

        if (!validateEmail(data.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!data.language) {
            newErrors.language = "Please select a language";
        }

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0 &&
            data.name && data.phone && data.email && data.language;
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
            // Allow only letters and spaces
            processedValue = value.replace(/[^a-zA-Z\s]/g, '');
        }

        const newFormData = { ...formData, [field]: processedValue };
        setFormData(newFormData);
        validateForm(newFormData);
    };

    const handleCountryCodeChange = (newCode) => {
        setCountryCode(newCode);
        const newFormData = { ...formData, phone: "" };
        setFormData(newFormData);
        validateForm(newFormData);
    };

    const handleSubmit = () => {
        if (validateForm(formData)) {
            alert(`Enrollment submitted successfully!\n\nName: ${formData.name}\nPhone: ${countryCode} ${formData.phone}\nEmail: ${formData.email}\nLanguage: ${formData.language}`);
            // Reset form
            setFormData({ name: "", phone: "", email: "", language: "" });
            setErrors({});
            setIsFormValid(false);
        }
    };

    const handleClose = () => {
        // Reset form and close
        setFormData({ name: "", phone: "", email: "", language: "" });
        setErrors({});
        setIsFormValid(false);
        navigateBack(-1);
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
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="bg-white rounded-lg border w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-[#CDA202] text-white px-6 py-3 flex items-center justify-between">
                    <h4 className="lg:text-[24px] text-lora">Filled This form For Enrollment</h4>
                    {/* <X 
            className="w-5 h-5 cursor-pointer hover:opacity-80" 
            onClick={handleClose}
          /> */}

                    <IconButton className="close-btn" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Name Field */}
                    <div className="mb-4">

                        <TextField
                            fullWidth
                            label="Enter Your Name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">


                        <TextField
                            fullWidth
                            label="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <select
                                        style={{ marginRight: "8px" }}
                                        value={countryCode}
                                        onChange={(e) => handleCountryCodeChange(e.target.value)}
                                    >
                                        {countryOptions.map((el) => (
                                            <option key={el.label} value={el.value}>
                                                {el.value}
                                            </option>
                                        ))}
                                    </select>
                                ),
                            }}
                        />

                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.phone}
                            </p>
                        )}
                    </div>
                    {/* Email Field */}
                    <div className="mb-4">

                        <TextField
                            type="email"
                            fullWidth
                            label="Enter Your Email ID"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            margin="normal"
                            variant="outlined"

                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Language Field */}
                    <div className="mb-6">

                        <div className="relative">
                            <select
                                value={formData.language}
                                onChange={(e) => handleInputChange('language', e.target.value)}
                                className={`w-full appearance-none px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer ${errors.language ? 'border-red-500' : formData.language ? 'border-green-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="" disabled>Choose Language</option>
                                {languages.map((lang) => (
                                    <option key={lang.value} value={lang.label}>
                                        {lang.label}
                                    </option>
                                ))}
                            </select>
                            <svg
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div> 
                        {errors.language && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {errors.language}
                            </p>
                        )}
                    </div> 
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        sx={{
                            // fontSize: "18px",
                            padding: '12px',
                            fontFamily: "Lora",
                            bgcolor: isFormValid ? "#705906" : "#CDA202",
                            color: isFormValid ? "#fff" : "#00",
                            "&:hover": { bgcolor: isFormValid ? "#CDA202" : "#CDA202" },
                        }}
                    //   disabled={!isFormValid}
                    >
                        Request a call back
                    </Button> 
                </div>
            </div>
        </div>
    );
}