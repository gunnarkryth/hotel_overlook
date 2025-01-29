import { useFetch } from "../hooks/useFetch";
import { Avatar, Box, Card, CardHeader } from "@mui/material";
import { Masonry } from "@mui/lab";
import { NavLink } from "react-router-dom";
import { HotelList } from "../components/HotelList";

export const Home = () => {

  return (
    <p>
      <HotelList />
    </p>
  );
};
