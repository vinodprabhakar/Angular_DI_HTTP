
class profile {
    private name: string;
    protected id: number;
    public desig: string;

    constructor(private _name? : string) {
        this.name = _name;
    }

    get Name() {
        return this.name;
    }
}

class role extends profile {

    constructor() {
        super();
        this.id = 10;
        this.desig = 'A';
        this.name = 'cts';
    }
}

let p = new profile('dhoni');

console.log(p.Name);

p.id = 10;


interface user {
    name: string;
    id: number;
}

let getId = (user1: user) => {
    console.log("User Type" + user1.id);
}

getId({name: 'Rahul', id: 23});


enum list { rcb = 0, csk = 1, mi = 3, kkr = 2 };

console.log(list.kkr);


type numOrArray = number | number[];

let num: numOrArray = 1;
let nArr: numOrArray = [1, 2, 3];
//let nStr: numOrArray = 'app';



let x;

x = true;

x = 'cts';

x = {};
