

const apiKey = '63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc'
//https://api.giphy.com/v1/gifs/random?api_key=63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// .then( resp => {
    //Hay una forma mas facil de trabajar con esto , 
    // resp.json().then( resp => console.log(resp))
// })
.then( resp => resp.json())
//desestructurando la respuesta en la promesa 
.then(({data}) => {
    // console.log(data)
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(err => {
    console.log(err)
})