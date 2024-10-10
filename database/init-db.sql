-- Example table creation (optional)
CREATE TABLE IF NOT EXISTS mst_user (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_type char(1),
    password varchar(50),
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


create table if not exists mst_product
( prod_id SERIAL PRIMARY KEY,
  prod_name varchar(50),
  price decimal(10,2),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert an example user (optional)
INSERT INTO mst_user (user_name, user_type,password,email) VALUES ('admin', 'a' ,'admin123' , 'admin@example.com');

