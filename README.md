# 100Ads

Fullstack application with Node/Typescript, Fastify, and React.

## Technologies Used

- Frontend: React, Zustand, React-Query, Typescript
- Backend: Fastify, Typescript, Prisma
- Infrastructure: Docker

## Getting Started

Clone the repository

```bash
$ git clone git@github.com:andresyv/fathom3.git
```

Start the stack with docker-compose

```bash
$ docker-compose up -d --build
```

Seed the database

```bash
$ cd apps/server
$ npx prisma db seed
```

Now you can access http://localhost:3000 and interact with the application.

By default, the following users are created: demo@fathom3.com and demo2@fathom3.com with the password `Demo123#`
