module.exports = {
  getEvents: async (req, res) => {
    const db = req.app.get('db')
    const events = await db.get_events()
    if (events.length > 0) {
      res.status(200).send(events)
    }else{
      res.status(404).send('No events found')
    }
  },
  addEvent: async (req, res) => {
    const {teams, location, time, about, eventDate} = req.body
    const db = req.app.get('db')
    const events = await db.add_event(teams, location, time, about, eventDate)
    if (events.length > 0) {
      res.status(200).send(events)
    } else {
      res.status(417).send({ message: 'Error' })
    }
  },
  updateHomeImg: (req, res) => {
    
  },
  getDocuments: async (req, res) => {
    const db = req.app.get('db')
    const docs = await db.get_docs()
    if (docs[0]) {
      res.status(200).send(docs)
    }else {
      res.sendStatus(400)
    }
  },
  addDocument: async (req, res) => {
    console.log('hitting add');
    
    const db = req.app.get('db')
    const docs = await db.add_doc(req.body.docName, req.body.docLink)
    if (docs[0]) {
      res.status(200).send(docs)
    } else {
      res.sendStatus(400)
    }
  },
  editDocument: async (req, res) => {
    const db = req.app.get('db')
    const docs = await db.edit_doc(req.body.docName, req.body.docLink, req.body.documentId)
    if (docs[0]) {
      res.status(200).send(docs)
    } else {
      res.sendStatus(400)
    }
  },
  deleteDocument: async (req, res) => {
    const db = req.app.get('db')
    const docs = await db.delete_doc(req.params.id)
    if (docs[0]) {
      res.status(200).send(docs)
    } else {
      res.sendStatus(400)
    }
  }
}