function calcular() {

    // Obtener los valores de los campos
    let horas = document.getElementById("horas").value;
    let valorHora = document.getElementById("valor").value;

    // Validar que los campos no estén vacíos
    if (horas === "" || valorHora === "") {
        alert("Por favor, ingrese las horas trabajadas y el valor por hora.");
        return;
    }

    // Convertir los datos a números
    horas = Number(horas);
    valorHora = Number(valorHora);

    // Validar que las horas no sean cero
    if (horas === 0) {
        alert("No se permiten valores de cero en las horas trabajadas.");
        return;
    }

    // Validar los datos ingresados
    if (!Number.isFinite(horas) || !Number.isFinite(valorHora) ||
        horas < 0 || valorHora < 0) {
        alert("Ingrese valores válidos. Las horas y el valor por hora no pueden ser negativos.");
        return;
    }

    // Calcular el salario
    let salario = horas * valorHora;

    // Formatear el salario en pesos colombianos
    let salarioFormateado = salario.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });

    // Mostrar el resultado en el campo
    document.getElementById("resultado").value = salarioFormateado;

    // Mostrar alerta con el salario a pagar
    alert("El salario que se debe pagar es: " + salarioFormateado);

}