const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`)
})