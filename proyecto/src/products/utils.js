const excelGenerator = (products, name, res) => {
    const xl = require('excel4node'); // paquete que ayuda a generar los archivos excel con Node

    products = products.map((product) => {
        let id = product._id.toString();
        delete product._id;
        return {
            id,
            ...product
        }
    })

    // wb: Wordbook    ws: Worksheet
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet('inventario');


    // el primer 'for' se encarga de las filas y el otro de las columnas
    for (let i = 1; i <= products.length; i++) {
        for (let j = 1; j <= Object.values(products[0]).length; j++) {
            let data = Object.values(products[i - 1])[j - 1];
            
            if (typeof data === 'string') {
                ws.cell(i, j).string(data);
            }else{
                ws.cell(i, j).number(data);
            }
        }
    }

    wb.write(`${name}.xlsx`, res);
}

module.exports.ProductsUtils = {
    excelGenerator
}