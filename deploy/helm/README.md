# Application deployment via helm


## 1. Create secret

```bash
kubectl create secret generic ps-backend -n ps --from-env-file=/Users/jig/code/jig/webapp/backend/.env
kubectl create secret generic ps-database -n ps --from-env-file=/Users/jig/code/jig/webapp/database/.env
kubectl create secret generic ps-frontend -n ps --from-env-file=/Users/jig/code/jig/webapp/frontend/.env
```
database

frontend


## 2. helm deployment (ps-database)
```bash
cd deploy/helm/ps-database
helm upgrade ps-database . --install -n ps -f values.dev.yml --atomic
```

## 3. helm deployment (ps-backend)
```bash
cd deploy/helm/ps-backend
helm upgrade ps-backend . --install -n ps -f values.dev.yml --atomic
```

## 3. helm deployment (ps-frontend)
```bash
cd deploy/helm/ps-frontend
helm upgrade ps-frontend . --install -n ps -f values.dev.yml --atomic
```

