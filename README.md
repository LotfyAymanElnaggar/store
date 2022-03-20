# store

### Steps 
- Install Git-bash Or use [cygwin](#https://www.cygwin.com/) for windows to use linux and git commands on windows
- Download & Install node js
- Create new repository
    - Add .gitignore (Node)
    - Add README file
- Git clone https://[github].com/[username]/[projectname]
- npm init -y OR yarn init -y Creates package.json
- Install typescript
    - npm install -g typescript && tsc --init
    OR
    - npm i -D typescript OR yarn add --dev typescript
    - ./node_modules/.bin/tsc --init
- you will notice now that a new .tsconfig file created for you
    // .tsconfig
    {
        "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "lib": ["ES6", "DOM"],
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "noImplicitAny": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
        },
        "include": ["./src"],
        "exclude": ["node_modules", "spec", "build"]
    }

- Create server
    - Install express
        - npm i express morgan dotenv
        - npm i -D @types/express @types/morgan @types/node nodemon ts-node


    "scripts": {
        "dev": "nodemon src/index.ts",
        "start": "nodemon --watch './**/*.ts' --exec 'ts-node' ./src/index.ts", 
        "build": "npx tsc",
        "start:prod": "npm run build && node dist/index.js",
    },