
1. To insert values in customers table.
    insert into Customers values
    (6,'Jatin', 'Raju', 24, 'IND');

2. To insert multiple values in customers table.
    insert into Customers values
    (7,'Arsh', 'Deep', 24, 'IND'),
    (8,'Priya', 'Sharma', 33, 'UK'),
    (9,'John', 'Deo', 34, 'USA'),
    (10,'Steve', 'Smith', 21, 'IND');

3. To get number of customers per country.
    select country, count(*) as 'No_of_customers' 
    from customers group by country;

4. To get the orders who have amount between 100 to 500.
    select order_id from orders 
    where amount between 100 and 500;

5. To get the first name and last name of customers who have bought Keypad.
    select first_name, last_name from customers 
    join orders 
    on customers.customer_id = orders.customer_id 
    where orders.item = 'Keyboard';

6. To get the name of the countries where shipping status is Pending.
    select country from customers 
    join shippings 
    on customers.customer_id = shippings.customer 
    where shippings.status = 'Pending' 
    group by customers.country;

7. To get the number of orders per customer.
    select customers.customer_id, count(*) as 'No_of_orders' from customers 
    join orders 
    on customers.customer_id = orders.customer_id 
    group by orders.customer_id;