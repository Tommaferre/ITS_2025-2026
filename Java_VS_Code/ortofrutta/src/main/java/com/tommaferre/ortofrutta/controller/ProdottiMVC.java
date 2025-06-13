package com.tommaferre.ortofrutta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.tommaferre.ortofrutta.services.ProdottiService;
import org.springframework.web.bind.annotation.GetMapping;


@Controller //Controller MVC -> userà un template html
public class ProdottiMVC {

    @Autowired
    private ProdottiService service;

    @GetMapping("prodotti")
    public String prodotti(Model m ) {

        m.addAttribute("prodotti", service.getProdotti());

        return "prodotti"; //deve essere il nome di un file .html nella cartella templates
    }
    


}
