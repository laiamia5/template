const express = require('express')
const cors = require('cors')
const rutaProducto = require('./routes/productos')
const rutaCompras = require('./routes/compras')
const rutaInfo = require('./routes/info')
const payRouter = require('./controller/mercadopago')
const {database} = require('./db')
const rutaEnvioOfertas = require('./routes/enviarOfertas')
const rutaPedido = require('./routes/pedido')
const rutaUsuario = require('./routes/usuario')
const path = require('path');

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/productos', rutaProducto)
app.use('/compras', rutaCompras)
app.use('/info', rutaInfo )
app.use('/pagar', payRouter )
app.use('/subscripcion', rutaEnvioOfertas)
app.use('/realizar-pedido', rutaPedido )
app.use('/usuarios', rutaUsuario)
database
.sync({alter: true})
.then(() => {
    app.listen(3001, () => {
      console.log('se esta escuchando todo bien'); 
    });
});