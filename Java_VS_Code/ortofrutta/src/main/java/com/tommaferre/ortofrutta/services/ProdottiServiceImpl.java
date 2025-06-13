package com.tommaferre.ortofrutta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tommaferre.ortofrutta.entities.Prodotto;
import com.tommaferre.ortofrutta.repos.ProdottoRepo;

@Service
public class ProdottiServiceImpl implements ProdottiService {

    @Autowired
    private ProdottoRepo repo;


    @Override
    public List<Prodotto> getProdotti() {
        
       return repo.findAll();
    }


    @Override
    public List<Prodotto> getProdottiByCategoria(String categoria) {
        
        return repo.findByCategoria(categoria);
    }
    
}
