# CRUD Employee Management project

![project overview](./overview-image/project-overview.png)

## Introduction
The Full Stack project is a basic employee management with CRUD features

### System in Application
* CRUD for employee data
* Information Dashboard
* Table employee data

### Tools
* React
* NodeJS
* Taliwind CSS
* Material UI
* React Tabs
* ApexCharts
* SweetAlert2
* Express.js
* Axios
* MySQL2

### How to use files in repository
1. run command `git clone`
2. Create `.env` file in `client` and `server` folders

![.env position](./overview-image/env.png)

3. `.env` file in both folders insert following code

```
// .env in "server" folder
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = 'root7890'
DB_DATABASE = 'myemployee'
DB_PORT = 3306


// .env in "client" folder
VITE_API = 'http://localhost:3000/'
```

4. run command `npm run dev` in both folders