# E-Commerce CMS (Content Management System)

List of available endpoints:
​
- `POST /login`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`


### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string",
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string",
}
```

### POST /products

description: 
  add a product

Request:

- headers: access_token (string)
- body: 
```json
{
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer"
}
```

Response:

- status: 201
- body:

```json
{
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### GET /products

description: 
  show all products

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
  },
  {
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
  }
]
```

### GET /products/:id

description: 
  show product by id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
  }
```

### PUT /products/:id

description: 
  edit product

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json
{
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer"
}
```

Response:

- status: 200
- body:

```json
{
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### PATCH /products/:id

description: 
  change product's stock

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json
{
    "stock": "integer"
}
```

Response:

- status: 200
- body:

```json
{
    "id": "integer",
    "name": "string",
    "img_url": "string",
    "price": "integer",
    "stock": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### DELETE /tasks/:id

description: 
  delete product by id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "message": "task has been deleted",
}
```