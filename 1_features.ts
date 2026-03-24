//////////////////////////////////////////////////////////////////
// Features
//////////////////////////////////////////////////////////////////
/*

What is typescript -
    OOP based superset

    It is a superset of JS which provides static type checking.
    Development time error checking and Type inference.
    definition file with *.d.ts file.
    Supports inheritance completely.

    With TypeScript, we prevent errors at the time of development
    itself, whereas in case of JS, we get errors while
    runing/comiling.

//////////////////////////////////////////////////////////////////
Features-

tsc (the TypeScript compiler)
    "tsc index.ts"
    This compiles your *.ts file into plain *.js file in the same
    directory.

    The target JS version by default is ES3, but that can be
    changed in tsconfig.json file.

    You can also specifiy which directory to output the *.js files
    in, by specifying the "outDir" property.


Emitting with Errors
    Everytime we run tsc myFile.ts, it will compiles/transforms
    into JS file no matter if there are any errors or not.

    To prevent typescript from doing that, we use the flag
    --noEmitOnError

    "tsc --noEmitOnError index.ts"
    This prevents the JS file to not get updated if there are
    errors in the ts file.


Type inference
    We don’t always have to write explicit type annotations.
    In many cases, TypeScript can even just infer (or “figure out”)
    the types for us even if we omit them.

        let msg = "hello there!";
        msg = 123; // error.
    Data type is already infered from definition above.

    Here the typescript has infered the type of msg variable to be
    'string' using its value.


Optional Parameter
    TypeScript supports optional parameters
        func(name: string, age?: string){
            ...
        }
        func(1,2);      // works.
        func(1);        // works
        (Achieved Function Overloading)


Downleveling
    TypeScript has the ability to rewrite code from newer versions
    of ECMAScript to older ones such as ES 3 or ES 5

    This process of moving from a newer“higher version of ECMAScript
    down to an older/lower one is called downleveling.

    We can change the target to any version of JS that we want our
    output files to be.
    e.g.
        "tsc --target es2015 index.ts"


Strictness
    Strict equality checking
    "==" in TypeScript checkes for type as well.

    noImplicitAny -
        When any variable type is implicitly infered as 'any', then
        this flag will emit error.

        When you don’t specify a type, and when TypeScript can’t infer
        it from context, the compiler will typically default to any.

    strictNullChecks -
        For handling null and undefined


Callable and Constructable functions

    In js we instantiate a function and not a class.
    (a class is a Constructor function behind the scenes)
    In a single file, we need to export the class to instantiate it.

*/