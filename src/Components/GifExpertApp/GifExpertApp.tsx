import React, { useState } from 'react';
import GifGrid from '../GifGrid/GifGrid';
import SearchBar from '../SearchBar/SearchBar';
import './styles.css';

const GifExpertApp = () => {
  const [searchData, setSearchData] = useState(['Samurai X']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <SearchBar searchData={searchData} setSearchData={setSearchData} />
      <hr />
      <ol>
        {searchData.map((item, id) => (
          <GifGrid key={id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
