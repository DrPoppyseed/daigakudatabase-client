import * as React from 'react'
import { ResponsivePie } from '@nivo/pie'

// import useStyles from './styles'

const CustomPie = ({ data }) => {
  // const c = useStyles()

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 120, bottom: 40, left: 0 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      sortByValue={true}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      legends={[
        {
          anchor: 'top-right',
          direction: 'column',
          justify: false,
          translateX: 40,
          translateY: 46,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )
}

export default CustomPie
