# Pasos para usar las APIS

1. Para persistir un actor de la Api Swapi lanzar la siguiente URL: https://g2jcxkekr3.execute-api.us-east-1.amazonaws.com/dev/actor
   Con los siguientes datos de entrada: { "actorId": "15" } -> Puede ser otro numero. Se usa este solo para el ejemplo

2. Para Listar todos los actores persistidos lanzar la siguiente URL (GET): https://g2jcxkekr3.execute-api.us-east-1.amazonaws.com/dev/
3. Para listar un actor en especifico lanzar la URL con el siguiente formato: https://g2jcxkekr3.execute-api.us-east-1.amazonaws.com/dev/actor/${id}
4. Para correr las pruebas lanzar el siguiente comando en la terminal: npm test