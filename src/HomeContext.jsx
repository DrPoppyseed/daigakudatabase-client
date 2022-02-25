// @flow
import * as React from 'react'
import {
  DEFAULT_SAT_RANGE_LOW,
  DEFAULT_SAT_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_HIGH,
  DEFAULT_TUITION_RANGE_LOW,
} from './util/final'
import { useQueryClient } from 'react-query'
import { getSchools, useGetSchools } from './hooks/useSchools'

const HomeContext: React.Context = React.createContext()

const HomeProvider = ({ children }: { children: React.Node }) => {
  const queryClient = useQueryClient()
  const [filtersAppliedNum, setFiltersAppliedNums] = React.useState(0)
  const [pageNumber, setPageNumber] = React.useState(1)
  const [satRange, setSatRange] = React.useState([
    DEFAULT_SAT_RANGE_LOW || 600,
    DEFAULT_SAT_RANGE_HIGH || 1600,
  ])
  const [isSatRangePopupOpen, setIsSatRangePopupOpen] = React.useState(false)
  const [tuitionRange, setTuitionRange] = React.useState([
    DEFAULT_TUITION_RANGE_LOW || 0,
    DEFAULT_TUITION_RANGE_HIGH || 60000,
  ])
  const [isTuitionRangePopupOpen, setIsTuitionRangePopupOpen] =
    React.useState(false)
  const [stateLocation, setStateLocation] = React.useState('')
  const [isStateLocationPopupOpen, setIsStateLocationPopupOpen] =
    React.useState(false)
  const [selectMajor, setSelectMajor] = React.useState('')
  const [filterState, setFilterState] = React.useState({
    fourYear: false,
    twoYear: false,
    publicSchool: false,
    privateSchool: false,
  })
  const [urbanizationLevel, setUrbanizationLevel] = React.useState('')
  const [sortSelection, setSortSelection] = React.useState('default')
  const [searchCriteria, setSearchCriteria] = React.useState({
    satRange,
    tuitionRange,
    stateLocation,
    selectMajor,
    filterState,
    urbanizationLevel,
    sortSelection,
  })

  const { status, data, isFetching } = useGetSchools(pageNumber, searchCriteria)

  const handleClearCriteria = () => {
    setSatRange([DEFAULT_SAT_RANGE_LOW, DEFAULT_SAT_RANGE_HIGH])
    setTuitionRange([DEFAULT_TUITION_RANGE_LOW, DEFAULT_TUITION_RANGE_HIGH])
    setStateLocation('')
    setSelectMajor('')
    setSortSelection('default')
    setFilterState({
      fourYear: false,
      twoYear: false,
      publicSchool: false,
      privateSchool: false,
    })
    setUrbanizationLevel('')
  }

  const handleSearchClick = () => {
    setSearchCriteria({
      satRange,
      tuitionRange,
      stateLocation,
      selectMajor,
      filterState,
      urbanizationLevel,
      sortSelection,
    })
  }

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = React.useState(false)

  const handleFilterChange = e => {
    setFilterState({ ...filterState, [e.target.name]: e.target.checked })
  }

  // const handleChipSchoolTypeChange = (e, schoolType) => {
  //   console.log(schoolType)
  // }

  const handleSatRange = (e, newValue) => {
    setSatRange(newValue)
  }

  const handleTuitionRange = (e, newValue) => {
    setTuitionRange(newValue)
  }

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

  const handleTuitionRangePopup = () => {}

  const handleSatRangePopup = () => {}

  const handleStateSelectorPopup = () => {}

  const handleStateLocationChange = e => {
    setStateLocation(e.target.value)
  }

  const handleUrbanizationLevel = (e, newValue) => {
    setUrbanizationLevel(newValue)
  }

  const handleMajorChange = e => {
    setSelectMajor(e.target.value)
  }

  const handleSortSelectionChange = e => {
    setSortSelection(e.target.value)
    setSearchCriteria({
      satRange,
      tuitionRange,
      stateLocation,
      selectMajor,
      filterState,
      sortSelection: `${e.target.value}`,
    })
  }

  const handleSchoolTypeChipClick = (e, schoolType) => {
    setFilterState({ ...filterState, [schoolType]: !filterState[schoolType] })
    console.log(schoolType)
  }

  const handlePageChange = (e, num) => {
    ;(e.target.ownerDocument || document)
      .querySelector('#back-to-top-anchor')
      .scrollIntoView({ behavior: 'instant', block: 'start' })
    setPageNumber(num)
  }

  const handleFilterDrawerOpen = e => {
    e.preventDefault()
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', pageNumber + 1], () =>
        getSchools(pageNumber + 1)
      )
    }
  }, [data, pageNumber, queryClient, searchCriteria])

  return (
    <HomeContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        satRange,
        setSatRange,
        tuitionRange,
        setTuitionRange,
        stateLocation,
        setStateLocation,
        selectMajor,
        setSelectMajor,
        filterState,
        setFilterState,
        urbanizationLevel,
        setUrbanizationLevel,
        sortSelection,
        setSortSelection,
        searchCriteria,
        setSearchCriteria,
        isFilterDrawerOpen,
        setIsFilterDrawerOpen,
        filtersAppliedNum,
        setFiltersAppliedNums,
        isTuitionRangePopupOpen,
        setIsTuitionRangePopupOpen,
        handleFilterChange,
        handleSatRange,
        handleTuitionRange,
        handleStateLocationChange,
        handleUrbanizationLevel,
        handleMajorChange,
        handleSortSelectionChange,
        handlePageChange,
        handleSchoolTypeChipClick,
        handleFilterDrawerOpen,
        handleClearCriteria,
        handleSearchClick,
        handleTuitionRangeChipClick,
        handleSatRangeChipClick,
        handleStateSelectorChipClick,
        handleTuitionRangePopup,
        handleSatRangePopup,
        handleStateSelectorPopup,
        status,
        isFetching,
        data,
      }}>
      {children}
    </HomeContext.Provider>
  )
}

const HomeConsumer = HomeContext.Consumer
export { HomeContext, HomeProvider, HomeConsumer }
