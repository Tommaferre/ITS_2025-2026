package com.tommaferre.ortofrutta.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tommaferre.ortofrutta.entities.Prodotto;

@Service
public class ProdottiServiceImpl implements ProdottiService {

    @Override
    public List<Prodotto> getProdotti() {
        
        Prodotto p1 = new Prodotto();
        p1.setNome("Mela");
        p1.setCategoria("Frutta");
        p1.setPrezzoKg(2);


        Prodotto p2 = new Prodotto();
        p1.setNome("Carciofo");
        p1.setCategoria("Verdura");
        p1.setPrezzoKg(3);

        return List.of(p1,p2);
    }
    
}
