var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var btnCopiar = document.querySelector(".btnCopiar");
var munheco = document.querySelector(".contenedor-munheco");
var textoMunheco = document.querySelector(".contenedor-textos");
var cajaRecuperado = document.querySelector(".contenedor-resultado");
var resultado = document.querySelector(".texto-resultado");
var btnCopiar = document.querySelector(".btnCopiar");
var textoInput = document.querySelector(".texto-1");
var btnBorrar = document.querySelector(".btnBorrar");
var minusculas = ("abcdefghijklmnopqrstuvwxyz");
var mayusculas = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick =desencriptarTexto;
btnCopiar.onclick = copiar;
btnBorrar.onclick = borrar;

textoInput.focus();

function encriptar(){
        ocultarMunheco();
        resultado.textContent = encriptarTexto();
}
function recuperarTexto(){
    var area = document.querySelector(".texto-1");
    return area.value;
}
function ocultarMunheco(){
    munheco.classList.add("ocultar");
    textoMunheco.classList.add("ocultar");
}

function encriptarTexto(){
    var mensaje = recuperarTexto();
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    resultado.value = mensajeEncriptado;
}
function desencriptarTexto(){
        ocultarMunheco();
        var mensajeEncriptado = recuperarTexto();
        var mensaje = mensajeEncriptado
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ober","o")
        .replaceAll("ai","a")
        .replaceAll("ufat","u");
    
        resultado.value = mensaje;
    }

function copiar(){
    var textoResultado = resultado.value;
    navigator.clipboard.writeText(textoResultado);
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'YEEY! Mensaje Copiado!',
        showConfirmButton: false,
        timer: 1500
      })
}

function borrar(){
    textoInput.value=""; 
    resultado.value="";  
    munheco.classList.remove("ocultar")
    textoMunheco.classList.remove("ocultar");
    textoInput.focus();
}
