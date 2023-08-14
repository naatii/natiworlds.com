function validar(){
    
    validarNumero()
    validarEmail()
    validarEdad()
    if (validarNumero() && validarEdad() && validarEdad()){
        document.location.href = "/../index.html"
    }
}
function validarNumero(){
    let numero = document.getElementById("movil").value
    if (numero.match("(^6|^7)[0-9]{8}")){
        console.log (numero+" correcto")   
        return true     
    }
    else{
        alert("Entrada inválida")
    }
    return false
}
function validarEmail(){
    let email = document.getElementById("email").value
    if (email.match( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ )){
        console.log(email+" correcto")
        return true
    }
    else{
        alert("Entrada inválida")
    }
    return false
}
function validarEdad(){
    let edad = document.getElementById("edad").value
    parseInt(edad)
    if(edad>=99){
        alert("Edad inválida")
        return false
    }
    if(edad<=18){
        alert("Edad inválida")
        return false
    }
    else{
        console.log(edad+" correcta")
        return true
    }
}
