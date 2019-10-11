import { get, maxBy } from 'lodash'

export const getNewId = array => {
  let lastId = get(maxBy(array, 'id'), 'id', 0)
  return ++lastId
}

export const IS_DEV = process.env.NODE_ENV === 'development'

export const appVersion = '0.0.1'
