import React, { useState } from 'react';
import '../styles.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function TokenSearch({ onSearch }) {
  const [address, setAddress] = useState("");
  const defaultAddress = "0xEa51801b8F5B88543DdaD3D1727400c15b209D8f";

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(address);
  };

  const isAddressValid = address === defaultAddress;

  return (
    <div className="token-search">
      <h2>Search for a Token</h2>

      <div className="input-container">
        <input
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Copy token address from right button on clipboard"
        />
        <CopyToClipboard text={defaultAddress} className='copy-button'>
          <button data-for="copyTooltip">📋</button>
        </CopyToClipboard>
      </div>
      <button className='search-button' disabled={!isAddressValid} onClick={handleSubmit}>Search</button>

    </div>
  );
}

export default TokenSearch;
