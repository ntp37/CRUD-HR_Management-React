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
* Tailwind CSS
* Material UI
* React Tabs
* ApexCharts
* SweetAlert2
* Express.js
* Axios
* MySQL2

### How to use files in repository
1. run command `git clone`
2. run command `npm install` in `client` and `server` folders
3. Create `.env` file in both folders

![.env position](./overview-image/env.png)

4. `.env` file in both folders insert following code

```
// .env in "client" folder
VITE_API = 'http://localhost:3000/'


// .env in "server" folder
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = 'root7890'
DB_DATABASE = 'myemployee'
DB_PORT = 3306
```

5. run command `npm run dev` in both folders
