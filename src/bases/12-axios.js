//Axios npm  
//Axios tiene varias cosas que el fetch no tiene
// para instalar axios 
// $ npm i axios

import axios from 'axios'

const apiKey = '63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc'
//https://api.giphy.com/v1/gifs/random?api_key=63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc

//esto sirve para crear nueva instancia de axios
const giphyApi = axios.create({
    //no lleva / al afinal 
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
}) 

export default giphyApi

// giphyApi.get('random')
//     .then( resp => {
//         // console.log(resp.data.data)
//         // const data = resp.data.data 
//         // console.log(data.images.original)

//         const { data } = resp.data
//         const { url } = data.images.original
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     })