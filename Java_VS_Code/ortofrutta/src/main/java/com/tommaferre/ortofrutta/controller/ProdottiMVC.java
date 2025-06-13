package com.tommaferre.ortofrutta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.tommaferre.ortofrutta.services.ProdottiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller //Controller MVC -> userà un template html
public class ProdottiMVC {

    @Autowired
    private ProdottiService service;

    @GetMapping("prodotti")
    public String prodotti(Model m ) {

        m.addAttribute("prodotti", service.getProdotti());

        return "prodotti"; //deve essere il nome di un file .html nella cartella templates
    }

    @GetMapping("prodotti/{categoria}")
    public String prodotti(@PathVariable String categoria, Model m ) {

        m.addAttribute("prodotti", service.getProdottiByCategoria(categoria));

        return "prodotti"; //deve essere il nome di un file .html nella cartella templates
    }
    


}
