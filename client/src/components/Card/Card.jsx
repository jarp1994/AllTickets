import React from 'react'
import styles from './Card.module.css'
import Percentage from '../percentage/Percentage'
import Fraccion from '../Fraccion/Fraccion'
const Card = ({property}) => {

  return (
    
    <div className={styles.cardHome} key={property.id}>
          <img className={styles.img} src={property.img} alt="property" />
          <h3>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17"
            fill="none">
            <path d="M12.9946 6.11403C13.0402 6.9793 12.7983 7.88754 12.2759 8.72557C10.5699 11.4624
            8.68433 14.0973 6.83224 16.7512C6.57069 17.1259 6.40257 17.0444 6.17932 16.7255C4.35608
            14.1218 2.47496 11.5484 0.833059 8.84457C-1.33571 5.27316 0.931631 0.901791 5.30299
            0.112707C9.3053-0.609636 13.0055 2.22779 12.9946 6.11403ZM6.53875 3.47556C4.96348
            3.46643 3.79762 4.51807 3.78886 5.95599C3.78027 7.36935 4.96417 8.48773 6.49067
            8.50819C7.99828 8.5285 9.2282 7.4065 9.24039 5.99991C9.25276 4.55616 8.10578 3.48438
            6.53875 3.4754V3.47556Z" fill="#A596C8"/>
            </svg> 
          {property.address}</h3>
          <h4>{property.city}</h4>
          <h3>
            $ {property.profitability} % EA</h3>
            <h3> <Fraccion prices={property.prices} ></Fraccion></h3>
            <h3  > <Percentage totalFracttions={property.totalFracttions} soldFracttions={property.soldFracttions} ></Percentage> </h3>
            <h5>Vendido</h5>
          <h5>{property.type}</h5>
          <button className={styles.button1}>Detalle</button>
          <br />
    </div>
  )
}

export default Card
