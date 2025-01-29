import { useFetch } from "../hooks/useFetch";
import { Avatar, Box, Card, CardHeader } from "@mui/material";
import { Masonry } from "@mui/lab";
import { NavLink } from "react-router-dom";
// import { HotelList } from "../components/HotelList";
import { Slideshow } from "../components/Slideshow";

export const Home = () => {
  return (
    <>
      {/* <HotelList /> */}
      <Slideshow />
    </>
  );
};
