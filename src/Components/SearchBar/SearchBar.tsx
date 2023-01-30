import React, { useState } from 'react';
import './styles.css';

type Props = {
  searchData: string[];
  setSearchData: React.Dispatch<React.SetStateAction<string[]>>;
};

const SearchBar = (props: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      props.setSearchData((cats) => [inputValue, ...cats]);
      setInputValue('');
    } else {
      console.log('error en la distancia');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="find your gifs here!!!"
        type="text"
        value={inputValue}
      ></input>
    </form>
  );
};

export default SearchBar;
