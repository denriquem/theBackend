import mongoose from 'mongoose'
import config from 'config'

const connect = async () => {
    const dbUri = config.get('dbUri') as string
    try {
        await mongoose.connect(dbUri)
        console.log('connected to db')
    } catch(err) {
        console.log('could not connect to db')
        process.exit(1)
    }
}

export default connect