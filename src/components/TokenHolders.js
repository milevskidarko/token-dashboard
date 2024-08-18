import React, { useState, useEffect } from "react";
import "../styles.scss";

const TokenHolders = ({ holdersData = [] }) => {
  const [selectedHolder, setSelectedHolder] = useState("");
  useEffect(() => {
    if (holdersData.length > 0) {
      setSelectedHolder(holdersData[0].address);
    }
  }, [holdersData]);

  const handleSelectChange = (event) => {
    setSelectedHolder(event.target.value);
  };

  const holderDetails = holdersData.find(
    (holder) => holder.address === selectedHolder
  );

  return (
    <div className="token-holders">
      <h2>Holders</h2>
      <select
        onChange={handleSelectChange}
        value={selectedHolder}
        className="holders-select"
      >
        <option value="">Select an Address</option>
        {holdersData.map((holder, index) => (
          <option key={index} value={holder.address}>
            {holder.address}
          </option>
        ))}
      </select>

      {holderDetails ? (
        <div className="holder-details">
          <p>
            <strong>Address:</strong> <p className="address">{holderDetails.address}</p>
          </p>
          <p>
            <strong>Balance:</strong> {holderDetails.balance}
          </p>
          <p>
            <strong>Percent:</strong> {holderDetails.percent}
          </p>
          <p>
            <strong>Is Contract:</strong>{" "}
            {holderDetails.is_contract ? "Yes" : "No"}
          </p>
          <p>
            <strong>Is Locked:</strong> {holderDetails.is_locked ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p className="no-details">
          No details available. Please select a holder.
        </p>
      )}
    </div>
  );
};

export default TokenHolders;
