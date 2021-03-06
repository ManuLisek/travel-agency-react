import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, setOptionValue, required, currentValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div className={styles.icon} setOptionValue=''><Icon name={'times-circle'}>none</Icon></div>
    )}
    {values.map(value => (
      <div
        className={` ${styles.icon} ${currentValue === value.id ? styles.iconActive : ''}`}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>{value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};
  
export default OrderOptionIcons; 