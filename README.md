# --- Demdevvy Portfolio ---

## /demdevvyshared 
An a npm package for shared modules between **/next** and **/server**.

### To update
Delete the current **/dist** and **.tar**.
Increment the version of the package.json.
```
cd demdevvyshared
npm run build
npm pack
git add .
git commit -m [new version from package.json]
git push -u origin main
npm publish
```

## /next
The Next.js frontend.
Uses serverless route.ts definitions for most data fetching and other server tasks.

### To run
```
npm run dev
npm run build
npm run start
```

## /server 
The Express.js backend.
For tasks which are easier with Express, such as socket connections and other future features.

### To run
```
npm run start
npm run build
npm run dev
```

