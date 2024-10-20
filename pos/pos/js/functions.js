//Modelo estatico para productos

const productos = [
    ["1", "Tortillas", 20.50, "Sin descripcion"],
    ["2", "Pan", 15.50, "Sin descripcion"],
    ["3", "Leche", 15.00, "Sin descripcion"],
    ["4", "Huevos", 20.00, "Sin descripcion"],
    ["5", "Azucar", 15.50, "Sin descripcion"],
    ["6", "Sal", 15.50, "Sin descripcion"],
    ["7", "Aceite", 20.00, "Sin descripcion"],
    ["8", "Frijol", 15.00, "Sin descripcion"],
    ["9", "Arroz", 15.50, "Sin descripcion"],
    ["10", "Sopa", 20.50, "Sin descripcion"],
    ["11", "Atun", 15.00, "Sin descripcion"],
    ["12", "Cereal", 15.00, "Sin descripcion"],
    ["13", "Galletas", 20.50, "Sin descripcion"],
    ["14", "Cafe", 15.50, "Sin descripcion"],
    ["15", "Refresco", 15.00, "Sin descripcion"],
    ["16", "Agua", 20.00, "Sin descripcion"],
    ["17", "Jabon", 15.50, "Sin descripcion"],
    ["18", "Shampoo", 15.50, "Sin descripcion"],
    ["19", "Crema", 20.00, "Sin descripcion"],
    ["20", "Pasta", 15.00, "Sin descripcion"],
    ["21", "Cepillo de dientes", 15.50, "Sin descripcion"],
    ["22", "Papel higienico", 20.50, "Sin descripcion"],
    ["23", "Toallas femeninas", 15.00, "Sin descripcion"],
    ["24", "Pañales", 15.00, "Sin descripcion"],
    ["25", "Cerveza", 20.25, "Sin descripcion"],
    ["26", "Vino", 15.25, "Sin descripcion"],
    ["27", "Whisky", 15.75, "Sin descripcion"],
    ["28", "Vodka", 20.75, "Sin descripcion"],
    ["29", "Tequila", 15.15, "Sin descripcion"],
    ["30", "Ron", 15.30, "Sin descripcion"]
];

var total = 0.00;

function buscarproducto(event){

    //alert(event.keyCode);
    //Borrar ultimo producto
    if (event.keyCode == 27) {
        var tabla = document.getElementById("tproductos");
        total -= parseFloat(tabla.lastChild.children[3].innerHTML);
        document.getElementById("total").innerHTML=`$ ${total.toFixed(2)}`;
        tabla.removeChild(tabla.lastChild);
        document.getElementById("feedback").innerHTML="";
        limpiar();
    }
    
    //Buscar producto
    if (event.keyCode ==13) {
        var codigo = document.getElementById("codigo").value;
        var cantidad = 1;
        
        if (codigo.indexOf("*")!= -1){
            cantidad = codigo.split("*")[0];
            codigo = codigo.split("*")[1];
        }

        var control = false;

        for (let i = 0; i < productos.length; i++) {
            if (codigo == productos[i][0]) {
                //alert("buscando"+productos[i][1]);
                var agregar = document.getElementById("tproductos");
                var row = agregar.insertRow();
                var celda1 = row.insertCell(0);
                var celda2 = row.insertCell(1);
                var celda3 = row.insertCell(2);
                var celda4 = row.insertCell(3);

                celda1.innerHTML=cantidad;
                celda1.setAttribute("style", "text-align:center;");

                celda2.innerHTML=productos[i][1];
                celda2.setAttribute("style", "text-align:center;");

                celda3.innerHTML=(productos[i][2]).toFixed(2);
                celda3.setAttribute("style", "text-align:right;");

                total += parseFloat((cantidad*productos[i][2]).toFixed(2));
                document.getElementById("total").innerHTML=`$ ${total.toFixed(2)}`;

                celda4.innerHTML=(cantidad*productos[i][2]).toFixed(2);
                celda4.setAttribute("style", "text-align:right;");
                
                control = true;
                document.getElementById("feedback").innerHTML="";

                break
                
            }
        }

        if (control == false)
        {
            document.getElementById("feedback").innerHTML=`El codigo ${codigo} No se encuentra`;   
        }
        limpiar();

    }
    //Repetir producto
    if(event.keyCode == 82){
        event.preventDefault();
        document.getElementById("feedback").innerHTML="";
        repetirProducto();
    }
}

function limpiar() {
document.getElementById("codigo").focus();
document.getElementById("codigo").value="";
}

function repetirProducto () {

    var tabla = document.getElementById("tproductos");
    if (tabla.rows.length>0) {
        var ultimoProducto = tabla.lastChild;
        var cantidad = parseFloat(ultimoProducto.firstChild.innerHTML);
        var precio = parseFloat(ultimoProducto.childNodes[2].innerHTML);
        //Incrementamos la cantidad
        ultimoProducto.firstChild.innerHTML=++cantidad;
        //actualizamos el total
        var precio = cantidad*precio;
        ultimoProducto.lastChild.innerHTML=total1;
        total += total1;document.getElementById("total").innerHTML=`$ ${total.toFixed(2)}`;
    }
}

function cancelarventa(){

    var cancelacion = confirm("¿Estas seguro de cancelar la venta?");
    if (cancelacion) {

        document.getElementById("tproductos").innerHTML="";
        total = 0;
        document.getElementById("total").innerHTML=`$ 0.00`;
    }
    
    limpiar();

}


