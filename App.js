const express = require('express')
const eprHbs = require('express-handlebars')
const HomeRouter = require('./routes/home')
const MenuRouter = require('./routes/menu')

const PORT = process.env.port || 5000
const app = express()
const hbs = eprHbs.create({
  layout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use('/', HomeRouter)
app.use('/menu', MenuRouter)

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`) )
