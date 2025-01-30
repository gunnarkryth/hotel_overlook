import { useState, useEffect } from "react";
import { Box, Paper, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Importér alle billeder i assets/images automatisk
const images = import.meta.glob("../assets/images/*", { eager: true });
const imageArray = Object.values(images).map((img) => img.default);

export const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % imageArray.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={imageArray[index]}
        alt="Slideshow"
        sx={{ width: "100%", height: "auto" }}
      />
      <IconButton
        onClick={prevImage}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
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
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Paper>
  );
};
