#!/bin/bash
echo "Initializing MongoDB Database..."

mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  use $MONGO_INITDB_DATABASE;

  db.createCollection("products");

  db.products.insertMany([
    { "name": "Product A", "price": 30, "stock": 100 },
    { "name": "Product B", "price": 20, "stock": 200 }
  ]);

  db.createUser({
    user: '$MONGO_INITDB_ROOT_USERNAME',
    pwd: '$MONGO_INITDB_ROOT_PASSWORD',
    roles: [{ role: 'readWrite', db: '$MONGO_INITDB_DATABASE' }]
  });

  print('MongoDB Init: Database and collection setup complete');
EOF
