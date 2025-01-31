export const HotelDetails = () => {
  // ... existing hooks ...

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      {/* Hotel Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#1a237e",
            mb: 1,
          }}
        >
          {hotel?.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarIcon
                key={i}
                sx={{
                  color: i < hotel?.stars ? "#ffc107" : "#e0e0e0",
                  fontSize: "1.5rem",
                }}
              />
            ))}
        </Box>
      </Box>

      {/* Room Listing */}
      <Grid container spacing={4}>
        {hotel?.rooms?.map((room) => (
          <Grid item xs={12} md={6} key={room.id}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {room.type}
              </Typography>

              {/* Price Options */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                    <Typography variant="h6">Normal Pris</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Kan ikke ændres/afbestilles
                    </Typography>
                    <Typography variant="h5" color="primary">
                      {room.normalPrice} DKK
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ mt: 1 }}
                      onClick={() => handleRoomSelect(room, "normal")}
                    >
                      Book Normal
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 2, bgcolor: "#fff3e0" }}>
                    <Typography variant="h6">Flex Pris</Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Fri afbestilling
                    </Typography>
                    <Typography variant="h5" color="secondary">
                      {room.flexPrice} DKK
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 1 }}
                      onClick={() => handleRoomSelect(room, "flex")}
                    >
                      Book Flex
                    </Button>
                  </Paper>
                </Grid>
              </Grid>

              {/* Room Facilities */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {room.facilities.map((facility) => (
                  <Chip
                    key={facility}
                    label={facility}
                    sx={{
                      bgcolor: "#e8eaf6",
                      borderRadius: 1,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Reviews Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Gæsteanmeldelser
        </Typography>

        {hotel?.reviews?.map((review) => (
          <Paper key={review.id} sx={{ p: 3, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{
                      color: i < review.rating ? "#ffc107" : "#e0e0e0",
                      fontSize: "1.2rem",
                    }}
                  />
                ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {review.comment}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              - {review.author}, {new Date(review.date).toLocaleDateString()}
            </Typography>
          </Paper>
        ))}

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          startIcon={<CommentIcon />}
          onClick={handleReviewOpen}
        >
          Skriv anmeldelse
        </Button>
      </Box>
    </Box>
  );
};
