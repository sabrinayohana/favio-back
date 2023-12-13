import { test } from '@japa/runner'

test.group('Criar favoritos', () => {
  test('criar favorito', async ({client})=> {
    const resposta=await client.post('/favoritos').json(
      {nome:'IFRN',
      url:'ww.ifrn.edu.br', 
      importante:false
    })
    resposta.assertStatus(201)
    resposta.assertBodyContains({nome:"IFRN"})
  })
  test('criar favorito com campo faltante' , async ({client})=> {
    const resposta=await client.post('/favoritos').json(
      {nome:'IFRN'})
    resposta.assertStatus(400)
  })
})


