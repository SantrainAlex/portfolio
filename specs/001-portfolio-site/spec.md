# Feature Specification: Site Portfolio — Alexis Santrain

**Feature Branch**: `001-portfolio-site`
**Created**: 2026-03-11
**Status**: Draft
**Input**: Portfolio personnel en français pour Alexis Santrain, Développeur Full Stack

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Premier contact recruiter (Priority: P1)

Un recruteur reçoit un lien vers le portfolio d'Alexis. Il ouvre le site sur son ordinateur
ou son téléphone et comprend immédiatement qui est Alexis, quel est son métier, ses
technologies principales, et comment le contacter — sans avoir à faire défiler la page.

**Why this priority**: C'est le cas d'usage principal et le plus fréquent. Si cette
impression initiale échoue, le reste du site n'a aucune importance.

**Independent Test**: Ouvrir le site sur mobile (375 px) et desktop (1440 px) ; en moins de
10 secondes, identifier : nom complet, titre, 3 catégories de compétences, et au moins une
façon de contacter Alexis.

**Acceptance Scenarios**:

1. **Given** que le recruteur ouvre le site pour la première fois, **When** la page se
   charge, **Then** il voit dans la zone visible (hero) : "Alexis Santrain",
   "Développeur Full Stack", les catégories Frontend / Backend / Outils, une photo, et un
   bouton CTA vers la section Contact.
2. **Given** que le recruteur est sur mobile, **When** il lit le hero, **Then** toutes les
   informations ci-dessus sont lisibles sans zoom ni scroll horizontal.
3. **Given** que le recruteur préfère le mode sombre, **When** son système est en dark mode,
   **Then** le site s'affiche automatiquement en palette sombre avec un contraste lisible.

---

### User Story 2 — Exploration du parcours et des compétences (Priority: P2)

Le recruteur fait défiler la page pour en savoir plus sur le parcours professionnel, les
formations et les compétences détaillées d'Alexis.

**Why this priority**: Après le premier contact, le recruteur cherche à valider la cohérence
et la profondeur du profil.

**Independent Test**: Naviguer via le menu ou le scroll jusqu'aux sections Compétences,
Expériences et Formation ; vérifier que chaque section affiche les informations correctes
issues du CV.

**Acceptance Scenarios**:

1. **Given** que le recruteur clique sur "Compétences" dans la navigation, **When** la
   section s'affiche, **Then** les technologies sont groupées en trois catégories :
   Frontend (React, React Native, JS/TS), Backend (PHP, Symfony, API Platform, PostgreSQL),
   Outils & Méthodo (Git, Docker, Méthode Agile).
2. **Given** que le recruteur consulte la section Expériences, **When** il lit la timeline,
   **Then** il voit les trois postes chez Tildeo en ordre chronologique inversé :
   Développeur Full Stack (2025–2026), Architecte Web en alternance (2024–2025),
   Concepteur Développeur d'Applications en alternance (2022–2024).
3. **Given** que le recruteur consulte la section Formation, **When** il lit les diplômes,
   **Then** il voit : Mastère Architecte Web RNCP 7 (2024–2025), Titre CDA RNCP 6
   (2022–2024), Titre Développeur Web RNCP 5 (2021–2022), tous à Foreach Academy.

---

### User Story 3 — Prise de contact directe (Priority: P3)

Le recruteur décide de contacter Alexis ou de télécharger son CV pour le transmettre
en interne.

**Why this priority**: Conversion finale ; doit être sans friction.

**Independent Test**: Depuis la section Contact, cliquer sur l'email, le téléphone, LinkedIn
et le bouton de téléchargement du CV ; vérifier que chaque action fonctionne correctement.

**Acceptance Scenarios**:

1. **Given** que le recruteur clique sur l'adresse email, **When** l'action se déclenche,
   **Then** son client mail s'ouvre avec `santrain.alexis@hotmail.com` pré-rempli.
2. **Given** que le recruteur clique sur le numéro de téléphone sur mobile, **When**
   l'action se déclenche, **Then** l'application téléphone s'ouvre avec `07-83-57-82-79`
   prêt à composer.
3. **Given** que le recruteur clique sur "LinkedIn", **When** l'action se déclenche,
   **Then** le profil `linkedin.com/in/alexis-santrain-749915200` s'ouvre dans un nouvel
   onglet.
4. **Given** que le recruteur clique sur "Télécharger mon CV", **When** l'action se
   déclenche, **Then** le fichier `CV.pdf` se télécharge directement sans redirection.

---

### User Story 4 — Présentation d'un projet concret (Priority: P4)

Le recruteur veut voir un exemple de réalisation concrète pour évaluer les compétences
techniques en contexte réel.

**Why this priority**: Complément des compétences listées ; permet de valider l'application
réelle des technologies.

**Independent Test**: Naviguer jusqu'à la section Projet ; vérifier que le projet BtoC est
décrit avec contexte métier, technologies utilisées et rôle d'Alexis.

**Acceptance Scenarios**:

1. **Given** que le recruteur consulte la section Projet, **When** il lit la fiche,
   **Then** il comprend : le contexte (application BtoC multiplateforme pour bailleurs
   sociaux), le rôle d'Alexis (développement frontend et backend), et les technologies
   impliquées.
2. **Given** que le recruteur est sur mobile, **When** il consulte la fiche projet,
   **Then** la mise en page est lisible sans scroll horizontal.

---

### Edge Cases

- Que se passe-t-il si le recruteur désactive JavaScript ? Les informations principales
  (nom, titre, contact) doivent rester visibles en HTML pur.
- Que se passe-t-il si le fichier CV.pdf n'est pas disponible ? Le bouton de téléchargement
  affiche un message clair plutôt qu'un lien brisé silencieux.
- Que se passe-t-il sur un écran très large (2560 px+) ? Le contenu est centré avec une
  largeur maximale pour rester lisible.
- Que se passe-t-il si le recruteur utilise un lecteur d'écran ? Toutes les images ont des
  `alt` en français et la navigation est accessible au clavier.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001** : Le site DOIT afficher dans la section Hero : le nom "Alexis Santrain", le
  titre "Développeur Full Stack", les trois catégories de compétences, une photo de profil,
  et un bouton CTA pointant vers la section Contact.
- **FR-002** : Le site DOIT proposer une navigation permettant d'accéder directement à
  chaque section : Hero, À propos, Compétences, Expériences, Formation, Projet, Contact.
- **FR-003** : La section Compétences DOIT afficher les technologies groupées en trois
  catégories : Frontend (React, React Native, JS/TS), Backend (PHP, Symfony, API Platform,
  PostgreSQL), Outils & Méthodo (Git, Docker, Méthode Agile).
- **FR-004** : La section Expériences DOIT afficher une timeline en ordre chronologique
  inversé avec les trois postes Tildeo (2025–2026, 2024–2025, 2022–2024).
- **FR-005** : La section Formation DOIT afficher les trois diplômes Foreach Academy
  (RNCP 5, 6, 7) avec années et intitulés exacts tels que figurant dans le CV.
- **FR-006** : La section Projet DOIT présenter l'application BtoC multiplateforme pour
  bailleurs sociaux avec contexte métier, rôle d'Alexis et technologies utilisées.
- **FR-007** : La section Contact DOIT inclure : un lien `mailto:santrain.alexis@hotmail.com`,
  un lien `tel:0783578279`, un lien LinkedIn s'ouvrant dans un nouvel onglet, et un bouton
  de téléchargement direct du fichier CV.pdf.
- **FR-008** : Le site DOIT supporter le mode sombre via détection système
  (`prefers-color-scheme`) et un bouton de bascule manuel.
- **FR-009** : Le site DOIT être entièrement en français avec `lang="fr"` sur la balise
  `<html>` et des éléments HTML sémantiques (`header`, `main`, `section`, `footer`, `nav`).
- **FR-010** : Le site DOIT inclure Google Analytics 4 pour le suivi des visites.
- **FR-011** : Le site DOIT avoir une balise `<title>` et une `<meta name="description">`
  en français optimisées SEO.
- **FR-012** : Le site DOIT être responsive et utilisable aux breakpoints 320 px, 768 px et
  1280 px minimum, sans scroll horizontal.

### Key Entities

- **Section** : Bloc de contenu nommé avec ancre de navigation (id HTML).
- **Expérience professionnelle** : Poste occupé avec titre, entreprise, période, lieu et
  description courte.
- **Diplôme / Formation** : Certification avec intitulé, niveau RNCP, établissement et
  années.
- **Compétence** : Technologie ou outil appartenant à une catégorie (Frontend / Backend /
  Outils & Méthodo).
- **Projet** : Réalisation concrète avec contexte métier, rôle, technologies utilisées.
- **Contact** : Ensemble des moyens de joindre Alexis (email, téléphone, LinkedIn, CV PDF).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001** : Un recruteur identifie le nom, le titre et les catégories de compétences en
  moins de 10 secondes après le chargement de la page (test utilisateur sur 5 personnes).
- **SC-002** : Le site se charge en moins de 3 secondes sur une connexion mobile simulée
  (test Lighthouse ou WebPageTest).
- **SC-003** : Le score Lighthouse Performance sur mobile atteint ≥ 85.
- **SC-004** : Le score Lighthouse Accessibility atteint ≥ 90.
- **SC-005** : Toutes les actions de contact (email, téléphone, LinkedIn, CV) fonctionnent
  sans erreur sur Chrome, Firefox et Safari (desktop + mobile).
- **SC-006** : Le site s'affiche sans overflow ni élément cassé à 320 px, 768 px et 1440 px
  en modes clair et sombre.
- **SC-007** : Aucune information affichée ne diffère du CV.pdf source (zéro incohérence
  détectée lors d'une relecture manuelle).

---

## Assumptions

- Le fichier `CV.pdf` sera placé dans les assets statiques du projet tel quel, sans
  régénération.
- La photo de profil d'Alexis sera fournie en format web (JPG ou WebP, fond neutre) ;
  en attendant, un placeholder sera utilisé.
- Le measurement ID Google Analytics 4 sera fourni par Alexis avant le déploiement ;
  un placeholder `GA_MEASUREMENT_ID` sera utilisé pendant le développement.
- Le site sera hébergé sur une plateforme de déploiement statique (Vercel, Netlify ou
  GitHub Pages) sans backend.
- Aucun formulaire de contact n'est requis ; toutes les interactions passent par des liens
  natifs (`mailto:`, `tel:`).
- La section "À propos" contiendra une courte bio synthétisée depuis le CV ; le texte exact
  devra être validé par Alexis avant la mise en ligne.
