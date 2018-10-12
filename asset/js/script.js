/*window.addEventListener('load', ()=>{   
     let box=document.querySelectorAll(".box")
     console.log(box);
});*/
    /*getElementByID*/ 
    var   container = document.getElementById("c1");
    
    container.innerText="Mi genio florese en la masacre";
    container.style.color = "#1cb723";
    container.style.backgroundColor = "#000000";
    container.style.width = "200px";
    container.style.height = "200px";
    container.innerHTML= "<input type=”text” placeholder='escriba su text'>";


    /*ByClassName*/ 
    var containers = document.getElementsByClassName("c2");
    containers = document.querySelectorAll(".c2");
    containers.forEach(element => {
        element.style.backgroundColor = " #009999";
        element.innerText = "hola";
        element.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
        element.style.width = "200px";
        element.style.height = "200px";
    });
    console.log(containers);
    
    /*Eventos*/
    var boton = document.getElementById("btn-click");
    boton.onclick = function(evt) 
    { 
    alert("we can do this every nigth"); 
    }
    var btnCopy = document.getElementById("btnCopy");
    btnCopy.onclick = function(evt) 
    { 
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    }




    /*Preguntas: */
    /*3. Texto dentro del contenedor*/
    /*2. La variable container (coleccion) posee todo el contendor en el html, y podemos manipular sus propiedades desde html*/ 
    /*7.1 Se muestra un input dentro del container */
    /*7.2 La diferencia del innerHTML e innerText es que el HTML, da estructura html, el TEXT muestra el puro texto sin estructura*/
    /*ByClassName*/ 
    /*1. Almacena una coleccion */
    /*2. Cambio de color los contenedores de la clase */
    /*eventos*/
    /**/
