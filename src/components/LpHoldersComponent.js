import React, { useState, useEffect } from "react";
import "../styles.scss";

const LPHolders = ({ lpHoldersData = [] }) => {
  const [selectedLPHolder, setSelectedLPHolder] = useState("");

  useEffect(() => {
    if (lpHoldersData.length > 0) {
      setSelectedLPHolder(lpHoldersData[0].address);
    }
  }, [lpHoldersData]);

  const handleSelectChange = (event) => {
    setSelectedLPHolder(event.target.value);
  };

  const lpHolderDetails = lpHoldersData.find(
    (lpHolder) => lpHolder.address === selectedLPHolder
  );

  return (
    <div className="lp-holders">
      <h2>LP Holders</h2>
      <select
        onChange={handleSelectChange}
        value={selectedLPHolder}
        className="lp-holders-select"
      >
        <option value="">Select an Address</option>
        {lpHoldersData.map((lpHolder, index) => (
          <option key={index} value={lpHolder.address}>
            {lpHolder.address}
          </option>
        ))}
      </select>

      {lpHolderDetails ? (
        <div className="lp-holder-details">
          <p>
            <strong>Address:</strong> <p className="address">{lpHolderDetails.address}</p>
          </p>
          <p>
            <strong>Balance:</strong> {lpHolderDetails.balance}
          </p>
          <p>
            <strong>Percent:</strong> {lpHolderDetails.percent}
          </p>
          <p>
            <strong>Is Contract:</strong>{" "}
            {lpHolderDetails.is_contract ? "Yes" : "No"}
          </p>
          <p>
            <strong>Is Locked:</strong>{" "}
            {lpHolderDetails.is_locked ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p className="no-details">
          No details available. Please select an LP holder.
        </p>
      )}
    </div>
  );
};

export default LPHolders;
