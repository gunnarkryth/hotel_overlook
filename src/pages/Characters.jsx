import { useFetch } from "../utils/UseFetch";
import { Avatar, Box, Card, CardHeader } from "@mui/material";
import { Masonry } from "@mui/lab";
import { NavLink } from "react-router-dom";

export const Characters = () => {
  const { data, loading, error } = useFetch({ contentType: "character" });

  if (loading && !data) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message || "Error!"}</div>;

  if (!data) {
    return <div>No characters found</div>;
  }

  const columns = {
    xs: 1,
    sm: 3,
    md: 5,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Masonry spacing={2} columns={columns}>
        {data.map((character) => (
          <NavLink
            key={character.sys.id}
            style={{ textDecoration: "none" }}
            to={`/characters/${character.fields.slug}`}
          >
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label=""
                    src={character?.fields?.image?.fields?.file?.url}
                    sx={{
                      objectPosition: "top",
                      objectFit: "cover",
                    }}
                  ></Avatar>
                }
                title={character?.fields?.name}
                subheader={character?.fields?.shortDescription}
                sx={{
                  bgcolor: character?.fields?.color,

                  "& .MuiCardHeader-title": {
                    color: character?.fields?.color ? "#ffffff" : "000000",
                    textShadow: character?.fields?.color
                      ? "#000000a0 0 1px 3px"
                      : "",
                  },
                  "& .MuiCardHeader-subheader": {
                    color: character?.fields?.color ? "#ffffffc0" : "000000",
                    textShadow: character?.fields?.color
                      ? "#000000a0 0 1px 3px"
                      : "",
                  },
                }}
              />
            </Card>
          </NavLink>
        ))}
      </Masonry>
    </Box>
  );
};
