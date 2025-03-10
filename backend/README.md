# Backend Application

## Install NPM

```bash
sudo apt update && sudo apt install npm postgresql-client-common postgresql-client-16 postgresql-client -y
cd backend/
npm install
vim .env
```

### Test connection
pg_isready -h $DB_HOST -p $DB_PORT -d $DB_NAME -U $DB_USER
psql -h $DB_HOST -p $DB_PORT -d $DB_NAME -U $DB_USER

## Start app

```bash
node app.js
```


## Spectral

```bash
cd backend
spectral lint openapi.yaml --ruleset .spectral.yaml --verbose

```