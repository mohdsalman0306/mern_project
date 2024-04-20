 const express = require('express');

 const app = express();

 app.get('/', (req, res) => {
    res.send('Hello World!')
 })

 const PORT = process.env.PORT || '5001';
 
 console.log(PORT)

 app.listen(PORT);