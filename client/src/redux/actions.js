import axios from 'axios'
export const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO';
export const AUMENTAR_CANTIDAD = 'AUMENTAR_CANTIDAD';
export const DISMINUIR_CANTIDAD = 'DISMIMUIR_CANTIDAD'
export const ELIMINAR_DEL_CARRITO = 'ELIMINAR_DEL_CARRITO'
export const FINALIZAR_Y_VACIAR = 'FINALIZAR_Y_VACIAR'
export const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS'
export const BUSCAR_PRODUCTOS_POR_NOMBRE = 'BUSCAR_PRODUCTOS_POR_NOMBRE'
export const BUSCAR_PRODUCTOS_POR_CATEGORIA = 'BUSCAR_PRODUCTOS_POR_CATEGORIA'
export const INFO_DEL_NEGOCIO = 'INFO_DEL_NEGOCIO'
export const OBTENER_DATOS_DEL_NEGOCIO = 'OBTENER_DATOS_DEL_NEGOCIO'
export const BUSCAR_UN_PRODUCTO = 'BUSCAR_UN_PRODUCTO'

// ---------------------------------FUNCIONES DEL CARRITO -----------------------------------------------

export const agregarAlCarrito = (obj) => async (dispatch) => {
    let newOb = {
        ...obj,
        cantidad: 1,
        usuarioId: null,
        productoId: obj.id,
        pago: null
    }
    return dispatch({type:AGREGAR_AL_CARRITO, payload: newOb})
}

export const aumentarCantidad = (id) => async (dispatch) => {
    return dispatch({type: AUMENTAR_CANTIDAD, payload: id})
}


export const disminuirCantidad = (id) => async (dispatch) => {
    return dispatch({type: DISMINUIR_CANTIDAD, payload: id})
}

export const eliminarDelCarrito = (id) => async (dispatch) => {
    return dispatch({type: ELIMINAR_DEL_CARRITO, payload: id})
}

export const finalizarCompra = (idUsuario, carrito) => async (dispatch) => {
    carrito.forEach((e) => {
        axios.post('http://localhost:3001/compras', {
            productoId: e.id,
            cantidad: e.cantidad,
            usuarioId: idUsuario
        })
    })
    return dispatch({type: FINALIZAR_Y_VACIAR, payload: idUsuario})
}

//---------------------------------FUNCIONES DE LOS PRODUCTOS MOSTRADOS EN DOM.-------------------------------------

export const obtenerProductos = () => async (dispatch) => {
    axios.get(`http://localhost:3001/productos/paginado`)
    .then((res) => {
        return dispatch({type: OBTENER_PRODUCTOS, payload: res.data})
    })
    .catch((err) => console.log(err))
}

export const buscarProductosPorNombre = (value) => async (dispatch) => {
    axios.get(`http://localhost:3001/productos/buscar?nombre=${value}`)
    .then((res) => {
        return dispatch({type: BUSCAR_PRODUCTOS_POR_NOMBRE, payload: res.data})
    })
    .catch((err) => console.log(err))
}

export const buscarProductosPorCategoria = (value) => async (dispatch) => {
    axios.get(`http://localhost:3001/productos/buscar?categoria=${value}`)
    .then((res) => {
        return dispatch({type: BUSCAR_PRODUCTOS_POR_CATEGORIA, payload: res.data})
    })
    .catch((err) => console.log(err) )
}

export const buscarUnProducto = (id) => async (dispatch) => {
    axios.get(`http://localhost:3001/productos/${id}`)
    .then((res) => {
        return dispatch({type: BUSCAR_UN_PRODUCTO , payload: res.data})
    })
    .catch((err) => console.log(err) )
}
// -------------------------------------DATOS DEL NEGOCIO---------------------------------------

export const obtenerDatosDelNegocio = () => async (dispatch) => {
    axios.get('http://localhost:3001/info')
    .then((res) => dispatch({type: OBTENER_DATOS_DEL_NEGOCIO, payload: res.data}))
    .catch((err) => console.log(err))
}



//-----------------------------FINALIZAR COMPRA----------------------------------------------

