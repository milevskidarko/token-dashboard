import React, { useState, useEffect } from "react";

const DexDetails = ({ dexData }) => {
  const [selectedPair, setSelectedPair] = useState("");

  useEffect(() => {
    if (dexData?.length > 0) {
      setSelectedPair(dexData[0].pair);
    }
  }, [dexData]);

  const handleSelectChange = (event) => {
    setSelectedPair(event.target.value);
  };

  const selectedDex = dexData?.find((dex) => dex.pair === selectedPair);

  return (
    <div className="dex-details">
      <h2>DEX Information</h2>
      <select onChange={handleSelectChange} value={selectedPair}>
        <option value="" disabled>
          Select a pair
        </option>
        {dexData?.map((dex, index) => (
          <option key={index} value={dex?.pair}>
            {dex?.pair} ({dex?.name})
          </option>
        ))}
      </select>

      {selectedDex && (
        <div className="dex-details-info">
          <p>
            <strong>Name:</strong> {selectedDex?.name}
          </p>
          <p>
            <strong>Liquidity Type:</strong> {selectedDex?.liquidity_type}
          </p>
          <p>
            <strong>Liquidity:</strong> {selectedDex?.liquidity}
          </p>
          <p>
            <strong>Pair:</strong> {selectedDex?.pair}
          </p>
        </div>
      )}
    </div>
  );
};

export default DexDetails;
