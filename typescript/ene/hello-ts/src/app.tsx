var text = 'Hello world from ene !!!';
document.getElementById("root").innerHTML = text;
var foo: number = 123;

var foo1 = 3;

var fooapp: string = "Hello from app";

foo++;
console.log(foo);

interface Point2D {
    x: number;
    y: number;
}

interface Point3Di {
    x: number;
    y: number;
    z: number;
}

var point2D: Point2D = { x: 0, y: 0 }
var point3D: Point3Di = { x: 0, y: 0, z: 1 }

function metPoint2d(point: Point2D) {

}

metPoint2d({ x: 0, y: 1 });
metPoint2d(point3D);

var inc = x => x + 1;

console.log("Should be 4 = " + inc(3));

function foothis() {
    console.log(this);
}

class Aaa {
    aaa() {
        return (this);
    }
};

foothis();
let bar = {
    foothis,
    go() { return this }
}
bar.foothis();
var aaa: Aaa = new Aaa();
console.log(bar.go());
console.log(aaa.aaa())
// CLASS ---------------------------------------------------------------------
/**
Class point
*/
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z=z;
    }

    add(point: Point3D) {
      var point2d: Point = super.add(point);
      return new Point3D(point2D.x, point2d.y, this.z+point.z);
    }

}
// STATIC ----------------------------------------------------------------------
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2

// CLASS ACCESS ---------------------------------------------------------------------
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

// EFFECT ON INSTANCES
var fooBase = new FooBase();
fooBase.x; // okay
//fooBase.y; // ERROR : private
//fooBase.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
      super();
        this.x; // okay
        //this.y; // ERROR: private
        this.z; // okay
    }
}

class Foo {
    constructor(public x:number) {
    }

    add( ){
      this.x + 1;
    }
}

module quz {
    class Base {
        public z: number;
        log = () => { console.log('hello world'); }


    }

    class Child extends Base {
        // ERROR : only `public` and `protected` methods of base class are accessible via `super`
        //logWorld() { super.log() };
    }
}


class Person {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
console.log("-------------------------------------------------");
//setTimeout(function() { console.log(person.age); },2000); // 2

// LET -------------------------------------------------------------------------

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index);

const fooo=1;

function foooo(x, y, z) { }
var args = [0, 1, 2];

function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

var tab: number[] = [1,2,3];
console.log(reverse(tab));

var foox = ()=>({
    bar: 123
});
