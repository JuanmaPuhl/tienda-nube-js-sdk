import { AxiosInstance } from "axios"
import { createTiendaNubeAPI } from "./apiConfig/apiConfig"
import { Category, Image, Order, Product, Variant } from "./Models/models"

import {
  TiendaNubeClientProps,
  GetProductsParameters,
  GetProductByIdParameters,
  GetProductBySkuParameters,
  CreateProductParameters,
  UpdateProductParameters,
  DeleteProductParameters,
  GetProductImagesParameters,
  GetProductImageByIdParameters,
  CreateProductImageParameters,
  UpdateProductImageParameters,
  DeleteProductImageParameters,
  GetProductVariantsParameters,
  GetProductVariantByIdParameters,
  CreateProductVariantParameters,
  UpdateProductVariantParameters,
  BatchUpdateProductVariantsParameters,
  DeleteProductVariantParameters,
  GetCategoriesParameters,
  GetCategoryByIdParameters,
  CreateCategoryParameters,
  UpdateCategoryParameters,
  DeleteCategoryParameters,
  GetOrdersParameters,
  GetOrderByIdParameters,
  CreateOrderParameters,
  UpdateOrderParameters,
  CloseOrderParameters,
  OpenOrderParameters,
  PackOrderParameters,
  FulfillOrderParameters,
  CancelOrderParameters,
} from "./types"

export class TiendaNubeClient {
  private tiendaNubeAPI: AxiosInstance

  constructor({ accessToken, storeId }: TiendaNubeClientProps) {
    this.tiendaNubeAPI = createTiendaNubeAPI({ storeId, accessToken })
  }

  private noDataReject = (data: any, reject: (reason?: any) => void) => {
    if (!data)
      reject({
        code: 500,
        message: "No data",
        description:
          "Something went wrong and we didn't receive data from server",
      })
  }

  public getProducts = (params?: GetProductsParameters): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Product[]>("/products", params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => reject(error.response.data))
    })
  }

  public getProductById = ({
    id,
    params,
  }: GetProductByIdParameters): Promise<Product> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Product>(`/products/${id}`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getProductBySku = ({
    sku,
    params,
  }: GetProductBySkuParameters): Promise<Product> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Product>(`/products/sku/${sku}`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public createProduct = (
    params: CreateProductParameters
  ): Promise<Product> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Product>("/products", params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public updateProduct = ({
    id,
    params,
  }: UpdateProductParameters): Promise<Product> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Product>(`/products/${id}`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public deleteProduct = ({ id }: DeleteProductParameters): Promise<{}> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .delete<Product>(`/products/${id}`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getProductImages = ({
    id,
    params,
  }: GetProductImagesParameters): Promise<Image[]> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Image[]>(`/products/${id}/images`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getProductImageById = ({
    imageId,
    productId,
    params,
  }: GetProductImageByIdParameters): Promise<Image> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Image>(`/products/${productId}/images/${imageId}`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public createProductImage = ({
    productId,
    params,
  }: CreateProductImageParameters): Promise<Image> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Image>(`/products/${productId}/images`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public updateProductImage = ({
    imageId,
    productId,
    params,
  }: UpdateProductImageParameters): Promise<Image> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Image>(`/products/${productId}/images/${imageId}`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public deleteProductImage = ({
    productId,
    imageId,
  }: DeleteProductImageParameters): Promise<{}> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .delete<Image>(`/products/${productId}/images/${imageId}`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getProductVariants = ({
    productId,
    params,
  }: GetProductVariantsParameters): Promise<Variant[]> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Variant[]>(`/products/${productId}/variants`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getProductVariantById = ({
    productId,
    variantId,
    params,
  }: GetProductVariantByIdParameters): Promise<Variant> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Variant>(`/products/${productId}/variants/${variantId}`, {
          params,
        })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public createProductVariant = ({
    productId,
    params,
  }: CreateProductVariantParameters): Promise<Variant> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Variant>(`/products/${productId}/variants`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public updateProductVariant = ({
    productId,
    variantId,
    params,
  }: UpdateProductVariantParameters): Promise<Variant> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Variant>(`/products/${productId}/variants/${variantId}`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public batchUpdateProductVariants = ({
    productId,
    params,
  }: BatchUpdateProductVariantsParameters) => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Variant[]>(`/products/${productId}/variants`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public deleteProductVariant = ({
    productId,
    variantId,
  }: DeleteProductVariantParameters): Promise<{}> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .delete<Variant>(`/products/${productId}/variants/${variantId}`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getCategories = ({
    params,
  }: GetCategoriesParameters): Promise<Category[]> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Category[]>("/categories", { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getCategoryById = ({
    params,
  }: GetCategoryByIdParameters): Promise<Category> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Category>("/categories/", { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public createCategory = ({
    params,
  }: CreateCategoryParameters): Promise<Category> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Category>("/categories", params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public updateCategory = ({
    categoryId,
    params,
  }: UpdateCategoryParameters): Promise<Category> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Category>(`/categories/${categoryId}`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public deleteCategory = ({
    categoryId,
  }: DeleteCategoryParameters): Promise<{}> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .delete<Category>(`/categories/${categoryId}`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getOrders = ({ params }: GetOrdersParameters): Promise<Order[]> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Order[]>("/orders", { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public getOrderById = ({
    orderId,
    params,
  }: GetOrderByIdParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .get<Order>(`/orders/${orderId}`, { params })
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public createOrder = ({ params }: CreateOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Order>("/orders", params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public updateOrder = ({
    orderId,
    params,
  }: UpdateOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .put<Order>(`/orders/${orderId}`, params)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public closeOrder = ({ orderId }: CloseOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Order>(`/orders/${orderId}/close`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public openOrder = ({ orderId }: OpenOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Order>(`/orders/${orderId}/open`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public packOrder = ({ orderId }: PackOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Order>(`/orders/${orderId}/pack`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public fulfillOrder = ({
    orderId,
  }: FulfillOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI
        .post<Order>(`/orders/${orderId}/fulfill`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  public cancelOrder = ({ orderId }: CancelOrderParameters): Promise<Order> => {
    return new Promise((resolve, reject) => {
      this.tiendaNubeAPI

        .post<Order>(`/orders/${orderId}/cancel`)
        .then(({ data }) => {
          this.noDataReject(data, reject)
          resolve(data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }
}
