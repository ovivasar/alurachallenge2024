document.addEventListener("DOMContentLoaded", function() {
    //const textArea = document.querySelector(".presentacion__contenido__texto");
    //const mensaje = document.querySelector(".presentacion__contenido__texto2");
    
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const informacion2 = document.querySelector(".informacion2");
    const originalBackgroundImage = mensaje.style.backgroundImage;

    function btnEncriptar() {
        const strProcesado = encrip_decript(textArea.value,"ENCRIPT");
        mensaje.value = strProcesado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        informacion2.style.display = "none";  // Oculta la etiqueta
    }
    function btnDesencriptar() {
        const strProcesado = encrip_decript(textArea.value,"DECRIPT");
        mensaje.value = strProcesado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        informacion2.style.display = "none";  // Oculta la etiqueta
    }
    function encrip_decript(texto,sOpcion) {
        let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();
        
        // Reemplazar las vocales en un orden específico que evita interferencias
        matrizCode.forEach(([vocal, reemplazo]) => {
            texto = (sOpcion === "ENCRIPT") ? 
                    texto.replaceAll(vocal, reemplazo)
                    :
                    texto.replaceAll(reemplazo,vocal)
            ;
        });
        
        return texto;
    }
    function btnCopiarTexto() {
        //const mensaje = document.querySelector(".presentacion__contenido__texto2");
        const mensaje = document.querySelector(".mensaje");
        const texto = mensaje.value;
    
        navigator.clipboard.writeText(texto).then(() => {
            mensaje.value = '';  // Eliminar el texto del campo de entrada
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto:', err);
            alert('No se pudo copiar el texto');
        });

        informacion2.style.display = "block";  // muestra la etiqueta
        mensaje.style.backgroundImage = originalBackgroundImage;
    }

    window.btnEncriptar = btnEncriptar;
    window.btnDesencriptar = btnDesencriptar;
    window.btnCopiarTexto = btnCopiarTexto;

});











    /*function encriptar(texto) {
        let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();
        for (let i = 0; i < matrizCode.length; i++) {
            if (texto.includes(matrizCode[i][0])) {
                texto = texto.replaceAll(matrizCode[i][0], matrizCode[i][1]);
            }
        }
        return texto;
    }
    function desencriptar(texto) {
        let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();
        for (let i = 0; i < matrizCode.length; i++) {
            if (texto.includes(matrizCode[i][1])) {
                texto = texto.replaceAll(matrizCode[i][1], matrizCode[i][0]);
            }
        }
        return texto;
    }*/
