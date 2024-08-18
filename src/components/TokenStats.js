import React from 'react';
import '../styles.scss';

const TokenStats = ({ token }) => {
    return (
        <div className="token-stats-card">
            <h1>
                {token?.token_name} ({token?.token_symbol})
            </h1>
            <p><strong>Total Supply:</strong> {token?.total_supply}</p>
            <p><strong>Buy Tax:</strong> {token?.buy_tax}</p>
            <p><strong>Sell Tax:</strong> {token?.sell_tax}</p>
            <p><strong>Creator Address:</strong> {token?.creator_address}</p>
            <p><strong>Creator Balance:</strong> {token?.creator_balance}</p>
            <p><strong>Anti Whale Modifiable:</strong> {token?.anti_whale_modifiable}</p>
            <p><strong>Hidden Owner:</strong> {token?.hidden_owner}</p>
            <p><strong>Is Anti Whale:</strong> {token?.is_anti_whale}</p>
            <p><strong>Is Blacklisted:</strong> {token?.is_blacklisted}</p>
            <p><strong>Is Honeypot:</strong> {token?.is_honeypot}</p>
            <p><strong>Is Mintable:</strong> {token?.is_mintable}</p>
            <p><strong>Is Open Source:</strong> {token?.is_open_source}</p>
            <p><strong>Is Proxy:</strong> {token?.is_proxy}</p>
            <p><strong>Is Whitelisted:</strong> {token?.is_whitelisted}</p>
            <p><strong>Transfer Pausable:</strong> {token?.transfer_pausable}</p>
            <p><strong>Trading Cooldown:</strong> {token?.trading_cooldown}</p>
        </div>
    );
};

export default TokenStats;
