//Modelo estatico para productos

const productos = [
    ["1", "Tortillas", 20.57,  "sin descripcion"],
    ["2", "Coca-Cola", 19.23,  "sin descripcion"],
    ["3", "Huevos"   , 3.00,"sin descripcion"],
    ["4", "Harina"   , 19.00,  "sin descripcion"],
    ["5", "Tostadas" , 25.67,  "sin descripcion"],
    ["6", "Leche"    , 18.45,  "sin descripcion"],
    ["7", "Sabritas" , 20.87,  "sin descripcion"],
    ["8", "Pan"      , 15.10,  "sin descripcion"],
    ["9", "Cafe"     , 35.04,  "sin descripcion"],
    ["10", "Azucar"  , 15.78,  "sin descripcion"],
];

var total = 0.00;

function buscarproducto(event){
    if (event.keyCode === 13) {
        var codigo = document.getElementById("codigo").value;
        var cantidad = 1;



        if (codigo.indexOf("*")!= -1) {
            cantidad = codigo.split("*")[0];
            codigo = codigo.split("*")[1];
        }
        for (var i = 0; i < productos.length; i++) {
            if (productos [i][0] === codigo) {
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
                
                total+=parseFloat((cantidad*productos[i][2]).toFixed(2));
                document.getElementById("total").innerHTML=total.toFixed(2);
                

                celda4.innerHTML=(cantidad*productos[i][2]).toFixed(2);
                celda4.setAttribute("style", "text-align:right;");
                
            }
            
        }
    }
}

