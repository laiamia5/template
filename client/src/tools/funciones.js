import axios from 'axios'

export const pagarConMercado = (carrito) => {
    axios.post(`http://localhost:3001/pagar`, carrito)
    .then((res) => res.data)
    .catch((err) => alert("Unexpected error"))
}

// ______________________________________CONTACTARSE CON EL NEGOCIO_____________________________________
/* hago un console de la respuesta de la peticion pero quiero que luego de probar que esto si funciona 
hacer una notificacion con toastify y el mensaje que retorne la peticion desde el back
{
	"asunto" : "prueba y cambio de cuenta",
	"mensaje" : "despues de enviar este mensaje se tendria que poder cambiar la cuentita",
	"email" : "insidesolution2023@gmail.com"
}
*/
export const contactarseConElNegocio = (datos) => {
    axios.post('http://localhost:3001/info/contacto', datos)
    .then((res) => console.log('cambiar esta respuesta por el mensaje que envia desde el backend la peticion'))
    .catch((err) => console.log(err))  
}

// _________________________________________QUIERO RECIBIR OFERTAS__________________________________________

// {
// 	"email" : "laffia@gmail.com",
// 	"nombre": "laiva"
// }
export const subscripcion = (datos) => {
    axios.post('http://localhost:3001/subscripcion', datos)
    .then((res) => console.log('cambiar esta respuesta por el mensaje que envia desde el backend la peticion'))
    .catch((err) => console.log(err))  
}


/* funciones para el administrador----------------------------------------------------------------------------
este es el obtejo con  las propiedades que utilizaremos 
para crear nuestros productos
        {
            nombre: null,
            precio: null,
            categoria: null,
            descripcion: null,
            marca: null,
            stock: null,
            img: null,
            cantidad: null,
            colores: null,
            talles: null,
    }
*/ 
// _________________________________________CREAR UN PRODUCTO________________________________________________

export const crearProducto = (datos) => {
    axios.post('http://localhost:3001/productos', datos)
    .then((res) => {
        // res.data.length !== 0 
        // ? "producto creado exitosamente"
        "ocurrio un error, puede ser que falte algun dato o que haya ingresado un dato incorrecto"
    })
    .catch((err) => console.log(err))  
}

// ______________________________________ACTUALIZAR PRODUCTO_________________________________________________
/* ejemplo:
{
	"precio" : 7000
}
recorda cambiar el mensaje de respuesta !!!!
 */
export const actualizarProducto = (id) => {
    axios.put(`http://localhost:3001/productos/actualizar/${id}`, id)
    .then((res) => console.log('cambiar esta respuesta por el mensaje que envia desde el backend la peticion'))
    .catch((err) => console.log(err))  
}

// _________________________________________BORRADO LOGICO_______________________________________________

//pasar id del producto
export const borradoLogico = (id) => {
    axios.put(`http://localhost:3001/productos/descontar-stock/${id}`)
    .then((res) => console.log('cambiar esta respuesta por el mensaje que envia desde el backend la peticion'))
    .catch((err) => console.log(err))  
}

// ________________________________________BUSCAR PRODUCTO_______________________________________________

export const buscarUnProducto = (nombre) => {
    axios.get(`http://localhost:3001/productos/buscar?nombre=${nombre}`)
    .then((res) =>  console.log('cambiar esta respuesta por el mensaje que envia desde el backend la peticion') )
    .catch((err) => console.log(err))
}


    
//_____________________________________CAMBIAR INFO DEL NEGOCIO____________________________________
/*{
	"direccion": null,
	"instagram": "ALGUN INSTAGRAM",
	"facebook": null,
	"numero": null,
	"email": null,
	"avisos": null,
	"descripcion": "cJusto sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sedi."
}*/
//VER COMO HACER PARA QUE EN CASO DE  QUE NO ESTE DECLARADO EL OBJETO EN BACKEND SE USE EL POST Y SI ESTA DECLARADO ENTONCES PUT
export const cambiarDatosDelNegocio = (datos) => {
    axios.put('http://localhost:3001/info', datos)
    .then((res) => alert(res.data)  )
    .catch((err) => console.log(err))
}
    

// ________________________________________REALIZAR COMPRA___________________________________

export const finalizarLaCompra = async (carrito, usuario, datosCompra) => {
    let todosLosPedidos =  []
    let usuarioId = ''
    //primero hacemos los pedidos---------------
    await carrito.forEach((element) => {
        axios.post('http://localhost:3001/realizar-pedido', element)
        .then((res) => todosLosPedidos.push(res.data.id) )
        .catch((err) => console.log(err))
    })

    if(! usuario.id){
        await axios.post('http://localhost:3001/usuarios/signup', usuario)
        .then((res) => usuarioId = res.data.id)
        .catch((err) => console.log(err))
    }else{
        await axios.get(`http://localhost:3001/usuarios/profile/${usuario.id}`)
        .then((res) => usuarioId = res.data.id)
        .catch((err) => console.log(err))
    }

    axios.post('http://localhost:3001/compras', {
        usuarioId: usuarioId,
        pedidos: todosLosPedidos,
        ...datosCompra
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}


/*usuario :
{
	"email": "laiamia@gmail.com",
	"nombre": "laia",
	"apellido": "perez",
	"contraseña": "12345678",
	"dni": 44724942
}

carrito: [ 
		{
        "cantidad": 1,
		"talle": "XS",
		"color": "rosa",
		"productoId": 1,},
        {
        "cantidad": 1,
		"talle": "XS",
		"color": "rosa",
		"productoId": 1,}
]

compra:
    {
        entrega: pendiente,
		pago: pendiente,
		medio_de_pago: mercado pago,
		monto_final: 30000,
        usuarioId: aasdasd45wfrds,
        pedidos: [ 1, 2, 3]
    }

*/