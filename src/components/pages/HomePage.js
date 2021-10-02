import React, { useState, useEffect } from "react";
import SimpleContainer from "../UI/SimpleContainer";
import SearchBar from "../Form/SearchBar";
import StandardImageList from "../List/StandardImageList";
import Paginate from "../Paginate/Paginate";
import axios from "axios";

const HomePage = () => {
  const [imageList, setImageList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const searchHandlder = async (searchValue = "car") => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=23662182-a70494797e8140caffbf82463&q=${searchValue}&image_type=photo&pretty=true&per_page=10}`
    );
    setSearch(searchValue);
    setImageList(response.data.hits);
    console.log(response.data.totalHits);
  };
  useEffect(() => searchHandlder(), []);

  return (
    <SimpleContainer>
      <h1>PixaBay Image Gallery</h1>
      {/* SearchBar */}
      <SearchBar onSearch={searchHandlder} />
      {/* {imageList.length} */}
      <StandardImageList images={imageList}></StandardImageList>
      <Paginate
        count={pageCount}
        setImageList={setImageList}
        searchValue={search}
      />
    </SimpleContainer>
  );
};

export default HomePage;
