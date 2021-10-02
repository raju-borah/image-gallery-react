import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setSearchValue(props.value);
  }, [props.value]);
  return (
    <Paper
      component="form"
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 1px 1px green",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSearch(searchValue);
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "Search..." }}
        value={searchValue || " "}
        required
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <ImageSearchIcon />
      </IconButton>
    </Paper>
  );
}
