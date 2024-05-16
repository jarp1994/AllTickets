import React from 'react'
import styles from './Percentage.module.css'
const Percentage = ({totalFracttions,soldFracttions}) => {

    const percentage = (soldFracttions/totalFracttions)*100
  return (
    <div className={styles.barContainer}>
        <div className={styles.progressBar} style={{width:`${percentage}%`}} >
            {percentage.toFixed(2)}%
        </div>
    </div>
  )
}

export default Percentage
