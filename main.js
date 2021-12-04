/**
 * Marco Aldair de Jesus Caceres 18390579
 */
function main() {
    //obtenemos el color hex ingresado
    let color = document.getElementById('colorIngresado').value;
    //nuestra expresion regular para determinar 
    const regex = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i;
    //verificamos que el color hex introducido cumple con el regex
    let validacion = regex.test(color);
    if(validacion){
        //en caso de que sea un color hex válido devolvemos verdadero
        return true;
    }else{
        //en caso que no sea, mandamos una alerta y regresamos falso
        alert('El color introducido no es cumple con las normas de una color hexadecimal');
        return false;
    }
}
