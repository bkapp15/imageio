import React, {useRef} from 'react';

const SearchInput = ({setSearchStr}) => {

  const searchInputRef = useRef(undefined);

  const handleSearch = () => {
    const inputVal = searchInputRef.current.value.trim();
    setSearchStr(inputVal);
  };

  const clearSearch = () => {
    searchInputRef.current.value = '';
    setSearchStr('');
  };

  const checkAndHandleEnter = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className="row start-xs search">
      <div className="col-xs-6">
        <input type="text" name="search" ref={searchInputRef} onKeyUp={checkAndHandleEnter} />
      </div>
      <div className="col-xs-6">
        <div className="row between-xs">
          <div className="col-xs-6">
            <button onClick={handleSearch} className="btn-main">Search</button>
          </div>
          <div className="col-xs-6">
            <button onClick={clearSearch} className="btn-main">Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SearchInput;
