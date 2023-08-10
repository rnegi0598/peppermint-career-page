import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box bgcolor="primary.main" mt={10}>
      <Container sx={{ p: {xs:5,md:10} }}>
        <Typography fontSize={60} fontWeight={500} textAlign="center" color="#fff">
          Why Peppermint ?
        </Typography>
        <Typography mt={3} color="primary.text" textAlign="center" fontSize={20}>
          At Peppermint, we're on a mission to transform the way floors are
          cleaned and spaces are maintained. Our team is dedicated to pioneering
          innovative solutions that go beyond the ordinary, combining
          cutting-edge technology with sustainability and accountability. If
          you're passionate about revolutionizing the cleaning industry and
          driving meaningful impact, we invite you to be part of our journey.
          Together, let's redefine the possibilities of intelligent robotics and
          make every workspace cleaner, smarter, and more efficient.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
