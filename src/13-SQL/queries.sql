-- *** Ders: Select - Kayıt Seçme
-- select * from shopapp.products
-- select Name from shopapp.products
-- select Name,Price from shopapp.products
-- select Name as ProductName, Price as Fiyat from shopapp.products

-- *** Ders: Where - Kayıt Filtreleme
-- select * from shopapp.products where Id = 1
-- select * from shopapp.products where Price = 2000
-- select Name,Price from shopapp.products where Price >= 2000
-- select Name,Price from shopapp.products where Price >= 2000 And Price <= 4000
-- select * from shopapp.products where Id = 1 Or Id = 2
-- select * from shopapp.products where Name = 'Samsung S5'
-- select * from shopapp.products where Name != 'Samsung S5'
-- select * from shopapp.products where NOT Name = 'Samsung S5'
-- select * from shopapp.products where Name = 'Samsung S5' and Price = 2000
-- select * from shopapp.products where Name = 'Samsung S5' and (Price = 2000 OR Price = 3000)

-- *** Ders: Where - Filtreleme Operatörleri
-- select * from shopapp.products where Price Between 2000 and 4000
-- select * from shopapp.products where Id Not Between 1 and 2
-- select * from shopapp.products where Category IN ('Telefon','Bilgisayar')
-- select * from shopapp.products where Category NOT IN ('Telefon')
-- select * from shopapp.products where Id NOT IN (1,2)
-- select * from shopapp.products where Name LIKE 'S_m%'
-- select * from shopapp.products where Name NOT LIKE '%Iphone%'
-- select * from shopapp.products where Name LIKE '%Iphone%' and Price>=2000
-- select * from shopapp.products where Name LIKE '%Samsung%' and Description LIKE '%çift sim kart%'

-- *** Ders: Order - Kayıt Sıralama
-- select * from shopapp.products order by Price
-- select * from shopapp.products order by Name
-- select * from shopapp.products order by Name DESC
-- select * from shopapp.products order by Price DESC
-- select * from shopapp.products order by Category DESC,Price ASC

-- *** Ders: SQL Fonksiyonları - Hesaplama
-- min(), max(), count(), avg(), sum()
-- select min(price) as 'minimum fiyat' from shopapp.products
-- select max(price) as 'maksimum fiyat' from shopapp.products
-- select name,price from shopapp.products order by price desc limit 1
-- select count(*) from shopapp.products
-- select count(Id) as adet from shopapp.products
-- select avg(price) as ortalama from shopapp.products
-- select sum(price) as toplam from shopapp.products
-- select sum(price * stock) as toplam from shopapp.products

-- *** Ders: SQL Fonksiyonları - String
-- select length('Sadık Turan') as karaktersayisi
-- select name,length(name) as karakteruzunlugu from shopapp.products
-- select name, concat(left(name,3),'...') as karakteruzunlugu from shopapp.products
-- select right('Sadık Turan',5) as name
-- select name,right(description,5) as name from shopapp.products
-- select name, lower(name) from shopapp.products
-- select name, upper(name) from shopapp.products
-- select name, lower(replace(name,' ','-')) as name from shopapp.products
-- select concat(trim('    Sadık Turan  '),'***')
-- select name, trim(name) from shopapp.products
-- select name, ltrim(name) from shopapp.products
-- select name, rtrim(name) from shopapp.products

-- *** Ders: Group By - Distinct - Having
-- select distinct Category from shopapp.products
-- select category, Count(*) as adet from shopapp.products group by category
-- select category, Sum(price) as toplam from shopapp.products group by category
-- select category, Avg(price) as ortalama from shopapp.products group by category
-- select category, Avg(price) as ortalama from shopapp.products where price>3000 group by category
-- select category, Count(*) as adet from shopapp.products group by category having Count(*) > 1

-- *** Ders: Kayıt Ekleme - Insert
-- select * from shopapp.products
-- INSERT INTO shopapp.products (Name,Price,ImageUrl,Category,Description,Stock) VALUES ('Samsung S10', 7000, '1.jpg','Telefon','Çok iyi telefon', 10);
-- INSERT INTO shopapp.products (Name,Price,Category) VALUES ('Samsung S11', 8000,'Telefon');
-- select count(ImageUrl) adet from shopapp.products

-- *** Ders: Kayıt Güncelleme - Update
-- UPDATE shopapp.products SET Name = 'Samsung S7', Price = 3000 WHERE Id = 1
-- SET SQL_SAFE_UPDATES = 0;
-- UPDATE shopapp.products SET Price = Price * 1.5 WHERE Category = 'Telefon'
-- UPDATE shopapp.products SET ImageUrl = 'noproduct.jpg' WHERE ImageUrl = null 

-- *** Ders: Kayıt Silme - Delete

-- DELETE FROM shopapp.products WHERE Id = 1
-- DELETE FROM shopapp.products WHERE price>2000 and category = 'Bilgisayar'
-- DELETE FROM shopapp.products WHERE description IS null

select o.id order_id, CONCAT(c.first_name,c.last_name) customername,o.order_date from orders o 
inner join customers c
on o.customer_id = c.id
where c.city = 'New York'

select o.id order_id,p.product_name,(od.unit_price * od.quantity) total, CONCAT(c.first_name,c.last_name) customername,o.order_date from orders o 
inner join customers c on o.customer_id = c.id
inner join order_details od on od.order_id = o.id
inner join products p on p.id = od.product_id
order by customername

select o.id order_id,sum(od.unit_price * od.quantity) total, CONCAT(c.first_name,c.last_name) customername,o.order_date from orders o 
inner join customers c on o.customer_id = c.id
inner join order_details od on od.order_id = o.id
inner join products p on p.id = od.product_id
group by o.id

select c.first_name,o.id as orderid from customers c
left join orders o
on o.customer_id = c.id
where o.id is null
order by c.first_name

select p.id,p.product_name from products p left join order_details od
on p.id = od.product_id
where od.id is null

select o.id,e.first_name from orders o right join employees e
on e.id = o.employee_id
where o.id is null
order by o.id


-- Hangi üründen kaç tane satılmış ?

select p.id, p.product_name,count(*) adet from products p inner join order_details od
on p.id = od.product_id
group by p.id
order by adet

-- En çok kazandıran ilk 3 ürün hangisidir ?
select p.id,p.product_name, sum(od.quantity*od.unit_price) as kazanç from products p inner join order_details od
on p.id = od.product_id
group by p.id
order by kazanç desc
limit 3

-- Hangi kargo şirketlerine toplam ne kadar ödeme yapılmış?
select s.company, sum(o.shipping_fee) as total from orders o inner join shippers s
on s.id = o.shipper_id
group by s.id
order by total

-- En uygun kargo ücreti hangisidir ?

select s.company, avg(o.shipping_fee) as ortalama from orders o inner join shippers s
on s.id = o.shipper_id
where o.shipping_fee > 0
group by s.id
having count(o.id) > 10

-- Seçilen Kayıtların Tabloya Eklenmesi

insert into employee_performans(employee_id,fullname,email,satis_adeti)
select e.id,CONCAT(e.first_name,' ',e.last_name) as fullname,e.email_address,count(o.id) as adet 
from employees e left join orders o
on e.id = o.employee_id
group by e.id

-- Join ile Update 
update employees e inner join employee_performans ep
on e.id = ep.employee_id 
set e.email_address = ep.email
where ep.email like '%updated%'

-- Join ile Delete

-- siparişi olmayan müşterileri siliniz.
select c.id,c.first_name from customers c
left join orders o on o.customer_id = c.id
where o.customer_id is null

delete customers
from customers left join orders
on orders.customer_id = customers.id
where orders.customer_id is null and customers.id=13

-- union ile çalışma

select email from employee_performans
union all
select email_address from employees

select city,country_region from employees
union all
select city,country_region from customers













-- Ders: Alt Sorgular **************

select id,order_date from orders
where status_id = (select id from orders_status where status_name = 'Shipped')

select c.id,c.first_name,c.last_name, 
(select count(o.id) from orders o where o.customer_id=c.id) as ordercount
from customers c

select id,product_name from products
where id in (select product_id from order_details where quantity>100)

-- Ders: EXISTS **************

select id, first_name from customers c
where EXISTS 
(select id from orders o where c.id = o.customer_id and payment_type='Credit Card')


select id, first_name,last_name from customers c
where EXISTS
(select count(*) from orders o
where c.id = o.customer_id 
group by o.customer_id 
having count(*)>2)

-- Ders: ANY & ALL **************

select id, product_name, list_price from products
where id in (2,3,5,10) 

select id, product_name, list_price from products
where id = any (select product_id from order_details where quantity > 10) 

-- (id=2) or (id=3) or (id=5) or (id=10)

select id, product_name, list_price from products
where id > all (select product_id from order_details where quantity > 10) 

-- (id=2) and (id=3) and (id=5) and (id=10)

-- select avg(salary) from customers2

select * from customers2 
where salary < any (select avg(salary) from customers2)

select * from customers2 
where age > any (select age from customers2 where salary>5000)

select * from customers2 
where age > all (select age from customers2 where salary>5000)



















 


