import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
export default function Paginatie({ searchValue, pageCount, setImageList }) {
  const [page, setPage] = React.useState(1);
  const handleChange = async (event, value) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=_&q=${searchValue}&image_type=photo&pretty=true&per_page=10&page=${value}`
    );
    setPage(value);
    setImageList(response.data.hits);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
