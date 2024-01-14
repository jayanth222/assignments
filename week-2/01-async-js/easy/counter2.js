
let c=0;
function fun(){
    console.log(c++);
    setTimeout(fun,1000);
}

fun();