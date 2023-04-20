import React, { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useItembyName } from "../../hooks/useItembyName";
function Search() {
  const [searchTerm, setSearchTerm] = useState(null);
  const { data } = useItembyName(searchTerm);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setTimeout(() => {
      if (value?.length >= 2) {
        setSearchTerm(value);
      }
    }, 500);
  };

  return (
    <>
      <Autocomplete
        fullWidth
        loadingText="loading ....."
        options={data ? data : []}
        getOptionLabel={(option) => option.attributes.name}
        popupIcon={<SearchIcon />}
        sx={{
          "& .MuiAutocomplete-popupIndicator": {
            transform: "none",
          },
          backgroundColor: "background.paper",
        }}
        noOptionsText="Exemple the last of us "
        renderOption={(props, option) => (
          <Link to={`/item/${option.id}`} style={{ textDecoration: "none" }}>
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="60px"
                src={option.attributes.image.data.attributes.url}
                alt=""
              />
              <Typography variant="h6" color={"primary"}>
                {option.attributes.name}
              </Typography>
            </Box>
          </Link>
        )}
        renderInput={(params) => (
          <TextField
            onChange={handleInputChange}
            sx={{
              "& fieldset": {
                border: "none",
              },
            }}
            {...params}
            placeholder="Search Games"
          />
        )}
      />
    </>
  );
}

export default Search;
