import { useState, useEffect } from "react";
import { Box, Paper, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Importér alle billeder i assets/images automatisk
const images = import.meta.glob("../assets/images/overlook/*", { eager: true });
const imageArray = Object.values(images).map((img) => img.default);

export const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => setIndex((prev) => (prev + 1) % imageArray.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        height: "460px",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          top: "50%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            // width: "100%",
            bgcolor: "#000000a0",
            textTransform: "uppercase",
            color: "#ffffff",
            borderRadius: "0 0 1000px 0",
            padding: "1rem",
            paddingRight: "50px",
          }}
        >
          Velkommen til Hotel Overlook Online
        </Typography>
        <Box
          sx={{
            height: "1rem",
            width: "70%",
            bgcolor: "#ff0000a0",
            borderRadius: "0 0 1000px 0",
          }}
        />
      </Box>
      <Box
        component="img"
        src={imageArray[index]}
        alt="Slideshow"
        sx={{
          width: "100%",
          height: "auto",
        }}
      />
      <IconButton
        onClick={prevImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Paper>
  );
};
