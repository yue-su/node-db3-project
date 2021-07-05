-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.id, p.ProductName, c.CategoryName
from product as p
join category as c
on p.CategoryID = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.id, o.ShipVia, o.OrderDate, s.CompanyName
from [order] as o
    join Shipper as s
    on o.ShipVia = s.id
where OrderDate < [2012-08-09];

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select o.OrderId, o.ProductId, o.Quantity, p.ProductName
from OrderDetail as o
    join Product as p
    on o.ProductId = p.id
where OrderID = 10251
order by ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id as OrderID, c.CompanyName as Customer, e.LastName as Employee
from [order] as o
join Customer as c on o.CustomerId = c.Id
join Employee as e on o.EmployeeId = e.Id;

