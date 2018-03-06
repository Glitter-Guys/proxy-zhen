const express = require('express')
const morgan = require('morgan');
const path = require('path');


const app = express();
const port = process.env.PORT || 9001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(/\/event\/.*\/.*/ ,express.static(path.join(__dirname, '../client/src')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});