//Retorna un numero menor a 50
function returnNewRandomNumber(){
    return Number( Math.floor((Math.random() * 50) + 1) ) + Number(Math.random().toFixed(2) );
}

function returnNewRandomNumberCantidades(){
    return Number( Math.floor((Math.random() * 100) + 0) );
}

function returnRandomClasification(){
    switch(Number( Math.floor((Math.random() * 6) + 1) )){
        case 1 : 
            return "Pasillo 1";
        case 2 :
            return "Pasillo 2";
        case 3 :
            return "Pasillo 3";
        case 4 : 
            return "Pasillo 4";
        case 5 : 
            return "Pasillo 5";
        case 6 : 
            return "Pasillo 6";
    }
}

//Formateo de la variable en el documento para que los parametros esten disponibles
let productList = [{
    claveId : Number,
    descripcion : String,
    precio : Number,
    clasificacion : String,
    noExistencias : Number,
    minExistencia : Number,
    maxExistencia : Number
}];

productList = [];

//Se agregan los valores
for(let index = 0; index < 80 ; index++){
    productList.push({
        claveId : index,
        descripcion : "TestDescription",
        precio : returnNewRandomNumber(),
        clasificacion : returnRandomClasification(),
        noExistencias : returnNewRandomNumberCantidades(),
        minExistencia : returnNewRandomNumberCantidades(),
        maxExistencia : 100
    });
}
//Se modifican las descripciones para que tenga mas sentido el programa
productList[0].descripcion = "Galletas";
productList[1].descripcion = "Dulces y Chocolates";
productList[2].descripcion = "Botanas y Fruta";
productList[3].descripcion = "Salsas";
productList[4].descripcion = "Aderezos";
productList[5].descripcion = "Vinagre";
productList[6].descripcion = "Harina";
productList[7].descripcion = "Pastas";
productList[8].descripcion = "Pan";
productList[9].descripcion = "Tortillas";
productList[10].descripcion = "Enlatados";
productList[11].descripcion = "Alimentos Instantaneos";
productList[12].descripcion = "Harina y Reposteria";
productList[13].descripcion = "Especias";
productList[14].descripcion = "Sazonadores";
productList[15].descripcion = "Perro Alimentos";
productList[16].descripcion = "Gato Alimentos";
productList[17].descripcion = "Saborizantes";
productList[18].descripcion = "Jarabes";
productList[19].descripcion = "Arroz";
productList[20].descripcion = "Frijol";
productList[21].descripcion = "Semillas";
productList[22].descripcion = "Cafe";
productList[23].descripcion = "Te";
productList[24].descripcion = "Cereales";
productList[25].descripcion = "Barras";
productList[26].descripcion = "Leche";
productList[27].descripcion = "Aceites de Cocina";
productList[28].descripcion = "Mermelada";
productList[29].descripcion = "Miel";
productList[30].descripcion = "Comida Oriental";
productList[31].descripcion = "Ensalada";
productList[32].descripcion = "Chiles";
productList[33].descripcion = "Ajos";
productList[34].descripcion = "Pimientos";
productList[35].descripcion = "Aderezos";
productList[36].descripcion = "Jugos Naturales";
productList[37].descripcion = "Pepinos";
productList[38].descripcion = "Zanahorias";
productList[39].descripcion = "Jicamas";
productList[40].descripcion = "Lechugas";
productList[41].descripcion = "Espinacas";
productList[42].descripcion = "Hojas Verdes";
productList[43].descripcion = "Jitomates";
productList[44].descripcion = "Aguacates";
productList[45].descripcion = "Champiñones";
productList[46].descripcion = "Brocolis";
productList[47].descripcion = "Basicos";
productList[48].descripcion = "Cebollas";
productList[49].descripcion = "Papas";
productList[50].descripcion = "Verduras";
productList[51].descripcion = "Platanos";
productList[52].descripcion = "Papayas";
productList[53].descripcion = "Naranja";
productList[54].descripcion = "Limon";
productList[55].descripcion = "Fresas";
productList[56].descripcion = "Frambuesas";
productList[57].descripcion = "Moras";
productList[58].descripcion = "Manzanas";
productList[59].descripcion = "Peras";
productList[60].descripcion = "Uvas";
productList[61].descripcion = "Duraznos";
productList[62].descripcion = "Ciruelas";
productList[63].descripcion = "Carne de Res";
productList[64].descripcion = "Cortes";
productList[65].descripcion = "Carne de Res empacada";
productList[66].descripcion = "Ternera";
productList[67].descripcion = "Maiz Pozolero";
productList[68].descripcion = "Soya Empacada";
productList[69].descripcion = "Antojitos Empacados";
productList[70].descripcion = "Carne Empacada";
productList[71].descripcion = "Carne para Hamburzueza";
productList[72].descripcion = "Chetos";
productList[73].descripcion = "Doritos";
productList[74].descripcion = "Sabritones";
productList[75].descripcion = "Paquetaxo";
productList[76].descripcion = "Coca Cola";
productList[77].descripcion = "Pepsi";
productList[78].descripcion = "Jabon para manos";
productList[79].descripcion = "Papel de Baño";

console.log(productList.length);

//Con este codigo se genera el archivo JSON donde se guarda la info
var data = JSON.stringify(productList);
var fs = require('fs');
fs.writeFile(
    "DataFile.json", 
    data, 
    (err, result) => {
        if(err){
            console.log('Error escribiendo el archivo', err);
        }else{
            console.log('Datos del arreglo guardados en el archivo DataFile.json en .');
        };
    }
);