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
const sendButton = document.getElementById('sendButton');
const userInput = document.getElementById('userInput');
const userMessagesDiv = document.getElementById('userMessages');
const gurgenMessagesDiv = document.getElementById('gurgenMessages');

sendButton.addEventListener('click', () => {
    const userText = userInput.value;
    if (userText) {
        addUserMessage(userText);
        getGurgenResponse();
    }
    userInput.value = '';
});

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    userMessagesDiv.appendChild(messageDiv);
    userMessagesDiv.scrollTop = userMessagesDiv.scrollHeight;
}

function getGurgenResponse() {
    const response = "Это просто пример ответа Гургена."; // Здесь будет логика для получения ответа от Гургена
    const messageDiv = document.createElement('div');
    messageDiv.textContent = response;
    gurgenMessagesDiv.appendChild(messageDiv);
    gurgenMessagesDiv.scrollTop = gurgenMessagesDiv.scrollHeight;
}

// Весь предыдущий код JavaScript сохраняется
// Обновляем только функции добавления сообщений:

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.className = 'userMessage';
    userMessagesDiv.appendChild(messageDiv);
    userMessagesDiv.scrollTop = userMessagesDiv.scrollHeight; // Прокрутка к последнему сообщению пользователя
}

function addGurgenMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.className = 'gurgenMessage';
    gurgenMessagesDiv.appendChild(messageDiv);
    gurgenMessagesDiv.scrollTop = gurgenMessagesDiv.scrollHeight; // Прокрутка к последнему сообщению Гургена
}

// Обновляем функцию getGurgenResponse, чтобы использовать addGurgenMessage:

function getGurgenResponse() {
    // Предполагается, что массив `coins` уже определён выше в вашем скрипте
    const randomCoin = coins[Math.floor(Math.random() * coins.length)];
    const prediction = Math.random() > 0.5 ? 'Ты дурак. улетит на Луну' : 'Позврослей, емае. скорректируется немного, придется попить воду и поесть хлеб какое-то время';
    const gurgenText = ` ${randomCoin}: ${prediction}.`;
    addGurgenMessage(gurgenText);
}
