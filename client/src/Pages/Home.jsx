import React from 'react';
import styles from './Home.module.css';
import properties from "../db.json";
import Filtros from '../components/Filtros/Filtros';
import { filterByApts, filterByHouses, filterByComercial, filterByOffices } from '../redux/action';

const Home = () => {  

  return (
    <div>
      <h1>Propiedades</h1>
      <hr className={styles.hr}></hr>
      <p>Invierte en finca Raíz en cualquier ciudad de Colombia!</p>
      <Filtros
        filterByApts={filterByApts}
        filterByHouses={filterByHouses}
        filterByCommercial={filterByComercial}
        filterByOffices={filterByOffices}
      />
      {properties.map((property) => (
        <div className={styles.cardHome} key={property.id}>
          <img src={property.img} alt="property" />
          <h3>{property.address}</h3>
          <h4>{property.city}</h4>
          <h3>{property.profitability}</h3>
          <h5>{property.type}</h5>
          <button className={styles.button}>Detalle</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Home;

