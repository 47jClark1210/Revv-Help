const express = require('express');
const path = require('path');

const app = express()
const port = 3000

app.get('/api/test', (req, res) => {
  res.send('Hello World!')
})

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static'), {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-store');
  }
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})