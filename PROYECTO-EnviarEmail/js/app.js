



//VARIABLES
const btnEnviar = document.querySelector('#enviar');
const formulario =document.querySelector('#enviar-mail');
//VARIABLES PARA CAMPOS
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() { 
    //Cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp);
    

      //Campos del Formulario

     email.addEventListener('blur', validarFormulario); 
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);
}


//FUNCIONES
function iniciarApp(){ 
    btnEnviar.disabled = true;
    btnEnviar.classlist.add('cursor-not-allowed', 'opacity-50')
}

//Valida el formulario
function validarFormulario(e){ 
    if (e.target.value.lenght > 0){ 
        console.log('Hay algo...')
    }else{ 
        e.target.classList.add('border', 'border-red-500');
    }
         mostrarError();
}

function mostrarError(){ 
    const mensajeError = document.createElement('p');
    mensajeError.textContent ='Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'error');
    formulario.appendChild(mensajeError);

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){ 
        formulario.appendChild(mensajeError);
    }
}