import * as React from 'react'
import useStyles from './styles'
import { useScrollTrigger, Zoom } from '@material-ui/core'

const ScrollTop = (props) => {
  const { children } = props
  const c = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={c.fabContainer}>
        {children}
      </div>
    </Zoom>
  )
}

export default ScrollTop
