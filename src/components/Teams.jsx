import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";

const Teams = () => {
  return (
    <Box mt={5}>
      <Container>
        <Typography fontSize={60} fontWeight={700} textAlign="center" mb={3}>
          Founding Team
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs:'column',sm:'row'},
            justifyContent: "center",
            gap:{xs:5,sm:10},
          }}
        >
          <Box textAlign="center">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="https://getpeppermint.co/wp-content/uploads/2022/03/Runal-Photo-150x150-1-150x150.png"
                sx={{ width: 150, height: 150 }}
              />
            </Box>
            <Typography mt={3} fontSize={20} fontWeight={500}>Runal Dahiwade</Typography>
            <Typography fontSize={20}>
              Founder & Chief Executive Officer
            </Typography>
          </Box>
          <Box textAlign="center">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src="https://getpeppermint.co/wp-content/uploads/2022/03/Runal-Photo-150x150.png"
                sx={{ width: 150, height: 150 }}
              />
            </Box>
            <Typography mt={3} fontSize={20} fontWeight={500}>Miraj Vora</Typography>
            <Typography fontSize={20}>
              Co-Founder & Chief Sales Officer
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Teams;
