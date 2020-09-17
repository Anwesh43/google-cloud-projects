const pubSub = require('./getClient')()
const getSubscriber = require('./Subscriber')
const topicName = 'topictest1'
const subcriptionName = 'subs2'
const testSubscriber = async () => {
    const subscriber = await getSubscriber(pubSub, topicName, subcriptionName)
    console.log("subscribed the topic now listening for message")
    subscriber.handleMessage((message) => {
        console.log(message.data.toString())
    })
}
testSubscriber()