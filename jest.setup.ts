import { delay } from './test/test-utils'

const DELAY = process.env.JEST_DELAY ? parseInt(process.env.JEST_DELAY) : 0

afterEach(() => delay(DELAY), DELAY * 1.1)
