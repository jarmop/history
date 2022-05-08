import styles from './Map.module.css'

import React from 'react'
import map from '../maps/blank-map-world-simple.svg'

export const Map: React.FC = () => { 
  return (
    <div className={styles.container}>
      <img className={styles.map} src={map} />
    </div>
  )
}