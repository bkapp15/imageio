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
    <div className="row start-xs search">
      {/*<label>Search for an image: </label>*/}
      <div className="col-xs-8">
        <input type="text" name="search" ref={searchInputRef} onKeyUp={checkAndHandleEnter} />
      </div>
      <div className="col-xs-4">
        <button onClick={handleSearch} className="btn-main">Search</button>
      </div>
    </div>
  )
};

export default SearchInput;
