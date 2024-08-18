import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TokenSearch from "./components/TokenSearch";
import TokenDetails from "./components/TokenDetails";
import WalletConnect from "./components/WalletConnect";
import TokenChart from "./components/TokenChart";
import BackButton from "./components/BackButton";
import { fetchTokenData } from "./utils/api";

const App = () => {
  const [isConnected, setIsConnected] = useState(() => {
    const savedState = sessionStorage.getItem("isConnected");
    return savedState === "true";
  });
  const [tokenData, setTokenData] = useState(() => {
    const savedData = sessionStorage.getItem("tokenData");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("isConnected", isConnected);
    sessionStorage.setItem("tokenData", JSON.stringify(tokenData));
  }, [isConnected, tokenData]);

  const handleConnectWallet = () => {
    setIsConnected(true);
  };

  const handleSearch = async (address) => {
    setLoading(true);
    try {
      const data = await fetchTokenData(address);
      setTokenData(data);
      navigate("/details");
    } catch (err) {
      console.log("Error fetching token data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!isConnected && <WalletConnect onConnect={handleConnectWallet} />}
      {isConnected && (
        <Routes>
          <Route
            path="/"
            element={isConnected && <TokenSearch onSearch={handleSearch} />}
          />
          <Route
            path="/details"
            element={
              <>
                <BackButton setIsConnected={setIsConnected} />
                {loading && <p className="loading">Loading...</p>}
                {tokenData ? (
                  <>
                    <TokenDetails tokenData={tokenData} />
                    <TokenChart data={tokenData} />
                  </>
                ) : (
                  <p>No token data available.</p>
                )}
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
