create table admins (id serial primary key, username varchar(30), password varchar);

create table lacrosse (home varchar, sponsors varchar );

create table lac_events (event_id serial primary key, teams VARCHAR(50), location VARCHAR(50), time VARCHAR(30), about VARCHAR, event_date date);