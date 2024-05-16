import React from 'react';
import styles from './Filtros.module.css';

const Filtros = ({ filterByApts, filterByHouses, filterByCommercial, filterByOffices }) => {
  return (
    <div>
      <form className={styles.forms1} action="">
        <label >
          <button className={styles.buttonFilter}   name="" onChange={() => filterByApts()}>Apartamentos</button>
        </label>
      </form>

      <form className={styles.forms1}  action="">
        <label >
          <button className={styles.buttonFilter}   name="" onChange={() => filterByHouses()}>Casas</button>
          
        </label>
      </form>

      <form className={styles.forms1} action="">
        <label >
          <button className={styles.buttonFilter}   name="" onChange={() => filterByCommercial()}>Comercial</button>
          
        </label>
      </form>
      
      <form className={styles.forms1}  action="">
        <label >
          <button className={styles.buttonFilter}   name="" onChange={() => filterByOffices()}>Oficinas</button>
          
        </label>
      </form>
    </div>
  );
};

export default Filtros;
