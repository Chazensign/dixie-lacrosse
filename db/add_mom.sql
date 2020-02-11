insert into team_moms (name, email, cell)
values ($1,
        $2,
        $3);

select * from team_moms;