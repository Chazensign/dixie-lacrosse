insert into admin (username, password)
value($1, $2);

select * from admin
where username = $1;