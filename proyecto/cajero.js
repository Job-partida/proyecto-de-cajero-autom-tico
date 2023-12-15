let Cliente = [
    { Usuario: "Erick", Contrasena: "2121" },
    { Usuario: "Saul", Contrasena: "rita" },
    { Usuario: "Job", Contrasena: "PEPE" }
];

function Usuario1() {
    let input = document.getElementById("Usuario1");
        return input.value.trim();
}

function Contrasena1() {
    let input = document.getElementById("Contrasena1");
    return input.value.trim();
}

function verificarCredenciales() {
    let usuarioIngresado = Usuario1();
    let contrasenaIngresada = Contrasena1();

    if (usuarioIngresado === '' || contrasenaIngresada === '') {
        alert("Por favor, complete ambos campos.");
        return false;
    }

    let usuarioEncontrado = Cliente.find(function(cliente) {
        return cliente.Usuario === usuarioIngresado && cliente.Contrasena === contrasenaIngresada;
    });

    if (usuarioEncontrado) {
        alert("Usuario y contraseña correctos");

        switch (usuarioEncontrado.Usuario) {
            case 'Erick':
                window.location.href = "./lol/Erick.HTML"
                break;
            case 'Saul':
                window.location.href = "./lol/Saul.HTML";
                break;
            case 'Job':
                window.location.href = "./lol/Job.HTML";
                break;
            default:
                alert("Usuario no reconocido");
                break;
        }

        return false; 
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}

inputUsuarioIngresado.value = "";
inputContrasenaIngresada.value = "";