import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../assets/css/contact.css'
import contactBg from '../assets/images/contact.png'
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    temp.message = formData.message ? "" : "Message is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      alert("Form Data Submitted:")
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }
  };

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
    <>
      <section className='space-top md:mb-[36px]'>
        <div className="container">
          <div className="about-title">
            <h2 className='text-lora font-semibold '>
              Get in Touch
            </h2>
            <p>
              We’re here to guide you on your cosmic journey. Whether you have questions, need support, or want to book a consultation, reach out and connect with our team.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-section py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className={`relative contact-info-card lg:p-[25px] rounded text-white bg-no-repeat`}
                  style={{ backgroundImage: `url(${contactBg})` }}
                >
                  <div style={{}} className="overlay-contact">
                    <div className="lg:flex justify-between ">
                      <div className="contact-group mb-4 mb-xl-0">
                        <div className="flex ">
                          <MdOutlinePhoneInTalk size={24} className="me-2" />
                          <h5 className="text-white lg:text-[24px]"> Phone Number</h5>
                        </div>
                        <a className="text-white no-underline" href="tel:5252525252" >+91 5252525252</a>
                      </div>
                      <div className="contact-group">
                        <div className="flex">
                          <MdOutlineEmail size={24} className="me-2" />
                          <h5 className="text-white lg:text-[24px]">   Email ID</h5>
                        </div>
                        <a href="mailto:rjvisj42@gmail.com" className="no-underline text-white">rjvisj42@gmail.com</a>
                      </div>
                    </div>
                    <div className=" mt-lg-5 mt-4 address-block">
                      <div className="flex items-center mb-2">
                        <CiLocationOn className="me-1" size={24} />
                        <h5 className="text-white lg:text-[24px mb-0"> Address</h5>
                      </div>
                      <p className="text-white ">
                        H-Block, Sector-63, Noida, Uttar Pradesh,  201301, India
                      </p>
                    </div>

                    <div className="mt-lg-5 mt-4">
                      <h5 className=" mb-3 text-white lg:text-[24px]">Follow Us</h5>
                      <div className="d-flex gap-3">
                        <a href="#">
                          <FaFacebookF size={18} color="#fff" /></a>
                        <a href="#">
                          <FaInstagram size={18} color="#fff" /></a>
                        <a href="#">
                          <FaLinkedinIn size={18} color="#fff" /></a>
                        <a href="#">
                          <FaTwitter size={18} color="#fff" /></a>
                        <a href="#">
                          <FaYoutube size={18} color="#fff" /></a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              {/* Right Side - Form */}
              <div className="col-md-6">
                <Paper
                  elevation={0}
                  sx={{

                    margin: "auto",
                    px: 3,
                    bgcolor: "transparent",
                    borderRadius: 2,
                  }}
                >
                  <h4 className="mb-2 lg:text-[24px] text-lora">
                    Get in touch
                  </h4>
                  <Typography variant="body2" color="text.dark" gutterBottom>
                    We are here for you! How can we help?
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      sx={inputCustomStyle}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      sx={inputCustomStyle}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      multiline
                      rows={2}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      sx={inputCustomStyle}
                    />
                    <div>


                      <Button
                        className="text-lora lg:text-[18px]"
                        type="submit"
                        variant="contained"
                        sx={{
                          mt: 2,
                          bgcolor: "#cda202",
                          "&:hover": { bgcolor: "#a67c00" },
                          borderRadius: "8px",
                          textTransform: "none",
                          padding: '12px'
                        }}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </div>
                  </Box>
                </Paper>
                {/* {submittedData && (
                            <div className="mt-4 p-3 border rounded bg-light">
                                <h6> Submitted Data:</h6>
                                <p><strong>Name:</strong> {submittedData.name}</p>
                                <p><strong>Email:</strong> {submittedData.email}</p>
                                <p><strong>Message:</strong> {submittedData.message}</p>
                            </div>
                            )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
