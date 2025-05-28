db.movies.aggregate([
  {
    $match: { year: { $gt: 2000 } } // Filtra i documenti nella collezione movies per tenere solo quelli con year maggiore di 2000.
  },
  {
    $lookup: {
      from: "comments",  // la collezione da unire
      localField: "_id", // campo nei film
      foreignField: "movie_id", // campo nei commenti
      as: "movie_comments" // nome del nuovo array con i commenti
    }
  },
  {
    $addFields: {
      commentsCount: { $size: "$movie_comments" } // Aggiunge un nuovo campo commentsCount che contiene la lunghezza dell’array movie_comments
    }
  },
  {
    $match: {
      commentsCount: { $gt: 50 }  // Soglia arbitraria, filtra per tenere solo i film con più di n commenti.
    }
  },
  {
    $project: { // Sceglie i campi da mostrare nel risultato finale:
      title: 1,
      year: 1,
      commentsCount: 1    //Tutti gli altri (es. movie_comments) vengono esclusi
    }
  }
]);
