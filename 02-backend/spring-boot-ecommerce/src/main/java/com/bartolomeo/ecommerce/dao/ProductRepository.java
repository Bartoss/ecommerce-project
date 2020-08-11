package com.bartolomeo.ecommerce.dao;

import com.bartolomeo.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
