import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Mission = () => {
  return (
    <Box bgcolor="primary.main" mt={10}>
      <Container sx={{ p: 10 }}>
        <Typography
          fontSize={60}
          fontWeight={500}
          color="#fff"
          textAlign="center"
        >
          Our Mission
        </Typography>
        <Typography mt={3} color="primary.text" textAlign="center" fontSize={20}>
          To design and build the most effective and efficient line of service
          robots for industrial and commercial spaces.
        </Typography>
        <Typography  color="primary.text" textAlign="center" fontSize={20}>
          Peppermint's mission is to transform cleaning automation by designing
          and deploying advanced robotic solutions. We are committed to
          reshaping the cleaning landscape, making it more efficient,
          sustainable, and intelligent. Through our innovative technology, we
          strive to enhance spaces, simplify operations, and contribute to a
          cleaner and healthier world.
        </Typography>
      </Container>
    </Box>
  );
};

export default Mission;
