import React from 'react';
import styles from './Home.module.css';
import Filtros from '../components/Filtros/Filtros';
import Card from '../components/Card/Card';
import { useSelector } from 'react-redux';

const Home = () => {  

const properties = useSelector((state) => state.properties.all);


  return (
    <div>
      <h1 className={styles.title}>Propiedades</h1>
      <hr className={styles.hr}></hr>
      <p className={styles.p}>Invierte en finca Raíz en cualquier ciudad de Colombia!</p>
      <Filtros
      />
      <div className={styles.container}>
        {properties.map((property) => (
          <Card key={property._id} property={property}></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;

