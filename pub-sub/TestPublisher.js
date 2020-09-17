const pubSub = require('./getClient')()
const getPublisher = require('./Publisher')

const testPublsiher = async () => {
    const publisher = await getPublisher(pubSub, 'topictest1')
    console.log("type some messages")
    process.stdin.resume()
    process.stdin.on('data', async (data) => {
        const messageBody = data.toString().trim().replace("\n", "")
        console.log("message", messageBody)
        if (messageBody === 'quit') {
            process.stdin.end(() => {
                console.log("ending process")
                process.exit(0)
            })
        } else {
            await publisher.publishMessageBody(messageBody)
            console.log(`message published ${messageBody}`)
        }
    })
}

testPublsiher()