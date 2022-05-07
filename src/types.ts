import {
  Category,
  Channels,
  Image,
  OrderStatus,
  PaymentStatus,
  Product,
  ShippingStatus,
  Variant,
} from "./Models/models"

export type TiendaNubeClientProps = {
  accessToken: string
  storeId: string
}

export type GetProductsParameters = {
  params?: {
    since_id?: number
    language?: string
    q?: string
    handle?: string
    category_id?: number
    published?: boolean
    free_shipping?: boolean
    max_stock?: number
    min_stock?: number
    has_promotional_price?: boolean
    has_weight?: boolean
    has_all_dimensions?: boolean
    has_weight_and_all_dimensions?: boolean
    created_at_min?: string
    created_at_max?: string
    updated_at_min?: string
    updated_at_max?: string
    sort_by?: SortCriteria
    page?: number
    per_page?: number
    fields?: string
  }
}

export type SortCriteria =
  | "user"
  | "price-ascending"
  | "price-descending"
  | "alpha-ascending"
  | "alpha-descending"
  | "created_at_ascending"
  | "created_at_descending"
  | "best_selling"

export type GetProductByIdParameters = {
  id: string
  params?: {
    fields?: string
  }
}

export type GetProductBySkuParameters = {
  sku: string
  params?: {
    fields?: string
  }
}

export type CreateProductParameters = {
  params: Partial<Product>
}
export type UpdateProductParameters = {
  id: string
  params: Partial<Product>
}

export type DeleteProductParameters = {
  id: string
}

export type GetProductImagesParameters = {
  id: string
  params?: {
    since_id?: string
    src?: string
    position?: number
    page?: number
    per_page?: number
    fields?: string
  }
}

export type GetProductImageByIdParameters = {
  productId: string
  imageId: string
  params?: {
    fields?: string
  }
}

export type CreateProductImageParameters = {
  productId: string
  params: {
    src: string
    attachment?: string
    filename?: string
    position?: number
  }
}

export type UpdateProductImageParameters = {
  productId: string
  imageId: string
  params: Partial<Image>
}

export type DeleteProductImageParameters = {
  productId: string
  imageId: string
}

export type GetProductVariantsParameters = {
  productId: string
  params?: {
    since_id?: string
    created_at_min?: string
    created_at_max?: string
    updated_at_min?: string
    updated_at_max?: string
    page?: number
    per_page?: number
    fields?: string
  }
}

export type GetProductVariantByIdParameters = {
  productId: string
  variantId: string
  params?: {
    fields?: string
  }
}

export type CreateProductVariantParameters = {
  productId: string
  params: Partial<Variant>
}

export type UpdateProductVariantParameters = {
  productId: string
  variantId: string
  params: Partial<Variant>
}

export type BatchUpdateProductVariantsParameters = {
  productId: string
  params: Partial<Variant>[]
}

export type DeleteProductVariantParameters = {
  productId: string
  variantId: string
}

export type GetCategoriesParameters = {
  params?: {
    since_id?: string
    language?: string
    handle?: string
    parent_id?: string
    created_at_min?: string
    created_at_max?: string
    updated_at_min?: string
    updated_at_max?: string
    page?: string
    per_page?: string
    fields?: string
  }
}

export type GetCategoryByIdParameters = {
  params?: {
    fields?: string
  }
}

export type CreateCategoryParameters = {
  params: Partial<Category>
}

export type UpdateCategoryParameters = {
  categoryId: string
  params: Partial<Category>
}

export type DeleteCategoryParameters = {
  categoryId: string
}

export type GetOrdersParameters = {
  params?: {
    since_id?: string
    status?: "any" | OrderStatus
    channels?: Channels
    payment_status?: PaymentStatus
    shipping_status?: ShippingStatus
    created_at_min?: string
    created_at_max?: string
    updated_at_min?: string
    updated_at_max?: string
    total_min?: number
    total_max?: number
    customer_ids?: string
    page?: number
    per_page?: number
    fields?: string
    q?: string
    app_id?: string
  }
}

export type GetOrderByIdParameters = {
  orderId: string
  params?: {
    fields?: string
  }
}
