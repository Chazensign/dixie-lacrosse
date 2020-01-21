const bcrypt = require('bcryptjs')

module.exports = {
  
  createAdmin: async (req, res) => {
    const { username, password } = req.body
    console.log(req.body)
    
    const db = req.app.get('db')
    let foundUser = await db.get_admin(username)
    let user = foundUser[0]
    if (user) {
      return res.status(401).send('Username already exists.')
    } else {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
      const newAdmin = await db.add_admin(username, hash)
      let user = newAdmin[0]
      req.session.user = {
        id: user.id,
        username: user.username
      }
      res.status(201).send(req.session.user)
    }
  },
  adminLogin: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')
    let foundUser = await db.get_admin(username)
    let user = foundUser[0]
    if (!user) return res.status(401).send('User not found.')
    const isAuthenticated = bcrypt.compareSync(password, user.password)
    if (!isAuthenticated) return res.status(403).send('Incorrect Password')
    req.session.user = {
      userId: user.id,
      username: user.username
    }
    return res.status(200).send(req.session.user)
  },
  adminLogout: async (req, res) => {
    req.session.destroy()
    return res.sendStatus(200)
  }
}
