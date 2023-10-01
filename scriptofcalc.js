function zerosCal() {
    document.getElementById("xs1").innerText = ("");
    document.getElementById("xs2").innerText = ("");

    let a=0;
    let b=0;
    let c=0;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    console.log("a: "+a);
    console.log("b: "+b);
    console.log("c: "+c);

    if ((a==0) && (b==0) && (c==0)) {
        //It is not function check
        document.getElementById("xs1").innerText = "That is not a function!";
        console.log("That is not a function!");
    } else if (a==0) {
        //Linear function
        let x0 = (-c)/b;
        x0 = x0.toFixed(2);
        document.getElementById("xs1").innerText = ("x0: "+x0);
        console.log("x0: "+x0);
    } else {
        //Quadratic function

        //Delta
        let delta = (b*b)-(4*a*c);
        console.log("Delta: "+delta);

        //Zeros
        if (delta>0) {
            //x1
            let x1 = ((-b)-(Math.sqrt(delta)))/(2*a);
            x1 = x1.toFixed(2);
            document.getElementById("xs1").innerText = ("x1: "+x1);
            console.log("x1: "+x1);
            //x2
            let x2 = ((-b)+(Math.sqrt(delta)))/(2*a);
            x2 = x2.toFixed(2);
            document.getElementById("xs2").innerText = ("x2: "+x2);
            console.log("x2: "+x2);
        } else if (delta==0) {
            //x
            let x = (-b)/(2*a);
            x = x.toFixed(2);
            document.getElementById("xs1").innerText = ("x: "+x);
            console.log("x: "+x);
        } else if (delta<0) {
            //Not exist
            document.getElementById("xs1").innerText = "Zeros do not exist!";
            console.log("Zeros do not exist!");
        }
    }
}
//Script by Oskar Stroinski
//github.com/stroinskioskar
