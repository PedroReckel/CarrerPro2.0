const app = require('express')()
const cors = require('cors')
const consign = require('consign')
const db = require('./config/db')

app.db = db
app.use(cors())

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

const port = 4000

app.listen(port, () => {
    console.log(`Backend executando na porta ${port}`)
})