import React, {useRef} from 'react';

const SearchInput = ({setSearchStr}) => {

  const searchInputRef = useRef(undefined);

  const handleSearch = () => {
    const inputVal = searchInputRef.current.value.trim();
    setSearchStr(inputVal);
  };

  const checkAndHandleEnter = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <>
      <label>Search for an image: </label>
      <input type="text" name="search" ref={searchInputRef} onKeyUp={checkAndHandleEnter}/>
      <button onClick={handleSearch} >Search</button>
    </>
  )
};

export default SearchInput;
