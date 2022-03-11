import React from 'react'

const HomeContext = React.createContext()

const HomeProvider = ({ children }) => {
  const [filtersAppliedNum, setFiltersAppliedNums] = React.useState(0)
  const [isSatRangePopupOpen, setIsSatRangePopupOpen] = React.useState(false)
  const [isTuitionRangePopupOpen, setIsTuitionRangePopupOpen] =
    React.useState(false)
  const [isStateLocationPopupOpen, setIsStateLocationPopupOpen] =
    React.useState(false)
  const [urbanizationLevel, setUrbanizationLevel] = React.useState('')
  const [sortSelection, setSortSelection] = React.useState('default')
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = React.useState(false)

  const handleTuitionRangeChipClick = () => {
    console.log(isTuitionRangePopupOpen)
    setIsTuitionRangePopupOpen(!isTuitionRangePopupOpen)
  }

  const handleSatRangeChipClick = () => {
    console.log(isSatRangePopupOpen)
    setIsSatRangePopupOpen(!isSatRangePopupOpen)
  }

  const handleStateSelectorChipClick = () => {
    console.log(!isStateLocationPopupOpen)
    setIsStateLocationPopupOpen(!isStateLocationPopupOpen)
  }

  const handleFilterDrawerOpen = e => {
    e.preventDefault()
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  return (
    <HomeContext.Provider
      value={{
        urbanizationLevel,
        setUrbanizationLevel,
        sortSelection,
        setSortSelection,
        isFilterDrawerOpen,
        setIsFilterDrawerOpen,
        filtersAppliedNum,
        setFiltersAppliedNums,
        isTuitionRangePopupOpen,
        setIsTuitionRangePopupOpen,
        handleFilterDrawerOpen,
        handleTuitionRangeChipClick,
        handleSatRangeChipClick,
        handleStateSelectorChipClick,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

const HomeConsumer = HomeContext.Consumer
export { HomeContext, HomeProvider, HomeConsumer }
