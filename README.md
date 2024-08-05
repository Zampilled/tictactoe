# Tic Tac Toe
### azamolot@tcd.ie submission 

This is my submission for SwEng 2024. 
It is a tic tac toe game with functionality much like a simpler version of [chess.com](chess.com) but for Tic Tac Toe.  
It uses [NextJS](https://nextjs.org/), [Chakra UI](https://v2.chakra-ui.com/), and [Firebase](https://firebase.google.com/).

![Game Screenshot](/docs/game.png)

### Installation 

First install necessary node modules.
```bash
npm i
```

Next update the ./.env.sample file with the necessary firebase values and rename to /.env  .
```.dotenv
/.env.sample
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
```

Next start the project in the development mode.
```bash
npm run dev
```