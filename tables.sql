-- DROP TABLE users;

CREATE TABLE api (
    key VARCHAR PRIMARY KEY
);

CREATE TABLE request_times (
	timestamp TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
	email VARCHAR,
    password_hash VARCHAR
);

CREATE TABLE user_created_recipes (
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