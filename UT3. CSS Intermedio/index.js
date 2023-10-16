const showdown  = require('showdown');
const fs = require('fs');
const path = require('path');

// Ruta del directorio que deseas leer
const directorio = './apuntes';

if (fs.existsSync(directorio)) {
  fs.readdir(directorio, (err, archivos) => {
    if (err) {
      console.error('Error al leer el directorio:', err);
      return;
    }

    archivos.forEach((archivo) => {
      const rutaCompleta = path.join(directorio, archivo);
      
      fs.stat(rutaCompleta, (err, stats) => {
        if (err) {
          console.error('Error al obtener información del archivo:', err);
          return;
        }
        
        if (stats.isFile()) {
          fs.readFile(rutaCompleta, 'utf8', (err, data) => {
            if (err) {
              console.error(`Error al leer el archivo ${archivo}:`, err);
              return;
            }
            
            converter = new showdown.Converter(),
            text      = data,
            html      = converter.makeHtml(text);

            fs.writeFileSync(`./apuntes/html/${archivo}.html`, html.concat(fs.readFileSync("./style-github.css", 'utf8')));
          });
        }
      });
    });
  });
} else {
  console.error('El directorio especificado no existe.');
}
