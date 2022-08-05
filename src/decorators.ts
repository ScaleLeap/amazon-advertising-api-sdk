/**
 * Copyright (C) 2019, Scale Leap
 */

import * as t from 'io-ts'
import * as tPromise from 'io-ts-promise'

import { Operation } from './operations/operation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Descriptor = TypedPropertyDescriptor<any>
type Decoder = t.Mixed

export function Decode(decoder: Decoder): Function {
  return (target: Operation, propertyKey: string, descriptor: Descriptor) => {
    const originalMethod = descriptor.value

    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: function value(...args: any[]) {
        return Promise.resolve(originalMethod.apply(this, args)).then((res) => {
          console.log('res', res)
          return tPromise.decode(decoder, res)
        })
      },
    }
  }
}

export function DecodeArray(decoder: Decoder): Function {
  return Decode(t.array(decoder))
}
