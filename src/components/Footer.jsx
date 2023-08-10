import {
  Box,
  Container,
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Link,
} from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" mt={10}>
      <Container
        sx={{
          p: 5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Box>
          <Typography
         
            fontSize={30}
            fontWeight={500}
            color="#fff"
          >
            Aubotz Labs Pvt Ltd
          </Typography>
          <List sx={{ maxWidth: 500, color: "primary.text" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BusinessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk, Jai Bhavani Nagar, Pashan,Pune, Maharashtra 411021" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="info@getpeppermint.co" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="+91 89567 10044" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography
            fontSize={30}
            fontWeight={500}
            color="#fff"
          >
            Quick Links
          </Typography>
          <List>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                FAQ
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Products
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Blog
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Privacy Policy
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography
            fontSize={30}
            fontWeight={500}
            color="#fff"
          >
            Recent Posts
          </Typography>
          <List>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Elevating Efficiency: Evolution of Material Handling with AMRs
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Autonomous Mobile Robots: The Future of Efficient Material
                Handling
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="primary.text"
                underline="hover"
                href="https://getpeppermint.co/about-us/"
              >
                Robotic Floor Scrubbers – The Future of Autonomous Cleaning at
                Airports
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
