// @flow
import * as React from 'react'

const MajorsContext: React.Context<any> = React.createContext()

const MajorsProvider = ({
  children,
}: {
  children: React.Element<any>,
}): React.Element<any> => {
  const [filterState, setFilterState] = React.useState({
    '1': false,
    '2': false,
    '3': true,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
  })
  const [filterCredLevs, setFilterCredLevs] = React.useState(['3'])

  React.useEffect(() => {
    let credLevsTemp = []
    for (const value in filterState) {
      if (filterState[`${value}`]) {
        credLevsTemp.push(value)
      }
    }
    setFilterCredLevs([...credLevsTemp])
    // eslint-disable-next-line 
  }, [filterState])

  const handleFilterChange = e => {
    setFilterState({ ...filterState, [e.target.name]: e.target.checked })
  }

  const programNumsOnFilterChange = (programNums: Object): number => {
    const currentPrograms: Array<any> = Object.entries(programNums).filter(pn =>
      filterCredLevs.includes(pn[0])
    )
    if (currentPrograms.length > 0) {
      const programsTotal = currentPrograms
        .reduce((prev, cur) => prev.concat(cur[1]), [])
        .reduce((prev, cur) => prev + cur)
      return ~~programsTotal
    } else {
      return 0
    }
  }

  return (
    <MajorsContext.Provider
      value={{
        filterState,
        setFilterState,
        filterCredLevs,
        setFilterCredLevs,
        handleFilterChange,
        programNumsOnFilterChange,
      }}>
      {children}
    </MajorsContext.Provider>
  )
}

const MajorsConsumer = MajorsContext.Consumer
export { MajorsProvider, MajorsConsumer, MajorsContext }
