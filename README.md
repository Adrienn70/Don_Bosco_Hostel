# Carte des Foyers et Lieux Importants pour Ashalayam

Cette carte interactive a été développée pour les volontaires d'Ashalayam afin de faciliter la localisation des différents foyers et des lieux importants à proximité. Elle permet une meilleure orientation sur le terrain et une planification plus efficace des activités.

## Contenu de la carte

La carte affiche les informations suivantes :

*   **Foyers :** Représentés par des points rouges. Chaque point, lorsqu'on clique dessus, affiche des informations détaillées sur le foyer (par exemple, nom, adresse, contact).
*   **Lieux Importants :** Représentés par des points bleus. Ces lieux peuvent inclure des hôpitaux, des écoles, des transports en commun, etc., utiles pour les volontaires. Un clic sur ces points affiche également des informations pertinentes.

## Comment utiliser la carte

La carte est accessible en ligne à l'adresse suivante : adrienn70.github.io/Don_Bosco_Hostel/ .

Voici quelques instructions pour utiliser la carte :

*   **Zoom et déplacement :** Utilisez la molette de la souris pour zoomer et dézoomer, ou cliquez et faites glisser la carte pour vous déplacer.
*   **Affichage des informations :** Cliquez sur un point (rouge ou bleu) pour afficher une fenêtre contextuelle (popup) contenant des informations détaillées.
*   **Légende :** La légende, située en bas à gauche de la carte, explique la signification des différents symboles.

## Informations techniques (pour les développeurs)

La carte a été créée en utilisant les technologies suivantes :

*   **QGIS :** Pour la création et la gestion des données géographiques.
*   **qgis2web :** Un plugin QGIS permettant d'exporter les cartes au format web (OpenLayers).
*   **OpenLayers :** Une librairie JavaScript pour l'affichage de cartes interactives dans les navigateurs web.
*   **GitHub Pages :** Pour l'hébergement de la carte en ligne.

### Structure du dépôt

Le dépôt GitHub contient les dossiers et fichiers suivants :

*   `index.html` : Fichier principal contenant le code HTML, CSS et JavaScript de la carte.
*   `legende.html` : Fichier contenant le code HTML et CSS de la légende.
*   `layers/` : Contient les fichiers de données géographiques (GeoJSON, etc.).
*   `resources/` : Contient les librairies JavaScript (OpenLayers, etc.) et les fichiers CSS.
*   `styles/` : Contient les fichiers de style générés par qgis2web.

### Génération de la carte

La carte a été générée à partir d'un projet QGIS. Les étapes principales sont les suivantes :

1.  Création des couches de données dans QGIS.
2.  Stylisation des couches.
3.  Export de la carte au format web avec le plugin qgis2web (OpenLayers).
4.  Publication sur GitHub Pages.


## Contact

Pour toute question ou suggestion, veuillez contacter pauladrien564@gmail.com.
