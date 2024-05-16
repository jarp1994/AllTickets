import React from 'react';
import styles from './Home.module.css';
import properties from "../db.json";
import Filtros from '../components/Filtros/Filtros';
import Card from '../components/Card/Card';
import { filterByApts, filterByHouses, filterByComercial, filterByOffices } from '../redux/action';

const Home = () => {  

  return (
    <div>
      <h1 className={styles.title}>Propiedades</h1>
      <hr className={styles.hr}></hr>
      <p className={styles.p}>Invierte en finca Raíz en cualquier ciudad de Colombia!</p>
      <Filtros
        filterByApts={filterByApts}
        filterByHouses={filterByHouses}
        filterByCommercial={filterByComercial}
        filterByOffices={filterByOffices}
      />
      <div className={styles.container}>
        {properties.map((property) => (
          <Card key={property.id} property={property}></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;

