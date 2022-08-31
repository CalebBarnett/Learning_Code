/*  */
select sum(age) / count(*) as average from pet;

/*  */
select avg(age) from pet;

/*  */
select avg(length(name)) as anl from pet;

/*  */
select round(avg(age)) as average from pet;

/*  */
select random();

/*  */
select abs(random() % 20);

/*  */
update pet set age = abs(random() % 20) where dead = 0;

/*  */
select round(avg(age)) as average from pet;

/*  */
update pet set age = abs(random() % 50) where dead = 0;

/*  */
select round(avg(age)) as average from pet;
