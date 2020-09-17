class Publisher {

    topic 

    async init(pubSub, topicName) {
        this.topic = await pubSub.topic(topicName)
    }

    async publishMessageBody(body) {
        await this.topic.publish(Buffer.from(body))
    }
}

module.exports = async (pubSub, topicName) => {
    const publisher = new Publisher()
    await publisher.init(pubSub, topicName)
    return publisher
}