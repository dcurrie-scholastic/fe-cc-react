# Front End Code Project - React

## Getting Started

```bash
npm install
npm start
```

## API

This is a simple JSON database, stored in `db.json` and hosted on `localhost:3000`

[Documentation](https://github.com/typicode/json-server)

### People

#### Schema

```json
{
    "id": string,
    "isActive": boolean,
    "name": {
        "first": string,
        "last": string
    },
    "company": string
}
```

##### Routes

```bash
GET     /people
GET     /people/{id}
POST    /people
PUT     /people/{id}
PATCH   /people/{id}
DELETE  /people/{id}
```

## App

This is a simple React app created using [Create React App](https://github.com/facebook/create-react-app)