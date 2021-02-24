# E-Commerce CMS (Content Management System)

List of available endpoints:
​
- `POST /login`
- `POST /products`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id`
- `DELETE /products/:id`

- `POST /register`
- `POST /loginCustomer`
- `POST /carts`
- `GET /carts`
- `PATCH /carts/:id`
- `DELETE /carts/:id`

- `POST /wishlist`
- `GET /wishlist`
- `DELETE /wishlist/:id`

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

### DELETE /products/:id

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
    "message": "product has been deleted",
}
```

### POST /loginCustomer

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
### POST /register

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
  "id": "integer",
  "email": "string"
}
```

### POST /carts

description: 
  add a product to cart

Request:

- headers: access_token (string)
- body: 
```json
{
    "UserId": "integer",
    "ProductId": "integer"
}
```

Response:

- status: 201
- body:

```json
{
    "UserId": "integer",
    "ProductId": "integer",
    "quantity": "integer",
    "purchased": "boolean",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### GET /carts

description: 
  show all products in customer's cart

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": "integer",
    "UserId": "integer",
    "ProductId": "integer",
    "quantity": "integer",
    "purchased": "boolean",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z",
    "Products": [
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
  },
  {
    "id": "integer",
    "UserId": "integer",
    "ProductId": "integer",
    "quantity": "integer",
    "purchased": "boolean",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z",
    "Products": [
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
  }
]
```

### PATCH /carts/:id

description: 
  update product quantity in cart

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json
{
    "quantity": "integer"
}
```

Response:

- status: 200
- body:

```json
{
  "id": "integer",
  "UserId": "integer",
  "ProductId": "integer",
  "quantity": "integer",
  "purchased": "boolean",
  "updatedAt": "2021-02-13T15:03:01.876Z",
  "createdAt": "2021-02-13T15:03:01.876Z",
  "Products": [
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
}
```

### DELETE /carts/:id

description: 
  delete product by id in cart

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "message": "product has been deleted from cart",
}
```

### POST /wishlists

description: 
  add a product to wishlist

Request:

- headers: access_token (string)
- body: 
```json
{
    "UserId": "integer",
    "ProductId": "integer"
}
```

Response:

- status: 201
- body:

```json
{
    "UserId": "integer",
    "ProductId": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z"
}
```

### GET /wishlists

description: 
  show all products in wishlist

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": "integer",
    "UserId": "integer",
    "ProductId": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z",
    "Products": [
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
  },
  {
    "id": "integer",
    "UserId": "integer",
    "ProductId": "integer",
    "updatedAt": "2021-02-13T15:03:01.876Z",
    "createdAt": "2021-02-13T15:03:01.876Z",
    "Products": [
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
  }
]
```
### DELETE /wishlists/:id

description: 
  delete product by id in wishlist

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
    "message": "product has been deleted from wishlist",
}
```