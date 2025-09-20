# Test Déploiement – Calculatrice

Une petite application de calculatrice déployée avec **Docker** et testée automatiquement via **GitHub Actions**.

---

## Fonctionnalités

- Addition, soustraction, multiplication et division (avec gestion de la division par zéro).
- Interface web simple en **HTML + CSS + JavaScript**.
- Déploiement avec **Docker** et **Nginx**.
- Tests automatisés via **GitHub Actions**.

---

## Installation et Lancement

### Option 1 : Lancer en local (sans Docker)
Possible d'utiliser un simple serveur web pour tester l’application localement.

```bash
    npx http-server .
```
Puis ouvrir : http://localhost:8080 dans le navigateur

### Option 2 : Lancer avec Docker Compose
Construir et lancer le conteneur :
```bash
    docker-compose up --build
```
Puis ouvrir : http://localhost:8080 dans le navigateur

---

## Tests Automatisés (GitHub Actions)
Le projet contient un workflow GitHub Actions (.github/workflows/autoTest.yml) qui s’exécute à chaque pull request vers la branche main.

Il exécute les étapes suivantes :

- Installe les dépendances (npm ci).
- Construit le projet (npm run build si présent).
- Lance les tests (npm test).

**Résultat** : chaque PR est automatiquement validée ou rejetée selon les tests.

---

## Utilisation de la Calculatrice
1. Saisir deux nombres dans les champs Nombre 1 et Nombre 2.

2. liquer sur un des boutons :

- Additionner
- Soustraire
- Multiplier
- Diviser

3. Le résultat apparaît sous les boutons.

---

Ce README explique **comment lancer**, **comment fonctionnent les tests GitHub Actions** et **comment utiliser l’app**.  