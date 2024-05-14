# User API Spec

## Register User API

Endpoint : Post /api/users

Request Body :

```json
{
  "username" : "yuta123",
  "password" : "rahasia",
  "name" : "Yuta"
}
```

Response Body Success :

```json
{
  "data" : {
    "username" : "yuta123"
  }
} 
```

Response Body Error :

```json
{
  "errors" : "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "yuta123",
  "password" : "rahasia"
}
```

Response Body Success :

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/me

Headers :

- Authorization : token

Request Body :

```json
  {
    "name" : "new name", // optional
    "password" : "new password" // optional 
  }
```

Response Body Success :

```json
  {
    "data" : {
      "username" : "yuta",
      "name" : "new name"
    }
  }
```

Response Body Errors :

```json
  {
    "errors" : "Name length max 100"
  }
```

## Get User API

Endpoint : GET /api/users/me

Headers :

- Authorization : token

Response Body Success :

```json
  {
    "data" : {
      "username" : "yuta123",
      "name" : "yuta"
    }
  }
```

Response Body Errors :

```json
  {
    "errors" : "Unauthorized"
  }
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
  {
    "data" : "Logout success"
  }
```

Response Body Error :

```json
  {
    "errors" : "Unauthorized"
  }
```
