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
  removeEvent: async (req, res) => {
    const db = req.app.get('db')
    const events = await db.delete_event(req.params.id)
     if (events.length > 0) {
      res.status(200).send(events)
    } else {
      res.status(417).send({ message: 'Error' })
    }
  },
  updateSite: async (req, res) => {
    const {sponsorUrl, homeUrl, homeText} = req.body
    const db = req.app.get('db')
    if (sponsorUrl) {
      const newContent = await db.sponsor_img(sponsorUrl)
      if (newContent[0]) {
        res.status(200).send(newContent)
      } else {
        res.status(417).send({ message: 'Error' })
      }
    }else if (homeUrl) {
      const newContent = await db.home_info(homeText, homeUrl)
      if (newContent[0]) {
        res.status(200).send(newContent)
      } else {
        res.status(417).send({ message: 'Error' })
      }
    }
    
  },
  getHome: async (req, res) => {
    const db = req.app.get('db')
      const info = await db.get_home()
      if (info[0]) {
        res.status(200).send(info[0])
      } else {
        res.status(417).send({ message: 'Error' })
      }
  },
  getDocuments: async (req, res) => {
    const db = req.app.get('db')
    const docs = await db.get_docs()
    const wishlist = await db.get_wishlist()
    if (docs[0]) {
      res.status(200).send({docs, wishlist})
    }else {
      res.sendStatus(400)
    }
  },
  addDocument: async (req, res) => {
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
  },
  editDonateUrl: async (req, res) => {
    const db = req.app.get('db')
    const wishlist = await db.update_wishlist(req.body.url)
    if (wishlist[0]) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  },
  getSponsors: async (req, res) => {
    const db = req.app.get('db')
    const sponsText = await db.get_sponsors(req.params.id)
    const sponsImg = await db .get_spons_img()
    if (sponsText[0] || sponsImg[0]) {
      res.status(200).send({sponsText, sponsImg})
    } else {
      res.sendStatus(400)
    }
  },
  addSponsor: async (req, res) => {
    const db = req.app.get('db')
    const sponsText = await db.add_sponsor(req.body.newSponsor)
    if (sponsText[0]) {
      res.status(200).send({sponsText})
    } else {
      res.sendStatus(400)
    }
  },
  removeSponsor: async (req, res) => {
    const db = req.app.get('db')
    const sponsText = await db.remove_sponsor(req.params.id)
    if (sponsText[0]) {
      res.status(200).send(sponsText)
    } else {
      res.sendStatus(400)
    }
  },
  getMoms: async (req, res) => {
    const db = req.app.get('db')
    const moms = await db.get_moms()
    if (moms[0]) {
      res.status(200).send(moms)
    } else {
      res.sendStatus(400)
    }
  },
  addMom: async (req, res) => {
    const { name, email, cell } = req.body
    const db = req.app.get('db')
    const moms = await db.add_mom(name, email, cell)
    if (moms[0]) {
      res.status(200).send(moms)
    } else {
      res.sendStatus(400)
    }
  },
  removeMom: async (req, res) => {
    const { id } = req.params
    const db = req.app.get('db')
    const moms = await db.remove_mom(id)
    if (moms[0]) {
      res.status(200).send(moms)
    } else {
      res.sendStatus(400)
    }
  }
}