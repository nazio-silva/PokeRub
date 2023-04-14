import axios from "axios"

export const getDetails = async (url: string) => {

  const response = await axios.get(url)

  const { sprites } = response.data
  const { back_default } = sprites
  
  return  response.data //back_default
  
}