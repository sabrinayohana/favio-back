import { test } from '@japa/runner'

test.group('Deletar favorito', () => {
  test ('deletar favorito existente',async ({client}) => {
    //deletar favorito com id 1
   const resposta = await client.delete('/favorito/1')
   resposta.assertStatus(200)
  })

  test ('deletar favorito inexistente', )

test ('deletar favorito existente', )
}) 
