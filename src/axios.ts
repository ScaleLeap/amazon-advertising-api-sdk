import Axios from 'axios'
import { USER_AGENT } from './constants'
import Agent from 'agentkeepalive'

export const axios = Axios.create({
  httpAgent: new Agent(),
  headers: {
    'User-Agent': USER_AGENT,
  },
})

export * from 'axios'
