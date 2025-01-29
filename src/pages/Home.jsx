import { useFetch } from "../hooks/UseFetch";
import { Avatar, Box, Card, CardHeader } from "@mui/material";
import { Masonry } from "@mui/lab";
import { NavLink } from "react-router-dom";
import HotelList from "../components/HotelList";

export const Home = () => {
  // const { data, loading, error } = useFetch({ contentType: "character" });

  // if (loading && !data) return <div>Loading...</div>;
  // if (error) return <div>Error: {error?.message || "Error!"}</div>;

  // if (!data) {
  //   return <div>No characters found</div>;
  // }

  const columns = {
    xs: 1,
    sm: 3,
    md: 5,
  };

  return (
    <p>
      <HotelList />
    </p>
  );
};
