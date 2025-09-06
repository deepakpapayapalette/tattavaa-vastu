import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../assets/css/form-style.css";
import { useNavigate } from "react-router-dom";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    language: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    };
          const navigate = useNavigate();
    const backFun= ()=>{
        navigate(-1);
    }

  return (
      <section>
          <div className="container flex justify-center items-center">
              <div className="row">
                  <div className="col-lg-6 col-12 mx-auto pt-lg-4 pt-3">
                             <div className="consult-form">
      {/* Header */}
      <div className="form-header ">
                              <h5 className="text-white text-lora mb-0">Filled This form For Consultations</h5>
                              
        <IconButton className="close-btn" onClick={backFun}>
          <CloseIcon  />
        </IconButton>
      </div>

      {/* Form */}
      <form className="form-body" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Enter Your Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <span style={{ marginRight: "8px" }}>+91</span>,
          }}
        />

        <TextField
          fullWidth
          label="Enter Your Email ID"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Choose Language</InputLabel>
          <Select
            name="language"
            value={formData.language}
            onChange={handleChange}
            label="Choose Language"
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Choose Date Of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <Button
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  className="submit-btn py-2 text-lora "
                                  sx={{fontSize:'18px', fontFamily:'Lora',}}
        >
          Request a call back
        </Button>
      </form>
    </div>
                </div>
              </div>
    
          </div>
   </section>
  )
}
