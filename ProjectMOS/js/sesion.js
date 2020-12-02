/* =======================================================
    Autor: Ángel Lahuerta Romero
    Empresa: KOKOA Software
    Web: MOS - Sesion.js
    Versión: 1.0
    ============================================================ */

    
//Recopilación de los datos obtenidos
var email=document.forms['form']['email'];
var clave=document.forms['form']['clave'];

//Seleccionamos los códigos de error para cada campo
var email_error=document.getElementById('error_email');
var clave_error=document.getElementById('error_pass');

//Evento para los campos email y clave. Escucha cada letra
//hasta obtener la cantidad exacta dentro de una cadena para ser válidas.
email.addEventListener('textInput',verificarEmail);
clave.addEventListener('textInput',verificarClave);

//Verifica si un usuario es válido evaluando las siguientes reglas:
//      --> Si el correo es menor no será aceptado, y lo notifica visual.
//      --> Si la contraseña es menor no será aceptado, y lo notifica visual.
function validarUsuario(){
    if(email.value.length<9){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }

    if(clave.value.length<6){
        clave.style.border="1px solid red";
        clave_error.style.display="block";
        clave.focus();
        return false;
    }
}

//Función para Evento
//Verifica si el email pasado cumple la regla:
//      --> Si el correo es mayor o igual será aceptado, y lo notifica visual.
function verificarEmail(){
    if(email.value.length>=8){
        email.style.border="1px solid silver";
        email_error.style.display="none";
        return true;
    }
}
//Función para Evento
//Verifica si la clave pasada cumple la regla:
//      --> Si la clave es mayor o igual será aceptado, y lo notifica visual.
function verificarClave(){
    if(clave.value.length>=5){
        clave.style.border="1px solid silver";
        clave_error.style.display="none";
        return true;
    }
}