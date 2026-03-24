
Types-
    The primitives:
        string
        number (includes float, large numbers any numbers.)
        boolean
        Arrays - e.g. ': number[]'

        any - use it whenever you don’t want a particular value to cause typechecking errors.
        When a value is of type any, you can access any properties of it (which will in turn be of type any),
        call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

            let obj: any = { x: 0 };
            // None of the following lines of code will throw compiler errors.
            // Using `any` disables all further type checking, and it is assumed
            // you know the environment better than TypeScript.
            obj.foo();
            obj();
            obj.bar = 100;
            obj = "hello";
            const n: number = obj;

        noImplicitAny
            When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

        Functions
            // Parameter and return type annotation
            function greet(name: string): string {
            console.log("Hello, " + name.toUpperCase() + "!!");
            }

        Functions Which Return Promises
            // syntax - Promise<type>
            async function getFavoriteNumber(): Promise<number> {
                return 26;
            }

        Anonymous Functions
            const names = ["Alice", "Bob", "Eve"]; // here elements' type infered automatically as 'string'

            // Contextual typing for function - parameter 's' inferred to have type 'string'
            names.forEach(function (s) {
                console.log(s.toUpperCase());
            });

            // Contextual typing also applies to arrow functions
            names.forEach((s) => {
                console.log(s.toUpperCase());
            });

        Object Types
            e.g.
            // The parameter's type annotation is an object type
            function printCoord(pt: { x: number; y: number }) {
                // { x: number; y: number } is a type.
                console.log("The coordinate's x value is " + pt.x);
                console.log("The coordinate's y value is " + pt.y);
            }
            printCoord({ x: 3, y: 7 });

        Optional Properties
            using ? (question mark)

            function printName(obj: { first: string; last?: string }) {
                // ...
            }
            // Both OK
            printName({ first: "Bob" });
            printName({ first: "Alice", last: "Alisson" });

            In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error.
            Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

            function printName(obj: { first: string; last?: string }) {
                // Error - might crash if 'obj.last' wasn't provided!
                console.log(obj.last.toUpperCase());

                // OK
                console.log(obj.last?.toUpperCase());
            }

        Union Types
            type1 | type2

            function printId(id: number | string) {
                console.log("Your ID is: " + id);
            }
            // OK
            printId(101);
            // OK
            printId("202");
            // Error
            printId({ myID: 22342 });

            // Also, methods that are present on both types can be used.

        Literal Types
            apart from string, number, boolean we can have our own literals based types.

            // Example 1
            let x: "Hello" = "Hello";
            // here we created a literal type called 'Hello'

            // OK
            x = "hello";
            // err ...
            x = "howdy";
            Type '"howdy"' is not assignable to type '"hello"'.

            // Example 2
            function printText(s: string, alignment: "left" | "right" | "center") {
                // ...
            }
            printText("Hello, world", "left");
            printText("G'day, mate", "bottom");
            Argument of type '"bottom"' is not assignable to parameter of type '"left" | "right" | "center"'.

            Of course, you can combine these with non-literal types:

            interface Options {
                width: number;
            }
            function configure(x: Options | "auto") {
                // ...
            }
            configure({ width: 100 });
            configure("auto");
            configure("automatic");
            Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

            // IMP -
            declare function handleRequest(url: string, method: "GET" | "POST"): void;

            const req = { url: "https://example.com", method: "GET" };
            handleRequest(req.url, req.method);
            // Error - Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

            WHY?
                Because in the above example 'req.method' is inferred to be 'string' type, and not "GET" type
            Solution to this problem is -
                Using Type assertion -
                    // Change 1:
                    const req = { url: "https://example.com", method: "GET" as "GET" };
                    // OR
                    // Change 2
                    handleRequest(req.url, req.method as "GET");
                    // OR
                    // use const
                    //You can use as const to convert the entire object to be type literals:

                    const req = { url: "https://example.com", method: "GET" } as const;
                    handleRequest(req.url, req.method);
                    'const' ensures that all properties are assigned the 'literal type' instead of a string or number.

    Type Aliases
        type Point = {
            x: number;
            y: number;
        };

        // Exactly the same as the earlier example
        function printCoord(pt: Point) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }

        printCoord({ x: 100, y: 100 });

        More e.g.
            type ID = number | string;

    Interfaces
        An interface declaration is another way to name an object type:

        interface Point {
            x: number;
            y: number;
        }

        function printCoord(pt: Point) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }

        printCoord({ x: 100, y: 100 });

    Differences Between Type Aliases and Interfaces
        "type" cannot be re-opened to add new properties
        vs
        an "interface" is always extendable.

        // Example - Properties can be added to an Interfaces
        interface Window {
            title: string;
        }
        interface Window {
            ts: TypeScriptAPI;
        }

        // A type cannot be changed after being created
        type Window = {
            title: string;
        }

        type Window = {
            ts: TypeScriptAPI;
        }
        // Error: Duplicate identifier 'Window'.

        // Example - Extending an interface.
        interface Animal {
            name: string;
        }

        interface Bear extends Animal {
            honey: boolean;
        }

        const bear = getBear();
        bear.name;
        bear.honey;

        // Example - erxtending a type using intersections '&'
        type Animal = {
            name: string;
        }

        type Bear = Animal & {
            honey: boolean;
        }

        const bear = getBear();
        bear.name;
        bear.honey;


    Non-null Assertion Operator (Postfix !)
        Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

        function liveDangerously(x?: number | null) {
            // No error
            console.log(x!.toFixed());
        }
