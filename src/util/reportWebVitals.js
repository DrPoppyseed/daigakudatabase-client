import { getCLS, getFID, getLCP } from 'web-vitals'

function sendToAnalytics({ name, value, id }) {
  const body = JSON.stringify({ name, value, id })
  ;(navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', { body, method: 'POST', keepalive: true })
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getLCP(sendToAnalytics)
