const express = require('express')
require('dotenv').config() 
const db = require('./utils/db.js')
const initModels = require('./models/initModels')
const productRouter = require('./products/products.router')

const app = express();
app.use(express.json());

db.authenticate()
.then(() => console.log('Database authenticated'))
.catch(err => console.log(err))

db.sync()
.then(() => console.log('Database synced'))
.catch(err => console.log(err))
initModels()


app.use('/api/v1', productRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});




