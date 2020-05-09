function info(text){
    console.log("INFO: ", text);
    return text;
}

module.exports.error=function error(text){
    console.log("Error: ", text);
    return text;
}

// se puede exportar de la misma manera
module.exports.info= info;
//module.exports={info, error}