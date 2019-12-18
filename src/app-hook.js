import * as R from 'ramda'
import {useState, useEffect} from 'react'
import Promise from 'bluebird'

import proficienciesData from 'public/proficiencies'
import * as H from './common'

export default () => do {
  const [proficiencies, setProficiencies] = useState({
    npmPackages: [],
    other: [],
  })
  
  useEffect(() => {
    const fetchData = async () => {
      setProficiencies (H.over (`other`) (R.concat (proficienciesData.other)))
      await Promise.mapSeries (proficienciesData.npmPackages, p => {
        return fetch (`https://api.npmjs.org/downloads/point/last-week/${p.name}`)
        .then(R.invoker (0) (`json`))
        .then(res => setProficiencies (H.over (`npmPackages`) (ps => {
          return R.sort ((x, y) => y.downloads - x.downloads) (R.append (R.merge (res) (p)) (ps))
        })))
      })
      setProficiencies (H.over (`npmPackages`) (R.sort ((x, y) => y.downloads - x.downloads)))
    }

    fetchData()
  }, [])

  const r = {proficiencies}
  r
}