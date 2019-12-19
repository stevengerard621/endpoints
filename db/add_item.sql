insert into list (
    item
) values (
    $1
);
select * from list
order by itemid asc;