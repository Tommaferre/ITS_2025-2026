package com.tommaferre.ortofrutta.services;

import java.util.List;

import com.tommaferre.ortofrutta.entities.Prodotto;

public interface ProdottiService {

    List<Prodotto> getProdotti();

    List<Prodotto> getProdottiByCategoria(String categoria);

}
