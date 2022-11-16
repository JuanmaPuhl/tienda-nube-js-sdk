import {
  Category,
  Channels,
  Customer,
  Image,
  Order,
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

export type CreateOrderParameters = {
  params: {
    currency?: string
    language?: string
    gateway: PaymentGateway
    payment_status?: PaymentStatus | "abandoned"
    status?: OrderStatus
    fulfillment_status?: ShippingStatus
    products: OrderProduct[]
    total?: number
    inventory_behavior?: InventoryBehavior
    customer: OrderCustomer
    note?: string
    billing_addres: Address
    shipping_address: ShippingAddress
    shipping_pickup_type: ShippingType
    shipping: ShippingMethod
    shipping_tracking_number?: number
    shipping_cost_customer: number
    shipping_cost_owner?: number
    send_confirmation_email?: boolean
    send_fulfillment_email?: boolean
  }
}

type PaymentGateway =
  | "offline"
  | "mercadopago"
  | "papseguro"
  | "cielo"
  | "moip"
  | "boleto_paghiper"
  | "payu"
  | "todopago"
  | "not-provided"

type InventoryBehavior = "bypass" | "chain"
type ShippingType = "pickup" | "ship"
type ShippingMethod =
  | "branch"
  | "correios"
  | "correo-argentino"
  | "oca-partner-ar"
  | "table"
  | "not-provided"

type OrderCustomer = {
  name: string
  email: string
  phone?: string
  document?: number
}

type Address = {
  first_name: string
  last_name: string
  address: string
  number: number
  floor?: string
  locality?: string
  city: string
  province: string
  zipcode: number
  country: string
  phone?: string
}

type ShippingAddress = Address & {
  customs?: any[]
}

type OrderProduct = {
  variant_id: string
  quantity: number
  price?: number
}

export type UpdateOrderParameters = {
  orderId: string
  params: Partial<CreateOrderParameters>
}

export type CloseOrderParameters = {
  orderId: string
}

export type OpenOrderParameters = {
  orderId: string
}

export type PackOrderParameters = {
  orderId: string
}

export type FulfillOrderParameters = {
  orderId: string
}

export type CancelOrderParameters = {
  orderId: string
}

export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE"
