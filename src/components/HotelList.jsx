import { useFetch } from "../hooks/useFetch";
import {
  CircularProgress,
  Alert,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Grid,
  Card,
  Box,
} from "@mui/material";

export const HotelList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/destinations"
  );

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      // Countries nav bar
      <List sx={{ display: "flex", justifyContent: "center" }}>
        {data?.map((destination) => (
          <ListItem key={destination.id}>
            <ListItemText primary={destination.name} secondary={``} />
          </ListItem>
        ))}
      </List>
      // Hotels by country
      <Grid container>
        {data?.map((hotel) => (
          <Grid item>
            <Card>
              <Box src="" />
              <Typography variant="h3" color="initial">
                {hotel.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
