const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;
const DB_FILE = './db.json';

app.use(express.json(), express.static(path.join(__dirname)));

const readDB = async () => JSON.parse(await fs.readFile(DB_FILE, 'utf8'));
const writeDB = async (data) => fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));

const handleRequest = (handler) => async (req, res) => {
    try {
        const result = await handler(req);
        res.json({ success: true, ...result });
    } catch (error) {
        console.error(error.message);
        res.status(error.status || 500).json({ success: false, message: error.message });
    }
};

app.post('/save-configs', handleRequest(async (req) => {
    const { configs } = req.body;
    if (!Array.isArray(configs)) throw { status: 400, message: 'Data configs tidak valid. Harus berupa array.' };
    const db = await readDB();
    db.configs = configs;
    await writeDB(db);
    return { message: 'Configs berhasil disimpan.' };
}));

app.post('/save-auth-token', handleRequest(async (req) => {
    const { authToken } = req.body;
    if (!authToken) throw { status: 400, message: 'Auth token tidak boleh kosong.' };
    const db = await readDB();
    db.authToken = authToken;
    await writeDB(db);
    return { message: 'Auth token berhasil disimpan.' };
}));

app.get('/load-configs', handleRequest(async () => {
    const { authToken = '', configs = [] } = await readDB();
    return { authToken, configs };
}));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));