let savedPass = 'martillo';
function logIn() {
    let entrar = false;
    for (let i = 2; i >= 0; i--) {
        let userPass = prompt('Ingresa tu contraseña. Tenes ' + (i + 1) + ' oportunidades.');
        if (userPass === savedPass) {
            alert('LogIn exitoso. Bienvenido a The Tool House.');
            entrar = true;
            break;
        } else {
            alert('Contraseña incorrecta. Te quedan ' + i + ' intentos')
        }
    }
    return entrar;
}

if (logIn()) {
    let precioSierra = 200;
    let stockSierra = 3;
    let compraSierra = 0
    let compraTotal = 0;

    let precioTaladro = 600;
    let stockTaladro = 7;
    let compraTaladro = 0;

    let precioAmoladora = 780;
    let stockAmoladora = 4;
    let compraAmoladora = 0;

    let precioReparacionSimple = 5000;
    let precioReparacionCompleja = 6500;
    let precioAsistecia = 2500;

    let opcion = prompt('Elegí una opción: \n1- Herramientas. \n2 - Servicios. \nPresioná X para finalizar. ');
    let terminar = false;

    while (opcion != 'X' && opcion != 'x' && !terminar) {
        switch (opcion) {
            case '1':
                let tipoDeHerramienta = prompt('1 - Sierra Circular \n2 - Taladro \n3 - Amoladora \nElegi la herramienta necesaria')
                if (tipoDeHerramienta === '1') {
                    let cantidad = prompt('Cantidad disponible: ' + stockSierra + ' Precio: ' + precioSierra + ' \nIngresa la cantidad deseada')
                    if (cantidad > 0 && cantidad <= stockSierra) {
                        stockSierra = stockSierra - cantidad;
                        compraTotal = compraTotal + (cantidad * precioSierra);
                    } else {
                        alert('Cantidad invalida');
                    }
                }
                if (tipoDeHerramienta === '2') {
                    let cantidad = prompt('Cantidad disponible: ' + stockTaladro + ' Precio: ' + precioTaladro + ' \nIngresa la cantidad deseada')
                    if (cantidad > 0 && cantidad <= stockTaladro) {
                        stockTaladro = stockTaladro - cantidad;
                        compraTotal = compraTotal + (cantidad * precioTaladro);
                    } else {
                        alert('Cantidad invalida');
                    }
                }
                if (tipoDeHerramienta === '3') {
                    let cantidad = prompt('Cantidad disponible: ' + stockAmoladora + ' Precio: ' + precioAmoladora + ' \nIngresa la cantidad deseada')
                    if (cantidad > 0 && cantidad <= stockAmoladora) {
                        stockAmoladora = stockAmoladora - cantidad;
                        compraTotal = compraTotal + (cantidad * precioAmoladora);
                    } else {
                        alert('Cantidad invalida');
                    }
                }
                if (tipoDeHerramienta != '1' && tipoDeHerramienta !='2' && tipoDeHerramienta != '3'){
                    alert('Eleccion invalida')
                }
                break;
            case '2':
                let tipoDeServicio = prompt('1 - Reparación \n2 - Asistencia al cliente \nElegi el servicio requerido')
                if (tipoDeServicio === '1') {
                    let tipoDeReparacion = prompt('1 - Reparacion simple ' + precioReparacionSimple + ' 2 - Reparacion compleja: ' + precioReparacionCompleja + ' \nSeleccione el tipo de reparación')
                    if (tipoDeReparacion === '1') {
                        compraTotal = compraTotal + precioReparacionSimple;
                    }
                    if (tipoDeReparacion === '2') {
                        compraTotal = compraTotal + precioReparacionCompleja;
                    }
                    if (tipoDeReparacion != '1' && tipoDeReparacion !='2'){
                        alert('Eleccion invalida')
                    }
                }
                if (tipoDeServicio === '2') {
                    let asistencia = prompt('Costo de asistencia: ' +  precioAsistecia + '\nIngrese SI para aceptar')
                    if (asistencia === 'SI') {
                        compraTotal = compraTotal + precioAsistecia;
                    }
                }
                if (tipoDeServicio != '1' && tipoDeServicio !='2'){
                    alert('Eleccion invalida')
                }
                break;
            case 'OK' :
                alert('Su compra ha sido realizada con exito.')
                terminar = true;
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        if (!terminar) {
            opcion = prompt('Elegí una opción: \n1- Herramientas. \n2 - Servicios. \nCarrito de Compras: $ ' + compraTotal + '\nPresioná X para finalizar o OK para realizar la compra. ');
        }
    }
} else {
    alert('Cuenta bloqueada por seguridad.');
}
alert('Adiós vuelva pronto.');

