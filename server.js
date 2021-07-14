const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes');
const { errors } = require('celebrate')
const { PORT } = require('./src/constants/config')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'));

app.use('/api/v1', routes);
app.use(errors())

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})