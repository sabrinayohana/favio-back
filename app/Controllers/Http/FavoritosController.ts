import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
<<<<<<< HEAD
let favoritos=[
  {id:1, nome:'Google', 
url:'https://wwww.google.com.br',
 importante:true}
]
export default class FavoritosController {
=======

 let favoritos=[
  {id:1, nome:'Google', 
   url:'https://wwww.google.com.br',
   importante:true}
]
 export default class FavoritosController {
>>>>>>> ab3bf8ed24c21b72c0fc8195fea470cc5d92e0a5

  public async index({}: HttpContextContract) {

   return favoritos 
  }
 
  public async store({request, response}: HttpContextContract) {
    const {nome,url,importante} = request.body()
    const newFavorito={id:favoritos.length+1,nome,url,importante}
    favoritos.push(newFavorito)
    return response.status(201).send(newFavorito)
  }

  public async show({response,params}: HttpContextContract) {
    let favoritoEncontrado=favoritos.find((favorito)=>favorito.id==params.id)
    if favorito ==undefined
      return response.status(404)
    return favoritoEncontrado
  }
  public async update({request,params, response}: HttpContextContract) {
    const {nome,url,importante}=request.body()
    let favoritoEncontrado=favoritos.find((favorito)=>favorito.id==params.id)
    if(!favoritoEncontrado)
    return response.status(404)
  favoritoEncontrado.nome=nome
  favoritoEncontrado.url=url
  favoritoEncontrado.importante=importante

  favoritos[params.id]=favoritoEncontrado
  return response.status(200).send(favoritoEncontrado)

  }
<<<<<<< HEAD

  public async destroy({params, response}: HttpContextContract) {
    let favoritoEncontrado=favoritos.find((favorito)=>favorito.id==params.id)
    if(!favoritoEncontrado)
    return response.status(404)

    favoritos.splice(favoritos.indexOf(favoritoEncontrado),1)
    return response.status(204)

  }

}
=======

  public async destroy({params, response}: HttpContextContract) {
    let favoritoEncontrado=favoritos.find((favorito)=>favorito.id==params.id)
    if(!favoritoEncontrado)
    return response.status(404)

    favoritos.splice(favoritos.indexOf(favoritoEncontrado),1)
    return response.status(204)

  }

}
>>>>>>> ab3bf8ed24c21b72c0fc8195fea470cc5d92e0a5
