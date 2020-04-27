const Express = require('express')
const App = Express()
const CORS = require('cors')

// Middleware 
App.use(CORS())

// Listen to the server
App.listen(5000, () => {
    console.log('Server started running on port: 5000.')
})