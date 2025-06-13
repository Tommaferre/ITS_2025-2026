package com.tommaferre.ortofrutta.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tommaferre.ortofrutta.entities.Prodotto;

public interface ProdottoRepo extends JpaRepository<Prodotto, Integer> {

}
