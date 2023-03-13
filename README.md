# JSON Schema Validator

Playing around with JSON Schema, Ajv JSON schema validator and Postman.

## Install dependencies
````
npm install
````

## Start the web server
````
npm start
````

## How to use it

1. Create a POST request using Postman to the following address:

````
http://localhost:3000/jsonSchema
````

2. Inside the Body of the request add one of the two files in the json folder inside this project.

### For example:
`````
{
    "nombrePelicula": "Avatar: The Way of Water",
    "estreno": 2022,
    "generos": ["accion","aventura","drama","fantasia","ciencia ficcion","thriller"],
    "duracion" : "192 minutos",
    "clasificacion" : "PG-13",
    "director": "James Cameron"  
}
`````

3. Hit send and check if the JSON is valid or not (also you can check it with the status code of the request). 



