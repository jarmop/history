import React, { useEffect, useState } from 'react'
import styles from './Window.module.css'
import * as england from '../data/england'

export type TimeSpan = { startYear: number; endYear: number }

type OnTimeSpanChange = (timeSpan: TimeSpan) => void

type WindowProps = {
  startYear: number
  endYear: number
  onTimeSpanChange: OnTimeSpanChange
}

const Window: React.FC<WindowProps> = ({
  startYear,
  endYear,
  onTimeSpanChange,
}) => {
  const [isScrollListenerInitialized, setScrollListenerInitialized] =
    useState(false)

  const windowDomObject = React.createRef<HTMLTableSectionElement>()
  const years = Array.from(
    { length: endYear - startYear },
    (value, index) => startYear + index,
  )

  useEffect(() => {
    if (isScrollListenerInitialized) {
      return
    }

    const tableRows: HTMLCollection | undefined =
      windowDomObject.current?.children
    const tableRowsLength = tableRows ? tableRows.length : 0
    if (tableRowsLength > 0) {
      window.addEventListener('scroll', (event) => {
        const viewPortBottomOffset = window.scrollY + window.innerHeight
        let startYear = 0
        let endYear = 0
        let startYearFound = false
        for (let i = 0; i < tableRowsLength; i++) {
          const tableRowOffset = (tableRows?.item(i) as HTMLElement)?.offsetTop
          if (
            !startYearFound &&
            tableRowOffset &&
            tableRowOffset > window.scrollY
          ) {
            const yearText = tableRows?.item(i)?.textContent
            startYear = typeof yearText === 'string' ? parseInt(yearText) : 0
            startYearFound = true
          }
          if (startYearFound && tableRowOffset > viewPortBottomOffset) {
            const yearText = tableRows?.item(i)?.textContent
            endYear = typeof yearText === 'string' ? parseInt(yearText) : 0
            break
          }
        }
        onTimeSpanChange({ startYear, endYear })
      })
    }
    setScrollListenerInitialized(true)
  }, [
    isScrollListenerInitialized,
    setScrollListenerInitialized,
    windowDomObject,
    onTimeSpanChange,
  ])

  return (
    <div className={styles.window}>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Ruler</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody ref={windowDomObject}>
          {years.map((year) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{england.getRulerName(year)}</td>
              <td>{england.getEventName(year)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Window
