import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { filtersStore } from '../store'

const Filters = () => {
  useEffect(() => {
    const filter = window.location.hash.slice(2)

    if (filter) filtersStore.toggle(filter)
  }, [])

  return (
    <ul className="filters">
      {Object.entries(filtersStore.filters).map(
        ([filter, activated], index) => {
          return (
            <li key={index}>
              <a
                href={'#/' + (filter === 'all' ? '' : filter)}
                className={activated ? 'selected' : ''}
                onClick={() => filtersStore.toggle(filter)}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </a>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default observer(Filters)
