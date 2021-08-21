import giphyApi from './bases/12-axios'

const getImage = async () => {
    

    try {
        
        // const resp = await giphyApi.get('random')
        // const { data } = await giphyApi.get('random')
        //cuando se pone el await entre parentesi, el espera a que se ejcute , y luego peudes acceder a .data 
        // const { data } = (await giphyApi.get('random')) 
        const { data } = (await giphyApi.get('random')) .data
        // const {url} = data.data.images.original
        //si se usa los parentesis no hay  necesidad de usar data.data 
        const {url} = data.images.original
        // console.log(resp)
        // console.log(url)
        
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log('Error en la peticion', error)
        throw error
    }

}


getImage()