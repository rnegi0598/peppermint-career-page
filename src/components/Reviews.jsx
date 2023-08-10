import { Box } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const data = [
  {
    img: "https://cdn.pixabay.com/photo/2020/06/05/04/02/woman-5261377_960_720.png",
    review:
      "Joining Peppermint was a game-changer for my career. As a robotics designer, I get to create intelligent cleaning robots that are changing the way spaces are maintained. The company's commitment to sustainability and technological excellence makes every day exciting and fulfilling.",
    name: "Emily S",
    designation: "Robotics Designer",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_960_720.jpg",
    review:
      "Working at Peppermint has been an incredible experience. The team's dedication to creating cutting-edge cleaning robots is inspiring. The collaborative atmosphere fosters innovation, and I'm proud to be contributing to solutions that have a real impact on the cleaning industry.",
    name: "John D",
    designation: "Software Engineer",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/06/05/04/02/woman-5261377_960_720.png",
    review:
      "Joining Peppermint was a game-changer for my career. As a robotics designer, I get to create intelligent cleaning robots that are changing the way spaces are maintained. The company's commitment to sustainability and technological excellence makes every day exciting and fulfilling.",
    name: "Emily S",
    designation: "Robotics Designer",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_960_720.jpg",
    review:
      "Peppermint's commitment to accountability and sustainable operations is truly commendable. As an operations manager, I've witnessed how our focus on delivering top-notch services aligns perfectly with our mission. It's not just about robots; it's about revolutionizing the way we clean our environments.",
    name: "Alex L",
    designation: "Operations Manager:",
  },
];
const Reviews = () => {
  const [currentInd, setCurrentInd] = useState(0);

  const prevHandler = () => {
    if (currentInd === 0) {
      setCurrentInd(data.length - 1);
    } else {
      setCurrentInd((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (currentInd === data.length - 1) {
      setCurrentInd(0);
    } else {
      setCurrentInd((prev) => prev + 1);
    }
  };

  return (
    <Box pt={10} position="relative">
      <div
        style={{
          fontSize: 50,
          position: "absolute",
          top: "50%",
          left: "-50px",
          cursor: "pointer",
        }}
        onClick={prevHandler}
      >
        <ArrowBackIosIcon fontSize="large" />
      </div>
      <div style={cardStyles}>
        <div style={imgStyles}>
          <img
            style={{ width: 300, height: 300, }}
            src={data[currentInd].img}
            alt={data[currentInd].name}
          />
        </div>
        <div style={empReviewStyles}>
          <div style={reviewStyles}> {data[currentInd].review} </div>
          <div style={nameStyles}>{data[currentInd].name}</div>
          <div style={desgstyles}>{data[currentInd].designation}</div>
        </div>
      </div>
      <div
        style={{
          fontSize: 50,
          position: "absolute",
          top: "50%",
          right: "-50px",
          cursor: "pointer",
        }}
        onClick={nextHandler}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </div>
    </Box>
  );
};
const cardStyles = {
  display: "flex",
  gap: 40,
};
const imgStyles = {
  
};
const empReviewStyles = {
  alignSelf: "center",
};
const reviewStyles = {
  fontStyle: "italic",
  wordSpacing: 5,
  fontSize: 20,
};
const nameStyles = {
  fontWeight: 600,
  fontSize: 30,
  marginTop: 20,
};
const desgstyles = {
  fontSize: 15,
};

export default Reviews;
