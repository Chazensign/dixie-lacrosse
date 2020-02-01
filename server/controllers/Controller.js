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
    
  }
}