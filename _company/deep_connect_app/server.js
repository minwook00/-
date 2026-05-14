// Backend setup for Node.js/Express server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Frontend와 통신을 위해 필요

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Placeholder API Endpoint (데이터는 추후 DB 연결로 대체)
app.get('/', (req, res) => {
    res.send('Deep Connect API is running!');
});

// --- 데이터 모델 및 로직은 여기에 추가될 예정 ---

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});