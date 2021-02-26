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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
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
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```