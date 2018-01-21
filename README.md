# adonis-boilerplate-jwt

Boilerplate/Starter Project for building RESTful APIs using Adonis, MySQL, JWT authentication.

## Setup

Clone the repo then install dependencies :

```bash
npm install
```

Create .env file :

```bash
cp .env.example .env
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Start

Run the following command to start the HTTP server (dev mode).

```bash
npm run dev
```

### API

Register

```bash
  Route.post('/api/v1/auth/register', 'Api/AuthController.register');
```

Sign-In

```bash
  Route.post('api/v1/auth/sign-in', 'Api/AuthController.signIn');
```

Refresh the token

```bash
  Route.post('api/v1/auth/token/refresh', 'Api/AuthController.refreshToken');
```

Get the current user

```bash
  Route.post('api/v1/user/me', 'Api/UserController.getUser');
```
