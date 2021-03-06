require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controllers/authController')
const ctrl = require('./controllers/Controller')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/../build`))
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () =>
    console.log(`Self destruct in ${SERVER_PORT}`)
  )
})

app.post('/api/admin', authCtrl.createAdmin)
app.post('/api/login', authCtrl.adminLogin)
app.delete('/api/login', authCtrl.adminLogout)
app.put('/api/home', ctrl.updateSite)
app.get('/api/home', ctrl.getHome)
app.post('/api/event', ctrl.addEvent)
app.get('/api/event', ctrl.getEvents)
app.delete('/api/event/:id', ctrl.removeEvent)
app.get('/api/document', ctrl.getDocuments)
app.post('/api/wishlist', ctrl.editDonateUrl)
app.post('/api/document', ctrl.addDocument)
app.put('/api/document', ctrl.editDocument)
app.delete('/api/document/:id', ctrl.deleteDocument)
app.get('/api/sponsor', ctrl.getSponsors)
app.post('/api/sponsor', ctrl.addSponsor)
app.delete('/api/sponsor/:id', ctrl.removeSponsor)
app.get('/api/contact', ctrl.getMoms)
app.post('/api/contact', ctrl.addMom)
app.delete('/api/contact/:id', ctrl.removeMom)