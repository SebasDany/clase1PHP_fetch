

var formulario=document.getElementById('formulario');

var respuesta=document.getElementById('respuesta');
var respuesta_tabla=document.getElementById('respuesta_tabla');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("me diste un click")

    var datos= new FormData(formulario);
    console.log(datos)
    console.log(datos.get('email'))
    console.log(datos.get('password'))


    fetch('post.php', {
        method:'POST',
        body:datos

    })
    .then(res => res.json())
    .then(dat=>{
        console.log(dat);
        console.log(typeof(dat));
        var data=JSON.parse(dat)
        console.log(data)
        

        
        if(dat==='error'){
           respuesta.innerHTML=`<div class="alert alert-danger"  role="alert">
           LLene todos los campos
         </div>`
        }else{
            var tabla="<table class=table><thead><tr> <th scope=col>#</th><th scope=col>First</th><th scope=col>Last</th><th scope=col>Handle</th></tr></thead><tbody>"
            
            for (var i = 0; i < 9; i++) {
                
              tabla+=`
              <tr>
                <th scope="row">${i}</th>
                <td>${data['email']}</td>
                <td>${data['password']}</td>
                <td>${data['suma']}</td>
              </tr>
        `};
        
        tabla+=` </tbody>
        </table>`
            respuesta.innerHTML=`<div class="alert alert-primary"  role="alert">
           ${dat}
         </div>`

         respuesta_tabla.innerHTML=tabla;

        }
    })
})
