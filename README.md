# Chat Realtime MERN App

Building a Chat Realtime App using the MERN stack. Frontend with React and Backend with Node.js, Express & Socket.io.

<img width="1440" alt="chat-socketio" src="https://github.com/nuhptr/chat-realtime/assets/50306963/bf26f36d-eb27-4ff6-b2ee-8876d812bf4e">

## Features

## Getting Started

## Backend Dependencies

-  [express](https://www.npmjs.com/package/express) - bun add express
-  [socket.io](https://www.npmjs.com/package/socket.io) - bun add socket.io
-  [nodemon](https://www.npmjs.com/package/nodemon) - bun add -D nodemon
-  [dotenv](https://www.npmjs.com/package/dotenv) - bun add dotenv
-  [cookie-parser](https://www.npmjs.com/package/cookie-parser) - bun add cookie-parser
-  [bcrypt](https://www.npmjs.com/package/bcrypt) - bun add bcrypt
-  [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - bun add jsonwebtoken
-  [mongoose](https://www.npmjs.com/package/mongoose) - bun add mongoose

### Generate Random String For JWT Secret

```bash
openssl rand -base64 32
```

## Frontend Dependencies

-  [tailwindcss](https://www.npmjs.com/package/tailwindcss) - bun add -D tailwindcss postcss autoprefixer
-  [daisyui](https://daisyui.com/) - Tailwind CSS Components
-  [react-icons](https://react-icons.github.io/react-icons/) - Icons for React
-  [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Routing for React
-  [react-hot-toast](https://react-hot-toast.com/) - Toast for react
-  [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
-  [zustand](https://www.npmjs.com/package/zustand) - State management for React
-  [socket.io-client](https://www.npmjs.com/package/socket.io-client) - Socket.io client for React

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
