// imports
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const routes = require('./routes')

const port = process.env.PORT || 3001
const app = express()

// middleware - JSON parsing
app.use(express.json())

// middleware - cors
const corsOptions = {
    // from which URLs do we want to accept requests
    origin: ["http://localhost:3000"],
    credentials: true, //allow the session cookie to be sent back and forth to the client
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// middleware - session config
app.use(session({
    // session is stored in the DB
    store: new MongoStore({ url: process.env.MONGODB_URI || "mongodb://localhost:27017/followup" }),
    secret: "ILikePizza",
    resave: false, //will not resave sessions
    saveUninitialized: false, //only create a session when a property is added to the session
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// middleware - passport
app.use(passport.initialize())
app.use(passport.session())

// middleware - API routes 
app.use('/api/v1/forms', routes.forms)
// app.use((req, res, next) => {
//     console.log('testing server')
//     next()
// })
app.use('/api/v1/auth', routes.auth)

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))