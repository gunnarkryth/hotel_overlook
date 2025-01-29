import { useFetch } from "../hooks/useFetch";
import {
  CircularProgress,
  Alert,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const Slideshow = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/imagelist");

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  console.log(data);

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Hoteller
      </Typography>
      <List>
        {data?.map((hotel) => (
          <ListItem key={hotel.id}>
            <img src="" alt="" srcset="" />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
