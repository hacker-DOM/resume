import * as R from 'ramda'
import Promise from 'bluebird'

export const

map = R.flip (R.map),

mapP = async (val, _map) => await Promise.mapSeries (val, _map),

/**
 * @description Universal lens
 * @param path
 * @param obj
 */
lens = R.cond ([
  [R.is (String), R.lensProp],
  [R.is (Number), R.lensIndex],
  [R.T, R.lensPath]
]),

set = R.curry ((path, val, obj) => R.set (lens (path, obj), val, obj)),

over = R.curry ((path, cb, obj) => R.over (lens (path, obj), cb, obj))