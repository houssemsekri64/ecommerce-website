import React, { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setTimeout(() => {
      if (value?.length >= 2) {
        setLoading(true);
        fetchResults(value);
      } else {
        setSearchResults([]);
      }
    }, 500);
  };
  const fetchResults = async (query) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/api/items?populate=image&filters[name][$containsi]=${query}`
      );
      const responseJson = await response.json();
      setSearchResults(responseJson.data);
      setLoading(false);
    } catch (error) {}
  };
  return (
    <>
      <Autocomplete
        fullWidth
        loading={loading}
        loadingText="loading ....."
        options={searchResults}
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
