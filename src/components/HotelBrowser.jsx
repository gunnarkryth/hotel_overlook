import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Alert,
} from "@mui/material";

export const HotelBrowser = () => {
  const {
    data: countries,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Log initial data load
  console.log("Loaded countries:", countries);

  // Get selected country details
  const selectedCountryData = countries?.find(
    (c) => c.slug === selectedCountry
  );

  // Log country selection changes
  console.log("Selected country:", selectedCountryData?.name);

  // Get all hotels in selected country
  const countryHotels =
    selectedCountryData?.cities?.flatMap(
      (city) =>
        city.hotels?.map((hotel) => ({
          ...hotel,
          city: city.name,
          country: selectedCountryData.name,
        })) || []
    ) || [];

  // Log hotels when country changes
  console.log("Hotels in country:", countryHotels);

  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Find Hotels
      </Typography>

      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Select Country</InputLabel>
        <Select
          value={selectedCountry}
          label="Select Country"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countries?.map((country) => (
            <MenuItem key={country.slug} value={country.slug}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCountry && (
        <>
          <Typography variant="h5" gutterBottom>
            Hotels in {selectedCountryData?.name}
          </Typography>

          <Grid container spacing={3}>
            {countryHotels?.map((hotel) => (
              <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                <Card>
                  {hotel.image && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={hotel.image}
                      alt={hotel.name}
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {hotel.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hotel.city}, {hotel.country}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Rating: {"★".repeat(hotel.stars)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {selectedCountry && countryHotels.length === 0 && (
        <Alert severity="info" sx={{ mt: 2 }}>
          No hotels found in this country
        </Alert>
      )}
    </Container>
  );
};
