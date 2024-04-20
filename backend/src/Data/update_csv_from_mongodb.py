import csv
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['canteen-db']
users_collection = db['users']
orders_collection = db['orders']

orders_data = orders_collection.find({})

csv_file_path = '/Users/ABIE/Desktop/Mern stack canteen/backend/src/Data/extract_data.csv'

fieldnames = ['_id', 'user_name', 'email', 'food_name', 'totalPrice', 'status', 'createdAt', 'updatedAt', 'paymentId', 'quantity']

with open(csv_file_path, 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for order in orders_data:
        user_id = order.get('user')
        user_data = users_collection.find_one({'_id': user_id})

        user_name = user_data.get('name') if user_data else 'Unknown'
        email = user_data.get('email') if user_data else 'Unknown'

        food_name = order['items'][0]['food']['name'] if 'items' in order and order['items'] and len(order['items']) > 0 else 'Unknown'
        
        created_at = order.get('createdAt').strftime('%Y-%m-%d %H:%M:%S') if 'createdAt' in order else ''
        updated_at = order.get('updatedAt').strftime('%Y-%m-%d %H:%M:%S') if 'updatedAt' in order else ''

        writer.writerow({
            '_id': order.get('_id', ''),
            'user_name': user_name,
            'email': email,
            'food_name': food_name,
            'totalPrice': order.get('totalPrice', ''),
            'status': order.get('status', ''),
            'createdAt': created_at,
            'updatedAt': updated_at,
            'paymentId': order.get('paymentId', ''),
            'quantity': order['items'][0]['quantity'] if 'items' in order and order['items'] and len(order['items']) > 0 else '',
        })

print('CSV file updated successfully with new entries.')
