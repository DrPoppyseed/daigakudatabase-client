import React from 'react'
import SortByBoxSkeleton from '../../components/sort/SortByBoxSkeleton'
import HomeSchoolCardSkeleton from '../../components/schoolCard/HomeSchoolCardSkeleton'

const HomePageCardListSkeleton = () => (
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

export default HomePageCardListSkeleton
