create table admins (id serial primary key, username varchar(30), password varchar);

create table lacrosse (info_id serial primary key, home_text varchar, home_img varchar, sponsors_img varchar );

create table documents (doc_id serial PRIMARY key, doc_name varchar(40), doc_link varchar);

create table lac_events (event_id serial primary key, teams VARCHAR(50), location VARCHAR(50), time VARCHAR(30), about VARCHAR, event_date date);

create table sponsors (sponsor_id serial primary key, sponsor_text varchar(100));

create table team_moms ( mom_id serial primary key, name VARCHAR(30), email VARCHAR(40), cell VARCHAR(15));