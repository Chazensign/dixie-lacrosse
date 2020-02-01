insert into lac_events(
teams,
location,
time,
about, 
event_date)
values($1, $2, $3, $4, $5);

select * from lac_events;