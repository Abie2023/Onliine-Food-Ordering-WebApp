import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './thumbnails.module.css';

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />

            <div className={classes.content}>
              <div className={classes.nameAndPrice}>
                <div className={classes.name}>{food.name}</div>
                <div className={classes.price}>
                  <Price price={food.price} />
                </div>
              </div>
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {food.origins.map(origin => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
