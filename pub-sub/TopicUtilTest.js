const pubSub = require('./getClient')()
const TopicUtil = require('./TopicUtil')
const topicUtil = TopicUtil(pubSub);

const testCreateTopic = async(topicName) => {
    console.log(`creating topic ${topicName}`)
    await topicUtil.createTopic(topicName)
    console.log('created topic')
}

const testListTopics = async () => {
    const topics = await topicUtil.listTopics()
    const topicNames = topics[0].map(topic => topic.metadata.name)
    // topics[0].forEach((topic) => {
    //     console.log("TOPERICO", topic)
    // })
    topicNames.forEach(console.log)
}

const testListSubscriptions = async (topicName) => {
    const subscriptions = await topicUtil.getAllSubscriptions(topicName)
    subscriptions.forEach(console.log)
}

const testGetPolicy = async (topicName) => {
    const policy = await topicUtil.getTopicPolicy(topicName)
    console.log(policy)
}

const testDeleteTopic = async (topicName) => {
    console.log(`deleting topic ${topicName}`)
    await topicUtil.deleteTopic(topicName)
    console.log(`deleted topic ${topicName}`)
}

const testDelete = async (topicName) => {
    await testDeleteTopic(topicName)
    await testListTopics() 
}
//testCreateTopic('topictest1')
//testCreateTopic('topictest2')
//testListTopics()
//testGetPolicy('topictest1')
//testListSubscriptions('topictest1')
testDelete('topictest2')