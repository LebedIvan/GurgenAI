const coins = [
    "Bitcoin", 
    "Ethereum", 
    "Binance Coin", 
    "Ripple", 
    "Cardano", 
    "Litecoin", 
    "Polkadot", 
    "Bitcoin Cash", 
    "Stellar", 
    "Chainlink", 
    "Dogecoin", 
    "Uniswap", 
    "Aave", 
    "Cosmos", 
    "Monero", 
    "Solana", 
    "EOS", 
    "Tezos", 
    "Algorand", 
    "VeChain", 
    "TRON", 
    "IOTA", 
    "Dash", 
    "Ethereum Classic", 
    "NEO", 
    "Zcash", 
    "Theta", 
    "Filecoin", 
    "Maker", 
    "Avalanche", 
    "Terra", 
    "Compound", 
    "FTX Token", 
    "Crypto.com Coin", 
    "Kusama", 
    "Decred", 
    "Synthetix", 
    "Huobi Token", 
    "SushiSwap", 
    "PancakeSwap", 
    "Elrond", 
    "Waves", 
    "Yearn.finance", 
    "NEM", 
    "Chiliz", 
    "Helium", 
    "Zilliqa", 
    "Enjin Coin", 
    "Decentraland", 
    "Holo"
];


analyticsButton.addEventListener('click', () => {
    const randomCoin = coins[Math.floor(Math.random() * coins.length)];
    const prediction = Math.random() > 0.5 ? 'улетит на Луну' : 'скорректируется немного, придется попить воду и поесть хлеб какое-то время'; // Простой прогноз
    gurgenMessage.textContent = `Прогноз для ${randomCoin}: цена ${prediction}.`;
});
