# language: fr
Fonctionnalité: Gestion du panier

  Scénario: Ajout d'un produit au panier
    Etant donné que je suis connecté en tant que "standard_user"
    Quand j'ajoute le premier produit au panier
    Alors le badge du panier affiche "1"

  Scénario: Suppression d'un produit du panier
    Etant donné que je suis connecté en tant que "standard_user"
    Et que j'ai ajouté le premier produit au panier
    Quand je supprime le premier produit du panier
    Alors le badge du panier a disparu

  Scénario: Le catalogue affiche 6 produits 
    Etant donné que je suis connecté en tant que "standard_user"
    Alors le catalogue affiche "6" produits