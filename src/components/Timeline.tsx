import styles from './Timeline.module.css'

import React, { useState } from 'react'
import Scrollbar from './Scrollbar'
import Window from './Window'

export const Timeline: React.FC = () => {
  const [windowTimeSpan, setWindowTimeSpan] = useState({
    startYear: 0,
    endYear: 0,
  })

  return (
    <div className={styles.timeline}>
      <Scrollbar
        startYear={1200}
        endYear={1800}
        windowTimeSpan={windowTimeSpan}
      />
      <Window
        startYear={1200}
        endYear={1800}
        onTimeSpanChange={setWindowTimeSpan}
      />
    </div>
  )
}
