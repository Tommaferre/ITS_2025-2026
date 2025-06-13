package com.tommaferre.ortofrutta.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tommaferre.ortofrutta.entities.Prodotto;

public interface ProdottoRepo extends JpaRepository<Prodotto, Integer> {

    List<Prodotto> findByCategoria(String categoria);

}
