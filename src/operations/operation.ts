import { HttpClient } from '../http-client'
import { stringify } from 'querystring'
import { isEmpty, endsWith, cloneDeep } from 'lodash'

export type OperationParameterValues = any

export interface OperationParameter {
  [key: string]: OperationParameterValues
}

export type WithOperationParameterKeys<T extends OperationParameter> = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof T]: OperationParameterValues
}

export type OperationParameterTransformer<T extends OperationParameter> = (
  // eslint-disable-next-line no-unused-vars
  originalQuery: T,
  // eslint-disable-next-line no-unused-vars
  clonedQuery: WithOperationParameterKeys<T>,
) => WithOperationParameterKeys<T>

export class Operation {
  protected version = 'v2'
  protected resource = ''

  // eslint-disable-next-line no-unused-vars
  constructor(protected client: HttpClient) {}

  public static create<T extends typeof Operation>(
    this: T,
    httpClient: HttpClient,
  ): InstanceType<T> {
    return new this(httpClient) as InstanceType<T>
  }

  protected query<T extends OperationParameter>(
    resource: string,
    originalQuery?: T,
    transform?: OperationParameterTransformer<T>,
  ): string {
    if (!originalQuery || isEmpty(originalQuery)) {
      return resource
    }

    const clonedQuery = cloneDeep(originalQuery)
    const noop: OperationParameterTransformer<T> = (): T => clonedQuery
    const transformer = transform || noop

    return `${resource}?${stringify(transformer(originalQuery, clonedQuery))}`
  }

  private hasKey<T extends object>(obj: T, key: string | number | symbol): key is keyof T {
    return key in obj
  }

  protected paramsFilterTransformerReal<T extends OperationParameter>(
    params: T,
    keys?: string[],
  ): WithOperationParameterKeys<T> {
    const clone: WithOperationParameterKeys<T> = cloneDeep(params)
    const k = keys || Object.keys(clone).filter((key) => endsWith(key, 'Filter'))

    return k.reduce((ret, key) => {
      if (this.hasKey(ret, key) && Array.isArray(ret[key])) {
        return Object.assign(ret, { [key]: ret[key].join(',') })
      }

      return ret
    }, clone)
  }

  protected paramsFilterTransformer<T>(resource: string, params?: Partial<T>): string {
    return this.query(
      `${this.resource}${resource}`,
      params,
      (query, clone): WithOperationParameterKeys<Partial<T>> => {
        return this.paramsFilterTransformerReal(clone)
      },
    )
  }
}
