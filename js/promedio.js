
// ==========================================
// EL DIARIO DE UN PROGRAMADOR
// EJERCICIO 3 - PROMEDIO DE NOTAS
// ==========================================

// Función para calcular el promedio
function calcular() {

    // 1. Obtener las notas ingresadas
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    // 2. Validar que los campos no estén vacíos
    if (nota1 === "" || nota2 === "" || nota3 === "") {
        alert("Por favor, ingrese las tres notas.");
        return;
    }

    // 3. Convertir los valores a números
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    // 4. Validar que sean números válidos
    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3)
    ) {
        alert("Ingrese valores numéricos válidos.");
        return;
    }

    // 5. Validar que las notas estén entre 0 y 5
    if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        alert("Las notas deben estar entre 0 y 5.");
        return;
    }

    // 6. Calcular la suma de las tres notas
    let suma = nota1 + nota2 + nota3;

    // 7. Calcular el promedio
    let promedio = suma / 3;

    // 8. Mostrar el resultado con dos decimales
    document.getElementById("promedio").value =
        promedio.toFixed(2);

        if (promedio >= 3.5)
        {
            alert("Felicitaciones has ganado la materia");
            return
        }else
        {
            alert("Lo siento, has perdido la materia, sigue intentando");
        }

}
