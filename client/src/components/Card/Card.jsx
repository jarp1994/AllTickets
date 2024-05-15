import React from 'react'
// import styles from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({property}) => {

  return (
    <Link>
        <div className={styles.card}>
          <img src={property.img} alt="property" key={property.id} />
          <h3>{property.address}</h3>
          <h4>{property.city}</h4>
          <h3>{property.profitability}</h3>
        </div>
    </Link>
  )
}

export default Card
