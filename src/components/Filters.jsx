import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../store/store'
import { observer } from 'mobx-react'

const Filters = () => {
  const { filtersStore } = useContext(StoreContext)

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
