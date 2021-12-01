import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

const connect = async () => {
    const dbUri = config.get('dbUri') as string
    try {
        await mongoose.connect(dbUri)
        logger.info('connected to db')
    } catch(err) {
        logger.error('could not connect to db')
        process.exit(1)
    }
}

export default connect