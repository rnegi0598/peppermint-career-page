import {
  Box,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Hero = () => {
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const departmentHandleChange = (event) => {
    setDepartment(event.target.value);
  };
  const locationHandleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Box paddingTop={15}>
      <Container sx={{ display: "flex", flexDirection: {xs:'column',md:"row"} }}>
        <Box>
          <Typography  component="h1" variant="h2" fontWeight={800}   sx={{fontSize:{xs:40,md:70},mb:{xs:1,md:5},textAlign:{xs:'center',md:'left'}}} >
            Join us in reshaping the future of cleaning automation
          </Typography>
        </Box>
        <Box alignSelf='center' sx={{textAlign:'center',width:{xs:350,sm:500,md:1500},height:{xs:200,sm:300}}}>
          <iframe
            textAlign='center'
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fJzUZ7eA97U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "column",pt:{xs:5,md:0}} }>
        <Divider sx={{ fontSize: 30 }}></Divider>
        <Typography mt={5} mb={5} variant="h5">
          Explore career opportunities at Peppermint.
        </Typography>
        <Container sx={{ display: "flex", flexDirection: {xs:'column',md:'row'},gap:{xs:2,md:10}}}>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              value={department}
              label="Department"
              onChange={departmentHandleChange}
            >
              <MenuItem value="Data">Data</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
              <MenuItem value="People">People</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              value={location}
              label="Location"
              onChange={locationHandleChange}
            >
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Noida">Noida</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Container>
    </Box>
  );
};

export default Hero;
