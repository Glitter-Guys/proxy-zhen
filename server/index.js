const express = require('express')
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 9001;

app.use(morgan('dev'));

//to serve bundle file
app.use('/event/:eventid/bundle.js', function(req, res, next) {
    fs.readFile('./client/dist/bundle.js', 'utf-8', function(err, data) {
        res.status(200);
        res.end(data);
    })
})

app.use('/event/:eventid/', express.static(path.join(__dirname, '../client/dist')));
// app.use('/event/247627544/', express.static(path.join(__dirname, '../client/dist')));

///\/event\/.*?\//, 
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});