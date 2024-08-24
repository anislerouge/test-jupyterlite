const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Définir le dossier dist comme dossier de fichiers statiques
app.use(express.static(path.join(__dirname, 'dist')));

// Route pour servir l'application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port http://localhost:${port}`);
});
