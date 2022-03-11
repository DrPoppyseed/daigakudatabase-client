import SortByBoxSkeleton from '../sort/SortByBoxSkeleton'
import HomeSchoolCardSkeleton from '../HomeSchoolCard/HomeSchoolCardSkeleton'
import * as React from 'react'

const HomePageCardListSkeleton = () => {
  return (
    <div>
      <SortByBoxSkeleton />
      {[
        'sk_0',
        'sk_1',
        'sk_2',
        'sk_3',
        'sk_4',
        'sk_5',
        'sk_6',
        'sk_7',
        'sk_8',
        'sk_9',
      ].map(id => (
        <HomeSchoolCardSkeleton key={id} />
      ))}
    </div>
  )
}

export default HomePageCardListSkeleton
