import { AxiosInstance } from "axios"

export const request = ({
  url,
  parameters,
  method,
  apiClient,
  responseType,
}: {
  url: string
  parameters?: any
  method: string
  apiClient: AxiosInstance
  responseType: any
}) => {
  return new Promise((resolve, reject) => {
    apiClient({
      method,
      url,
      data: parameters,
      responseType,
    })
      .then(({ data }) => {
        noDataReject(data, reject)
        resolve(data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

const noDataReject = (data: any, reject: (reason?: any) => void) => {
  if (!data)
    reject({
      code: 500,
      message: "No data",
      description:
        "Something went wrong and we didn't receive data from server",
    })
}
