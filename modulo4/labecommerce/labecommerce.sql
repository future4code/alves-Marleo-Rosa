create table labecommerce_users(
	id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
	password varchar(255) not null
);

select * from labecommerce_users;

create table labecommerce_products(
	id varchar(255) primary key,
    name varchar(255) not null,
    price float not null,
    image_url varchar(255) not null
);

select * from labecommerce_products;

create table labecommerce_purchases(
	id varchar(255) primary key,
    user_id varchar(255) not null,
    product_id varchar(255) not null,
    quantity int not null,
    total_price float not null,
    foreign key (user_id) references labecommerce_users(id),
	foreign key (product_id) references labecommerce_products(id)
 classes-encapsulamento
);

select * from labecommerce_purchases;
=======
);
master
