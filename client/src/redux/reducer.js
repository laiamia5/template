import {
    AGREGAR_AL_CARRITO,
    AUMENTAR_CANTIDAD,
    BUSCAR_PRODUCTOS_POR_CATEGORIA,
    BUSCAR_PRODUCTOS_POR_NOMBRE,
    DISMINUIR_CANTIDAD,
    ELIMINAR_DEL_CARRITO,
    FINALIZAR_Y_VACIAR,
    OBTENER_DATOS_DEL_NEGOCIO,
    OBTENER_PRODUCTOS,
    BUSCAR_UN_PRODUCTO,
    BUSCAR_PRODUCTOS_POR_CATEGORIA_Y_NOMBRE,
    
} from './actions'

let storage = localStorage.getItem('carrito')
let parseo = JSON.parse(storage) 

const initialState = {
    carrito: parseo ? parseo : [] ,
    productos: [],
    datos_del_negocio: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case  AGREGAR_AL_CARRITO:
            let encontrarProd = state.carrito.find((e) => e.productoId === action.payload.productoId )
            if(!encontrarProd){
                return{
                    ...state,
                    carrito:[...state.carrito, action.payload]
                }
            }else encontrarProd.cantidad ++
        case AUMENTAR_CANTIDAD:
            state.carrito.find((e) => e.productoId == action.payload).cantidad ++
            return{
                ...state,
                carrito: state.carrito
            }
        case DISMINUIR_CANTIDAD:
            let productoCarr = state.carrito.find((e) => e.productoId == action.payload)
            productoCarr.cantidad !== 0 && productoCarr.cantidad --
            return{
                ...state,
                carrito: productoCarr.cantidad === 0 ?  state.carrito.filter((e) => e.productoId !== action.payload) : state.carrito
            }
        case ELIMINAR_DEL_CARRITO:
            return{
                ...state,
                carrito: state.carrito.filter((e) => e.productoId !== action.payload) 
            }
        case FINALIZAR_Y_VACIAR:
            return{
                ...state,
                carrito: []
            }
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos: action.payload
            }
        case BUSCAR_PRODUCTOS_POR_NOMBRE:
            return{
                ...state,
                productos: action.payload
            }
        case BUSCAR_PRODUCTOS_POR_CATEGORIA:
            return{
                ...state,
                productos: action.payload
            }
        case BUSCAR_PRODUCTOS_POR_CATEGORIA_Y_NOMBRE:
            return{
                ...state,
                productos: action.payload
            }
        case OBTENER_DATOS_DEL_NEGOCIO:
            return{
                ...state,
                datos_del_negocio: action.payload
            }
        default :
            return state
        }
}

export default reducer;