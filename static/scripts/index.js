// fetch get para obtener los paquetes

fetch("http://localhost:3000/paquetes.json")
.then(response => {

    return response.json();
    
})

.then(json => {
    console.log(json)

    
})
