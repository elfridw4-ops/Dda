import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static assets with decoded filenames
app.use(express.static(__dirname));

// Route handlers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/resto', (req, res) => {
  res.sendFile(path.join(__dirname, 'resto.html'));
});

app.get('/galerie', (req, res) => {
  res.sendFile(path.join(__dirname, 'galerie.html'));
});

// Fallback
app.get('*', (req, res) => {
  const requestedPath = path.join(__dirname, req.path);
  res.sendFile(requestedPath, (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Le Délice Africain running at http://${HOST}:${PORT}`);
});
