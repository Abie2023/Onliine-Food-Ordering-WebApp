import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import axios from 'axios';

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
    bgColor: '#ec407a',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
    bgColor: '#1565c0',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
    bgColor: '#00bfa5',
    color: 'white',
  },
  {
    title: 'Foods',
    imageUrl: '/icons/foods.svg',
    url: '/admin/foods',
    forAdmin: true,
    bgColor: '#e040fb',
    color: 'white',
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [userOrders, setUserOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [totalCalories, setTotalCalories] = useState(0);
  const [pieChartData, setPieChartData] = useState([]);
  const [calorieStatus, setCalorieStatus] = useState('');

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      if (!response.data || !Array.isArray(response.data.sortedUserOrders) || !Array.isArray(response.data.pieChartData)) {
        throw new Error('Invalid response format');
      }

      const currentUserOrders = response.data.sortedUserOrders.filter(order => order.email === user.email);

      setUserOrders(currentUserOrders);
      const calories = currentUserOrders.reduce((total, order) => total + order.calorieCount, 0);
      setTotalCalories(calories);
      setCalorieStatus(calories > 10000 ? 'Unsafe' : 'Safe');
      setPieChartData(response.data.pieChartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
                marginBottom: '2rem',
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
      </div>
      <div className={classes.container}>
        <div className={classes.chartContainer}>
          <Plot
            data={[
              {
                values: pieChartData.map(item => item.value),
                labels: pieChartData.map(item => item.label),
                type: 'pie',
              },
            ]}
            layout={{
              title: {
                text: 'Most Popular Food Items',
                font: {
                  size: 24,
                },
              },
            }}
          />
        </div>
        <div className={`${classes.messageContainer} ${calorieStatus === 'Safe' ? classes.safe : classes.unsafe}`}>
          <div className={classes.messageBox}>
            <p className={classes.messageText}>
              {calorieStatus === 'Unsafe' ?
                'Your calorie intake is high. Your order history indicates that you have exceeded the recommended limit for this week.' :
                'Your calorie count is within the safe limit for this week.'}
            </p>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
