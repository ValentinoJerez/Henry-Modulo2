module.exports = {
    entry: "./browser/app.js", //Punto de arranque de mi aplicacion
    output: {
        path: __dirname + "/browser", //Donde se va a guardar mi archivo final generado
        filename: "bundle.js" //El nombre dek archivo final generado
    }
}