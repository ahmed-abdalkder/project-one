
import express from'express'
import connectionDB from './db/connectiondb.js'
import userrouter from './src/modules/users/user.routes.js'
import postrouter from './src/modules/posts/post.routes.js'

const app = express()

const port = 3000

app.use(express.json())

connectionDB()

app.use("/users",userrouter)
app.use("/posts",postrouter )

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))