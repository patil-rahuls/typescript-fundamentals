Classes

export class A{
    ...
}
const a = new A();

// Class example:-
export class A {
    // properties
    private id: string = '111'; // class variables do not required to be declared using let const or var.
    let username = 'sads'; // ts will give error.

    // method
    getId(){
        return this.id;
    }
};

const a = new A();
console.log(getId());

//  class expression.
export const A =  class {
    // properties
    private id: string = '111'; // class variables do not required to be declared using let const or var.
    let username = 'sads'; // ts will give error.

    // method
    getId(){
        return this.id;
    }
};

whenever we call 'new' a Constructor fn is called inside the class.
#########################################################

export class A{
    roll: string; // class member variable. default visibility is public.
    constructor(id: string){
        this.roll = id; // this binds the parameter 'id' with the objects of this class.
    }
    getId(){
        console.log(this.roll);
        return this.roll;
    }
}
const a = new A('10');
a.getId();
console.log(a.roll);

################
// private prperties can only be accessible inside parent class. And CAN only be returned from parent class.
// to be able to use that in child class, we need to make it protected.


// IMP - INTERFACES ARE NOT TRANSPILED BY TS. js files are created, but they are empty.
// Interfaces are just for compilers checks. It has zero JS runtime impact.
// Members of interfaces are always public. Actually they are not memebers. Just the template. It must be implemented by classes.

Account interface, account model, isnttitution model. etc in finicity. balance, types etc.

export interface A{
    name: string, // observe commas
    rollNo: number,
    show: () => string
}

export class Stu implements A{
    name = "rahul";
    rollNo = 23;
    show(){
        console.log(`Name => ${name} & Roll No.- ${rollNo}`);
    }
}

const r = new Stu();
r.show(); // Outputs - 'Name => rahul & Roll No.- 23'

$############################################
Union types
Enums
Literals
