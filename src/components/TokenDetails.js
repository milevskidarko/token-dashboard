import React from "react";
import TokenStats from "./TokenStats";
import DexDetails from "./DexDetails";
import TokenHolders from "./TokenHolders";
import LPHolders from "./LpHoldersComponent";
import "../styles.scss";

const TokenDetails = ({ tokenData }) => {
  const token =
    tokenData?.result?.["0xea51801b8f5b88543ddad3d1727400c15b209d8f"];
  return (
    <div className="token-dashboard">
      <div className="token-column left">
        <TokenStats token={token} />
      </div>

      <div className="token-column right">
        <DexDetails dexData={token?.dex} />
        <TokenHolders holdersData={token?.holders} />
        <LPHolders lpHoldersData={token?.lp_holders} />
      </div>
    </div>
  );
};

export default TokenDetails;
