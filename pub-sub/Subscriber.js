class Subscriber {
      
    async create(pubSub, topicName, subscriptionName) {
         await pubSub
            .topic(topicName)
            .createSubscription(subscriptionName)
    }

    async init(pubSub, topicName, subscriptionName) {
        this.sub = await pubSub.topic(topicName).subscription(subscriptionName)
    }

    handleMessage(cb) {
        this.sub.on('message', cb)
    }

    handleError(cb) {
        this.sub.on('error', cb) 
    }
}

module.exports = async (pubSub, topicName, subscriptionName) => {
    const subscriber  = new Subscriber()
    await subscriber.init(pubSub, topicName, subscriptionName)
    return subscriber
}
