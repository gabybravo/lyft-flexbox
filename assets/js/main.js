//Función que hace cambiar el nav a color blanco y agrega botón Sign UP:

function navCambiaColorAlHacerScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
  var limite = 100;
  var nav = document.getElementById('navegador'); 
  var hide = document.getElementById('a-hide');
  var estilo = Array.from(document.getElementsByClassName('estilo-a'));
  var navEspecial = document.getElementById('log-in');
  var logoW = document.getElementById('logo-white');
  var logoP = document.getElementById('logo-pink');


  if (distanciaY > limite) {
    nav.classList.add("menu-dos"); 

    hide.classList.remove("nav-hide");
    hide.classList.add("estilo-a-scroll"); 

    estilo.forEach(function(e){
      e.classList.add("color-a"); 
    });
    navEspecial.classList.remove("nav-especial");
    navEspecial.classList.add("nav-especial-scroll");

    logoP.classList.remove("hide");    
    logoW.classList.add("hide");
    logoP.classList.add("logo");

  } else {
    nav.classList.remove("menu-dos");

    hide.classList.add("nav-hide")

    estilo.forEach(function(e){
      e.classList.remove("color-a"); 
    }); 
    navEspecial.classList.add("nav-especial");

    logoP.classList.add("hide");
    logoW.classList.remove("hide");  
    logoP.classList.remove("logo");
  }
}

window.addEventListener('scroll', navCambiaColorAlHacerScroll);

//Este código es para hacer aparecer los demás campos del formulario al momento de dar click en el input de Phone Number:

var phone = document.getElementById("phone");
phone.addEventListener("click",function(){
  var phoneB  = document.getElementById("phone-2"); 
  var name  = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  var caja = document.getElementById("sign-up");

  phone.classList.add("hide");
  phoneB.classList.remove("hide");
  name.classList.remove("hide");  
  email.classList.remove("hide");  
  city.classList.remove("hide");  
  caja.classList.remove("sign-up");
  caja.classList.add("sign-up-click");

//A partir de aquí comienza la validación de los campos:

  var boton = document.getElementById("btn-click");
  boton.addEventListener("click", function(el){
    var phone = document.getElementById("phone");
    var name  = document.getElementById("name");
    var email = document.getElementById("email");
    var city = document.getElementById("city");

    var phoneB2 = document.getElementsByClassName("input-box")[1];
    var nameB = document.getElementsByClassName("input-box")[2];
    var emailB = document.getElementsByClassName("input-box")[3];
    var cityB = document.getElementsByClassName("input-box")[4];
    var input = document.getElementsByClassName("formulario");

    if (!(/\+569[0-9]{8}/.test(phone.value))) {
      phoneB2.appendChild(crearError());
      input[1].classList.add("input-error");
    }

    if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name.value))) {
      nameB.appendChild(crearError());
      input[2].classList.add("input-error");
    }

    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email.value)) ) {
      emailB.appendChild(crearError());
      input[3].classList.add("input-error");
    }

    if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(city.value))) {
      cityB.appendChild(crearError());
      input[4].classList.add("input-error");
    }

//Esto es para mostrar un span con un simbolo de error al lado, tal como en la página original:

    function mostrarSpan() {
      var span = document.createElement("span");
      span.classList.add("error1");    
      var imgError = document.createElement("img");
      imgError.setAttribute("src","assets/img/error.png");    
      span.appendChild(imgError);    
      return span;
    }

    campoVacio(el); 
    
  })

//Si el campo está vacío entonces se mostrará el simbolo de error:

  function campoVacio(el) {
    document.getElementById("phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    el.removedChild(mostrarSpan());

  }

})