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
export const BUSCAR_PRODUCTOS_POR_CATEGORIA_Y_NOMBRE = 'BUSCAR_PRODUCTOS_POR_CATEGORIA_Y_NOMBRE'

// ---------------------------------FUNCIONES DEL CARRITO -----------------------------------------------

export const agregarAlCarrito = (obj) => async (dispatch) => {
    let newOb = {
        cantidad: obj.cantidad,
        color: obj.color,
        talle: obj.talle,
        productoId: obj.productoId,
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

export const finalizarYVaciar = (idUsuario, carrito) => async (dispatch) => {
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

export const buscarProductosPorCategoriaYNombre = (categoria, nombre) => async (dispatch) => {
    axios.get(`http://localhost:3001/productos/buscar?categoria=${categoria}&nombre=${nombre}`)
    .then((res) => {
        return dispatch({type: BUSCAR_PRODUCTOS_POR_CATEGORIA_Y_NOMBRE, payload: res.data})
    })
    .catch((err) => console.log(err) )
}
// -------------------------------------DATOS DEL NEGOCIO---------------------------------------

export const obtenerDatosDelNegocio = () => async (dispatch) => {
    axios.get('http://localhost:3001/info')
    .then((res) => dispatch({type: OBTENER_DATOS_DEL_NEGOCIO, payload: res.data}))
    .catch((err) => console.log(err))
}

