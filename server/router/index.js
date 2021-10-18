const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

function router(app) {
    app.get('/', (request, response) => {
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('todo-app')
            const tasksCollection = db.collection('tasks')
            const completedTasks = await tasksCollection.find({completed: "true"}).toArray()
            const uncompletedTasks = await tasksCollection.find({completed: "false"}).toArray()
            completedTasks.reverse()
            uncompletedTasks.reverse()
            response.render('home', {completedTasks, uncompletedTasks})
        })
    })
}

module.exports = router