const {PubSub} = require('@google-cloud/pubsub')
const {projectId} = require('./config.json')
module.exports = () => {
    return new PubSub({projectId})
}