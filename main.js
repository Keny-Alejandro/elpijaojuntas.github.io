const TotalProductos = [
    { id: 1, nombre: "Punta de Anca", precio: 30000, presentacion: "", img: "./img/1.jpg" },
    { id: 2, nombre: "Churrasco", precio: 30000, presentacion: "", img: "./img/2.jpg" },
    { id: 3, nombre: "Steak Paraguayo al Carbón", precio: 32000, presentacion: "", img: "./img/3.jpg" },
    { id: 4, nombre: "Steak Paraguayo en Hongos", precio: 34000, presentacion: "", img: "./img/4.jpg" },
    { id: 5, nombre: "Filete de Pollo al Carbón", precio: 26000, presentacion: "", img: "./img/5.jpg" },
    { id: 6, nombre: "Filete de Pollo en Hongos", precio: 30000, presentacion: "", img: "./img/6.jpg" },
    { id: 7, nombre: "Filete de Pollo Gratinado", precio: 30000, presentacion: "", img: "./img/7.jpg" },
    { id: 8, nombre: "Filete de Pollo en Vino", precio: 32000, presentacion: "", img: "./img/8.jpg" },
    { id: 9, nombre: "Lomo de Cerdo al Carbón", precio: 26000, presentacion: "", img: "./img/9.jpg" },
    { id: 10, nombre: "Lomo de Cerdo en Hongos", precio: 32000, presentacion: "", img: "./img/10.jpg" },
    { id: 11, nombre: "Lomo de Cerdo Gratinado", precio: 30000, presentacion: "", img: "./img/11.jpg" },
    { id: 12, nombre: "Lomo de Cerdo en Vino", precio: 32000, presentacion: "", img: "./img/12.jpg" },
    { id: 13, nombre: "Chuletón de Cerdo al Carbón", precio: 29000, presentacion: "", img: "./img/13.jpg" },
    { id: 14, nombre: "Chuletón de Cerdo en Hongos", precio: 28000, presentacion: "", img: "./img/14.jpg" },
    { id: 15, nombre: "Chuletón de Cerdo en Vino", precio: 28000, presentacion: "", img: "./img/15.jpeg" },
    { id: 16, nombre: "Costillas de Cerdo al Carbón", precio: 26000, presentacion: "", img: "./img/16.jpg" },
    { id: 17, nombre: "Costillas de Cerdo en Vino", precio: 32000, presentacion: "", img: "./img/17.jpg" },
    { id: 18, nombre: "Costillas de Cerdo BBQ", precio: 32000, presentacion: "", img: "./img/18.jpg" },
    { id: 19, nombre: "Sobrebarriga al Carbón", precio: 24000, presentacion: "", img: "./img/19.jpg" },
    { id: 20, nombre: "Sobrebarriga a la Criolla", precio: 27000, presentacion: "", img: "./img/20.jpg" },
    { id: 21, nombre: "Sancocho", precio: 20000, presentacion: "", img: "./img/21.jpg" },
    { id: 22, nombre: "Bandeja Paisa", precio: 25000, presentacion: "", img: "./img/22.png" },
    { id: 23, nombre: "Mojarra", precio: 26000, presentacion: "", img: "./img/23.jpg" },
    { id: 24, nombre: "Trucha al Ajillo", precio: 30000, presentacion: "", img: "./img/24.png" },
    { id: 25, nombre: "Trucha en Hongos", precio: 36000, presentacion: "", img: "./img/25.jpg" },
    { id: 26, nombre: "Trucha Gratinada", precio: 32000, presentacion: "", img: "./img/26.jpg" },
    { id: 27, nombre: "Menú Infantil", precio: 20000, presentacion: "", img: "./img/27.jpg" },
    { id: 28, nombre: "Agua de Panela con Queso", precio: 8000, presentacion: "", img: "./img/28.jpg" },
    { id: 29, nombre: "Jarra Agua de Panela", precio: 10000, presentacion: "", img: "./img/29.jpg" },
    { id: 30, nombre: "Jugos Naturales", precio: 6000, presentacion: "", img: "./img/30.jpg" },
    { id: 31, nombre: "Cerveza Nacional", precio: 5000, presentacion: "", img: "./img/31.jpg" },
    { id: 32, nombre: "Corona", precio: 8000, presentacion: "", img: "./img/32.jpg" },
    { id: 33, nombre: "BBC", precio: 8000, presentacion: "", img: "./img/33.png" },
    { id: 34, nombre: "Tres Cordilleras", precio: 8000, presentacion: "", img: "./img/34.jpg" },
    { id: 35, nombre: "Limonada", precio: 8000, presentacion: "", img: "./img/35.jpg" },
    { id: 36, nombre: "Quesadillas de Camarón", precio: 12000, presentacion: "", img: "./img/36.jpg" },
    { id: 37, nombre: "Chicharrón", precio: 10000, presentacion: "", img: "./img/37.jpg" },
    { id: 38, nombre: "Chorizo", precio: 10000, presentacion: "", img: "./img/38.jpg" },
    { id: 39, nombre: "Porción de Papa Salada", precio: 6000, presentacion: "", img: "./img/39.jpg" },
    { id: 40, nombre: "Porción de Papa Frita", precio: 6000, presentacion: "", img: "./img/40.jpg" },
    { id: 41, nombre: "Porción de Papa Rústica", precio: 6000, presentacion: "", img: "./img/41.jpg" },
    { id: 42, nombre: "Porción de Papa Criolla", precio: 6000, presentacion: "", img: "./img/42.jpg" },
    { id: 43, nombre: "Porción de Yuca", precio: 6000, presentacion: "", img: "./img/43.png" },
    { id: 44, nombre: "Porción de Patacón", precio: 6000, presentacion: "", img: "./img/44.jpg" },
];

let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');
let totalElement = document.querySelector('.cart-total-title');

TotalProductos.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item" id="${product.id}">
        <span class="shop-item-title">${product.nombre}</span>
        <img class="shop-item-image" src="${product.img}">
            <div class="shop-item-details">

                <span class="shop-item-price">$${product.precio}</span>
                ${product.presentacion}<br><br><br><br><br>
                <button class="btn btn-primary shop-item-button" type="button">AGREGAR</button>
            </div>
    </div>`
});

let addBtns = document.querySelectorAll('.shop-item-button');
addBtns = [...addBtns];

let cartContainer = document.querySelector('.cart-items');

addBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{

        let actualID = parseInt(event.target.parentNode.parentNode.id);

        let actualProduct = TotalProductos.find(item => item.id == actualID);
        
        if(actualProduct.quantity === undefined){
            actualProduct.quantity = 1;
        }

        let existe = false
        shoppingCartArray.forEach(pisos => {
            if (actualID == pisos.id){
                existe = true
            }
        })

        if(existe){
            actualProduct.quantity++
        }else{
            shoppingCartArray.push(actualProduct)
        }

        drawItems()
        getTotal()
        updateNumberofItems()
        quitarItem()

    });
});

function getTotal(){
    let sumaTotal;
    let total = shoppingCartArray.reduce( (sum, item)=>{
      sumaTotal = sum + item.quantity*item.precio;
      return sumaTotal;
    } , 0);
  
    if (document.getElementById('propinaCheckbox').checked) {
      total *= 1.1; // Añadir un 10% al total si se selecciona la opción de propina
    }
  
    totalElement.innerText = `TOTAL = $${total.toFixed(2)}`;
  }
  
  let propinaCheckbox = document.querySelector('#propinaCheckbox');
  
  propinaCheckbox.addEventListener('change', () => {
    getTotal(); // Llamar a la función getTotal() cada vez que se haga clic en el checkbox de propina
  });
  
function drawItems(){
    cartContainer.innerHTML = '';
    shoppingCartArray.forEach(item => {

    cartContainer.innerHTML += `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${item.img}" width="100" height="100">
            <span class="cart-item-title">${item.nombre}</span>
        </div>
        <span class="cart-price cart-column">$${item.precio}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" min="1" type="number" value="${item.quantity}">
            <button class="btn btn-danger" type="button">QUITAR</button>
        </div>
    </div>`
    });
    quitarItem()
}

function updateNumberofItems(){
let inputNumber = document.querySelectorAll('.cart-quantity-input');
inputNumber = [...inputNumber];

inputNumber.forEach(item => {
    item.addEventListener('click', event=>{

        let actualZapatoNombre = event.target.parentElement.parentElement.childNodes[1].innerText;
        let actualZapatoQuantity = parseInt(event.target.value);
        let actualZapatoObject = shoppingCartArray.find(item => item.nombre == actualZapatoNombre)
        actualZapatoObject.quantity = actualZapatoQuantity;
        getTotal()
    });
});

}

function quitarItem(){
    let removeBtns = document.querySelectorAll('.btn-danger');
    removeBtns = [...removeBtns];
    removeBtns.forEach(btn => {
        btn.addEventListener('click', event=>{
            let actualZapatoNombre = event.target.parentElement.parentElement.childNodes[1].innerText;
            let actualZapatoObject = shoppingCartArray.find(item => item.nombre == actualZapatoNombre);
            shoppingCartArray = shoppingCartArray.filter(item => item != actualZapatoObject)
            drawItems();
            getTotal();
            updateNumberofItems();
        });
    });
}

window.addEventListener("DOMContentLoaded", function() {

// Variable global para llevar el contador de facturas
let numFactura = "";
let facturasGeneradas = 1;

function generarFactura() {
  let factura = "";
  let total = 0;

  // Obtener la fecha actual y generar el número de factura
  const fecha = new Date();
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear().toString();
  numFactura = dia + mes + anio;

  // Encabezado de la factura
  factura += `<h1>Restaurante El Pijao</h1>`;
  factura += `<h2>Factura ${numFactura}-${facturasGeneradas}</h2>`;
  factura += "----------------------------------------------------------";

  // Agregar la fecha y hora actual
  factura += "<h2>Detalles del Pedido</h2>";

  // Lista de productos seleccionados
  shoppingCartArray.forEach((item) => {
    const precioTotal = item.quantity * item.precio;
    factura += `<p>${item.nombre} x ${item.quantity} = $${precioTotal.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
    total += precioTotal;
  });

  // Agregar la propina si se seleccionó
  if (document.getElementById("propinaCheckbox").checked) {
    const propina = total * 0.1;
    factura += `<p>Servicio    (10%) = $${propina.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
    total += propina;
  }

  // Total del pedido
  factura += "----------------------------------------------------------";
  factura += `<h2>Total: $${total.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>`;
  factura += "----------------------------------------------------------";
  factura += "<p>Gracias por tu compra, esperamos verte pronto!</p>";
  factura += "<p>Síguenos en Instagram como @el_pijaoo</p>";
  factura += "----------------------------------------------------------";

  // Incrementar el contador de facturas generadas
  facturasGeneradas++;

  // Crear una ventana emergente y agregar la factura a ella
  const facturaWindow = window.open("", "Factura");
  facturaWindow.document.write(factura);

  // Imprimir la factura
  facturaWindow.print();
}

    const generarFacturaButton = document.getElementById("generarFacturaButton");
  
    generarFacturaButton.addEventListener("click", function() {
      generarFactura();
    });
  
  });
  
  