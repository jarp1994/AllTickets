import React from 'react'
// import styles from './Cards.module.css'


const Cards = ({properties}) => {
  return (
    <div className={styles.cards}>
      {properties.map((property) => (
        <div className={styles.card}>
          <img src={property.img} alt="property" key={property.id} />
          <h3>{property.address}</h3>
          <h4>{property.city}</h4>
          <h3>{property.profitability}</h3>
        </div>
      ))}
    </div>
  )
}

export default Cards
