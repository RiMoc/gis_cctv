const express = require('express')



const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index', { code: "NSW01" }))
app.get('/:code', (req, res) => res.render('index', { code: req.params.code }) )

app.listen(port, () => console.log(`\x1b[36m[ INFO ]\x1b[0m Server is Running !`))