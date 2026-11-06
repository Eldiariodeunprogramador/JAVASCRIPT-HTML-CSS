
// ==========================================
// EL DIARIO DE UN PROGRAMADOR
// PROGRAMADOR: LEONEL OSPINA RESTREPO, leonelospinar@gmail.com | eldiariodeunprogramador@gmail.com
// EJERCICIO 2 - CALCULAR TOTAL DE VENTA
// ==========================================

// Función principal - Creamos la función principal llamada calcular, 
// la cual nos va a permitir hacer las operaciones desde el formulario. 

function calcular() 
{

    // 1. Obtener los valores de los campos HTML
    let producto = document.getElementById("producto").value.trim();

    let cantidad = Number(document.getElementById("cantidad").value);

    let precio = Number(document.getElementById("precio").value);


    // 2. Validar los datos ingresados
    if (producto === "") {
        alert("Por favor, ingrese el nombre del producto.");
        return;
    }

    if (document.getElementById("cantidad").value === "" ||
        cantidad <= 0 || !Number.isFinite(cantidad)) {

        alert("Ingrese una cantidad válida.");
        return;
    }

    if (document.getElementById("precio").value === "" ||
        precio < 0 || !Number.isFinite(precio)) {

        alert("Ingrese un precio válido.");
        return;
    }


    // 3. Definir los porcentajes
    const porcentajeIVA = 0.19;
    const porcentajeDescuento = 0.05;


    // 4. Calcular el subtotal
    let subtotal = cantidad * precio;


    // 5. Calcular el IVA
    let iva = subtotal * porcentajeIVA;


    // 6. Calcular el descuento
    let descuento = 0;

    if (cantidad > 10) {
        descuento = subtotal * porcentajeDescuento;
    }


    // 7. Calcular el total a pagar
    let total = subtotal + iva - descuento;


    // 8. Formatear los valores en pesos colombianos
    let formatoMoneda = valor => valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });


    // 9. Mostrar los resultados en HTML
    document.getElementById("subtotal").value =
        formatoMoneda(subtotal);

    document.getElementById("iva").value =
        formatoMoneda(iva);

    document.getElementById("descuento").value =
        formatoMoneda(descuento);


    //
    document.getElementById("total").value =
        formatoMoneda(total);

}
