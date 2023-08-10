import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Reviews from "./Reviews";

const Story = () => {
  return (
    <Box mt={5}>
      <Container maxWidth="md">
        <Typography fontSize={60} fontWeight={700} textAlign="center" >Employee Stories</Typography>
        <Typography mt={4}  textAlign="center" fontSize={20}>
          The best way to learn about life at Peppermint is to hear from our
          people. Each one brings their unique background, perspective, and
          experience — and Peppermint is better for it.
        </Typography>
        <Reviews/>
      </Container>
    </Box>
  );
};

export default Story;
