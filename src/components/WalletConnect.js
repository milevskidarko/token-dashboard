import React from "react";
import "../styles.scss";
const WalletConnect = ({ onConnect }) => (
  <div className="wallet-connect">
    <h2>Connect Your Wallet</h2>
    <button onClick={onConnect}>Connect Wallet</button>
  </div>
);

export default WalletConnect;
