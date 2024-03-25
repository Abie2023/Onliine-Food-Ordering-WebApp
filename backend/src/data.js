import { Types } from 'mongoose'; 

export const sample_foods = [
  {
    
    name: 'Pav Bhaji',
    cookTime: '10-20',
    price: 70,
    favorite: true,
    origins: ['north indian'],
    stars: 4.5,
    imageUrl: '1.PavBhaji.jpg',
    tags: ['Lunch', 'Breakfast'],
  },
  {
    
    name: 'Misal Pav',
    price: 30,
    cookTime: '20-30',
    favorite: true,
    origins: ['north indian'],
    stars: 3,
    imageUrl: '2.MisalPav.jpg',
    tags: ['BreakFast', 'Lunch', 'FastFood'],
  },
  {
    
    name: 'Mini Lunch',
    price: 50,
    cookTime: '10-15',
    favorite: false,
    origins: ['north indian'],
    stars: 3.5,
    imageUrl: '3.MiniLunch.jpg',
    tags: ['Lunch'],
  },
  {
    
    name: 'Idli Sambhar',
    price: 40,
    cookTime: '15-20',
    favorite: true,
    origins: ['south indian'],
    stars: 3,
    imageUrl: '4.IdliSambhar.jpg',
    tags: ['BreakFast', 'Lunch'],
  },
  {
    
    name: 'Veg Biryani',
    price: 80,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 3.5,
    imageUrl: '5.VegBiryani.jpg',
    tags: ['Lunch'],
  },
  {
   
    name: 'NonVeg Biryani',
    price: 90,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '6.NonVegBiryani.jpg',
    tags: ['Lunch'],
  },
  {
    
    name: 'Noodles',
    price: 70,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '7.Noodles.jpg',
    tags: ['FastFood', 'Lunch'],
  },
  {
    
    name: 'Puri Bhaji',
    price: 50,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '8.PuriBhaji.jpg',
    tags: ['BreakFast', 'Lunch'],
  },
  {
    
    name: 'Samosa',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['south indian'],
    stars: 4.0,
    imageUrl: '9.Samosa.jpg',
    tags: ['FastFood'],
  },
  {
    
    name: 'VegSandwich',
    price: 30,
    cookTime: '40-50',
    favorite: false,
    origins: ['south indian'],
    stars: 4.0,
    imageUrl: '10.VegSandwich.jpg',
    tags: ['FastFood', 'BreakFast'],
  },
  {
   
    name: 'VadaPav',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '11.VadaPav.jpg',
    tags: ['FastFood'],
  },
  {
    
    name: 'Coca Cola',
    price: 25,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '12.CocaCola.jpg',
    tags: ['Drinks'],
  },
  {
  
    name: 'Appy',
    price: 20,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: '13.Appy.jpg',
    tags: ['Drinks'],
  },
  {
  
    name: 'Buttermilk',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: 'Buttermilk.jpg',
    tags: ['Drinks'],
  },
  {
  
    name: 'AmulCool',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['north indian'],
    stars: 4.0,
    imageUrl: 'AmulCool.jpg',
    tags: ['Drinks'],
  },
];

export const sample_tags = [
  { name: 'All', count: 15 },
  { name: 'FastFood', count: 5 },
  { name: 'Lunch', count: 8 },
  { name: 'BreakFast', count: 4 },
  { name: 'Snacks', count: 2 },
  { name: 'Drinks', count: 4 },
];

export const sample_users = [
  {
  
    name: 'Abie K',
    email: 'abie2024@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: true,
  },
  {

    name: 'Krish L',
    email: 'krish2024@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: false,
  },
];