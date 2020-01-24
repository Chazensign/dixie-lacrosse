insert into admins (username, password)
values($1, $2);

select * from admins
where username = $1;