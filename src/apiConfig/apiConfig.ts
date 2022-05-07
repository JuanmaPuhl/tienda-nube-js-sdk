import axios from "axios"
export const createTiendaNubeAPI = ({
  storeId,
  accessToken,
}: {
  storeId: string
  accessToken: string
}) =>
  axios.create({
    baseURL: `https://api.tiendanube.com/v1/${storeId}/`,
    headers: {
      "Content-Type": "application/json",
      Authentication: `bearer ${accessToken}`,
    },
  })
