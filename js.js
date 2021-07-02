
function datos(){
    var num1 = parseInt(prompt("Digite un numero"));
    var num2 = parseInt(prompt("Digite otro numero"));
    return num1, num2;
}


function suma(num1,num2){
    return num1+num2;
}

function resta(suma,resta){
    let resta;
    if (suma-resta<=0){
        resta = 0;
    } else{
        resta = suma-resta;
    }
    return resta;
}