import { Helmet } from 'react-helmet'
import React, { FC } from 'react'

export interface MetaTitleProps {
  title: string
}

const MetaTitle: FC<MetaTitleProps> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)

export default MetaTitle
