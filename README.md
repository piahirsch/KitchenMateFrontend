# KitchenMateFrontend

Gruppenmitglieder:
- Ngo Tuyet Huong Claudia Dinh
- Pia Hirsch

KitchenMate ist eine moderne Rezeptmanager-Webanwendung, bestehend aus einem Java-basierten Backend und einem Vue.js-Frontend. Sie ermöglicht es dir, Rezepte anzulegen, zu durchsuchen, zu bearbeiten und in einer interaktiven Schritt-für-Schritt-Ansicht abzuarbeiten.


## Features

- Karten­übersicht aller Rezepte mit Name, Kategorie, Schwierigkeitsgrad und Beschreibung
- YouTube-Video-Integration: In der Karte hinterlegte YouTube-Videos lassen sich direkt
  abspielen
- Interaktive Schritte: Schritt-für-Schritt-Anleitung mit Checkboxen; Fortschritt wird in
  localStorage gespeichert
- CRUD-Funktionalität:
   - Erstellung neuer Rezepte (Name, Beschreibung, Kategorie, Schwierigkeitsgrad, Link,
     Schritte, Zutaten)
   - Bearbeiten vorhandener Rezepte
   - Löschen mit Bestätigungs­dialog
- Kategoriefilter: Schnelles Filtern der Rezept­übersicht nach Kategorie
- Automatische Listen­generierung: Eingabe von Schritten und Zutaten als kommaseparierte
  Texte wird beim Speichern in Listen­einträge umgewandelt


## Supported Use Cases

1.YouTube-Video abspielen
  - Rezept mit Video-Link zeigt eingebettetes Player

2.Neues Rezept erstellen
  - Formular mit Eingabe von Name, Beschreibung, Kategorie, Schwierigkeitsgrad, Link,
    Schritten und Zutaten

3.Automatische Listen-Erzeugung
  - Kommagetrennte Schritte und Zutaten werden beim Speichern in HTML-Listen umgewandelt

4.Rezept bearbeiten
  - Vorhandene Felder im Formular vorbefüllt und änderbar

5.Rezept löschen
  - Bestätigungs-Modal verhindert unbeabsichtigtes Löschen

6.Interaktive Schritt-Checkboxen
  - Abgearbeitete Schritte bleiben dank localStorage erhalten

7.Kategorie-Filter
  - Schnelles Eingrenzen der Rezepte nach ausgewählter Kategorie

8.Responsive Darstellung
  - Optimale Anzeige auf verschiedenen Gerätetypen


## API Endpoints

GET
- /recipes
- Alle Rezepte abrufen

POST
- /recipes
- Neues Rezept erstellen

PUT
- /recipes/:id
- Vorhandenes Rezept aktualisieren

DELETE
- /recipes/:id
- Rezept löschen
