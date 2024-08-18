import React, { useState } from "react";
import TokenSearch from "./components/TokenSearch";
import TokenDetails from "./components/TokenDetails";
import ModalComponent from "./components/ModalComponent";
import TokenChart from "./components/TokenChart";
import { fetchTokenData } from "./utils/api";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleConnectWallet = () => {
    setIsConnected(true);
    setShowModal(false);
  };

  const handleSearch = async (address) => {
    setLoading(true);
    try {
      const data = await fetchTokenData(address);
      setTokenData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {showModal && <ModalComponent onConnect={handleConnectWallet} />}
      {!showModal && isConnected && (
        <>
          <TokenSearch onSearch={handleSearch} />
          {loading && <p className="loading">Loading...</p>}
          {tokenData && !loading && <TokenDetails tokenData={tokenData} />}
          {tokenData && !loading && <TokenChart data={tokenData} />}
        </>
      )}
    </div>
  );
}

export default App;
