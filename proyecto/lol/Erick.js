let saldo = 800.00;
const saldoMaximo = 900.00;

function actualizarSaldo() {
    document.getElementById("saldo").innerText = saldo.toFixed(2);
}

function ingresarMonto() {
let monto = parseFloat(document.getElementById("monto").value);
if (!isNaN(monto) && monto > 0) {
    if (saldo + monto <= saldoMaximo) {
    saldo += monto;
    actualizarSaldo();
    alert("Listo todo para la posada.");
    } else {
    alert("El saldo máximo que tenemos permitido ingresar es $900.00");
    }
} else {
    alert("Ingrese un monto válido.");
}
}

function retirarMonto() {
    let monto = parseFloat(document.getElementById("monto").value);
    if (!isNaN(monto) && monto > 0 && monto <= saldo) {
    saldo -= monto;
    actualizarSaldo();
    alert("Nooo ya te estas quedando sin money.");
} else {
    alert("Ingrese un monto válido o asegúrese de tener suficiente saldo.");
}
}