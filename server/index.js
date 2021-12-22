const mongoose = require("mongoose")
const app = require("./app")
const port = process.env.PORT || 3977
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config")

/* mongoose.set("useFindAndModify", false) */
/* Cualquier duda ir a los comentarios de la clase 42 */

mongoose.connect(
    //`mongodb://${IP_SERVER}:${PORT_DB}/solucionespp`, 
    `mongodb+srv://petrix:WO7694ZUdMNfpBY0@cluster0.hrqzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    //`mongodb://petrix:WO7694ZUdMNfpBY0@cluster0-shard-00-00.hrqzg.mongodb.net:27017,cluster0-shard-00-01.hrqzg.mongodb.net:27017,cluster0-shard-00-02.hrqzg.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-klpkgq-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err){
        throw err
    }else{
        console.log('Conexión exitosa a MongoDB')
        app.listen(port, () => {
            console.log("########################")
            console.log("####### API REST #######")
            console.log("########################")
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`)
        })
    }
});