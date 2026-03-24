//////////////////////////////////////////////////////////////////
// Setup
//////////////////////////////////////////////////////////////////
/*

Install typescript globally.
    "npm install typescript""


In the project folder, run,
    "tsc --init"
    // If this doesn't work, try
    "npx tsc --init"

    "tsconfig.json" file will be created.
    In tsconfig.json *outDir* key will be present.
    "outDir": "./dist", add this change there.

We then create a folder "src" where we will write ts source code.

Run the watcher.
    "tsc --watch"
    This will start watching your changes and will transpile .ts
    file to .js file in the "./dist" folder.
*/