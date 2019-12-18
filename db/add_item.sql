insert into list (
    item
) values (
    $1
);
select * from post
where itemid = $1