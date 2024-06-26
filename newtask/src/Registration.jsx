import React, { useState } from 'react';
// import Img from "./formtask-img.jpg";
import {
  Grid,
  InputLabel,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormGroup,
  Container,
  Box,
  MenuItem,
  Select,

} from '@mui/material';

const hobbiesList = ['Reading', 'Sports', 'Music', 'Travelling'];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    hobbies: [],
    profilePicture: null,
    country: '',
    bio: '',
    agreeTerms: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform further actions here, like sending data to an API
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log("NAME", name)
    if (type === 'checkbox') {
      if (checked) {
        if (name === 'agreeTerms') {
          setFormData((prevData) => ({
            ...prevData,
            agreeTerms: true,
          }));
          return false;
        }
        setFormData((prevData) => ({
          ...prevData,
          hobbies: [...prevData.hobbies, name],
        }));
      } else {
        if (name === 'agreeTerms') {
          setFormData((prevData) => ({
            ...prevData,
            agreeTerms: false,
          }));
          return false;
        }
        setFormData((prevData) => ({
          ...prevData,
          hobbies: prevData.hobbies.filter((hobby) => hobby !== name),
        }));
      }
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleResetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      hobbies: [],
      profilePicture: null,
      country: '',
      bio: '',
      agreeTerms: false,
    });
  };

  return (
    <Container maxWidth="md"  >
      {/* <Box className="imgcontainer"><img className='img' src={Img}></img></Box> */}
      <Box mt={4} style={{ backgroundColor: "#F5F5F5", padding: "40px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid container item xs={12}>
              <FormControl component="fieldset">
                <InputLabel id="gender">Gender</InputLabel>
                <RadioGroup className="genderRadio"
                  row
                  aria-label="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container item xs={12}>
              <FormControl component="fieldset">
                <InputLabel id="gender">Hobbies :</InputLabel>
                <FormGroup row className='genderRadio'>
                  {hobbiesList.map((hobby) => (
                    <FormControlLabel
                      key={hobby}
                      control={<Checkbox onChange={handleInputChange} name={hobby} />}
                      label={hobby}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="file"
                label="Profile Picture"
                name="profilePicture"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  value={formData.country}
                  label="Country"
                  onChange={handleInputChange}
                  name="country"
                >
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid container item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>
            <Grid container item xs={6}>
              <Button type="submit" variant="contained" color="secondary" style={{ marginRight: "20px" }}>
                Submit
              </Button>
              <Button variant="contained" onClick={handleResetForm} style={{ backgroundColor: "gray" }}>
                Reset
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;