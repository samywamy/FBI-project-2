CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
	email VARCHAR,
    password_hash VARCHAR
);

CREATE TABLE user_recipes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	title VARCHAR,
	ingredients VARCHAR,
	directions VARCHAR
);

CREATE TABLE user_saved_recipes (
	user_id INTEGER,
	api_id INTEGER,
	title VARCHAR
);

ALTER TABLE user_recipes ADD FOREIGN KEY (user_id) REFERENCES users(id); 

ALTER TABLE user_saved_recipes ADD FOREIGN KEY (user_id) REFERENCES users(id);