class c1 {

    constructor() {
        this.c = 'constructed';
    }

    dothis() {
        this.a = 'hello';
    }

    dothat() {
        this.b = 'goodbye';
    }

    static doother() {
        return 'this was static';
    }

}

var c = new c1();
c.dothis();
c.dothat();
console.log(JSON.stringify(c));
console.log(c1.doother());

