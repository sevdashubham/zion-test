import React from 'react'

const SearchBar = ({handleChange, inputValue, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' className='form-control input-search' placeholder='Search Users Here' onChange={handleChange} value={inputValue}/>
        </form>
    )
};

export default SearchBar
