const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
   extended: true
 }));

/**
 * Palindome tests:
 * - Atar a la rata
 * - Anita lava la tina
 * - A cavar a Caravaca
 * - Añora la roña
 */

app.post('/', function (req, res) {
  let { prahse } = req.body

   if(prahse) {

      // Remover espacios y convertir a minusculas.
      prahse = prahse.toLowerCase().replace(/\s/g, '');
     
      // Crear nueva cadena voltenado la cadena original
      let reverseString = prahse 
         .split('') // Convertir en arrays
         .reverse() // Re-ordenar caracteres
         .join(''); // Regresar a string
      
      let isPalindrome = reverseString  === prahse;
     
      res.send({
        palindrome: isPalindrome
      });
   } else {
      res.send({
         error: 'No se ha enviado el parámetro "prahse"'
      });
   }
})
   
   
const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Palindrome App ats http://%s:%s", host, port)
})