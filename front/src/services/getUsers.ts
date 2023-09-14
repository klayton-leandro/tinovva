import { api } from 'libs'

export const getUsers = async (users: any) => {
  try{
      const { data } =  await api.get('/users')
      return data
  }catch(error){
    console.log('error', error)
  }
}
