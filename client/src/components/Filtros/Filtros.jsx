import React from 'react';
import styles from './Filtros.module.css';
import {filterByApts, filterByHouses, filterByOffices, filterByCommercial} from '../../redux/reducer';
import { useDispatch } from 'react-redux';
const Filtros = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.containerButtons}>
      <button className={styles.buttonFilter}   name="" onClick={() => dispatch(filterByApts())}>Apartamentos</button>
      <button className={styles.buttonFilter}   name="" onClick={() => dispatch(filterByHouses())}>Casas</button>
      <button className={styles.buttonFilter}   name="" onClick={() => dispatch(filterByCommercial())}>Comercial</button>
      <button className={styles.buttonFilter}   name="" onClick={() => dispatch(filterByOffices())}>Oficinas</button>
    </div>
  );
};

export default Filtros;
