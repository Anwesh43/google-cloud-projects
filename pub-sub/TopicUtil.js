class TopicUtil {

    pubSub 

    constructor(pubSub) {
        this.pubSub = pubSub
    }

    async createTopic(topicName) {
        await this.pubSub.createTopic(topicName)
    }

    async listTopics() {
        const topics = await this.pubSub.getTopics()
        return topics
    }

    async deleteTopic(topicName) {
        await this.pubSub.topic(topicName).delete()
    }

    async getAllSubscriptions(topicName) {
        const subscriptions = await this.pubSub.topic(topicName).getSubscriptions()
        return subscriptions
    }

    async getTopicPolicy(topicName) {
        const [policy] = await this.pubSub.topic(topicName).iam.getPolicy()
        return policy
    }
}

module.exports = (pubSub) => new TopicUtil(pubSub)
