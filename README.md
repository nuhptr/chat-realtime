# Chat Realtime MERN App

Building a Chat Realtime App using the MERN stack. Frontend with React and Backend with Node.js, Express and Socket.io.

## Features

## Getting Started

## Backend Dependencies

-  [express](https://www.npmjs.com/package/express) - bun add express
-  [socket.io](https://www.npmjs.com/package/socket.io) - bun add socket.io
-  [nodemon](https://www.npmjs.com/package/nodemon) - bun add -D nodemon
-  [dotenv](https://www.npmjs.com/package/dotenv) - bun add dotenv
-  [cookie-parser](https://www.npmjs.com/package/cookie-parser) - bun add cookie-parser
-  [bcryptjs](https://www.npmjs.com/package/bcryptjs) - bun add bcryptjs
-  [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs) - bun add -D @types/bcryptjs
-  [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - bun add jsonwebtoken
-  [mongoose](https://www.npmjs.com/package/mongoose) - bun add mongoose
-  [helmet](https://www.npmjs.com/package/helmet) - bun add helmet

### Generate Random String For JWT Secret

```bash
openssl rand -base64 32
```

## Frontend Dependencies

-  [tailwindcss](https://www.npmjs.com/package/tailwindcss) - bun add -D tailwindcss postcss autoprefixer

### DaisyUI

link - https://www.npmjs.com/package/daisyui

```bash
bun add -D daisyui
```

add config to tailwind.config.js

```js
import daisyui from "daisyui"

module.exports = {
   theme: {
      extend: {},
   },
   plugins: [require("daisyui")],
}
```
