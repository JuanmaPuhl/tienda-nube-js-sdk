type AgeGroup = "newborn" | "infant" | "toddler" | "kids" | "adult"
type Gender = "female" | "male" | "unisex"
export type Variant = {
  id: string
  image_id: string
  product_id: string
  price: number
  promotional_price: number
  stock_management: boolean
  stock: number
  weight: number
  width: number
  height: number
  depth: number
  sku: string
  values: string[]
  barcode: string
  mpn: number
  age_group: AgeGroup
  gender: Gender
  created_at: string
  updated_at: string
}
export type Image = {
  id: string
  product_id: string
  src: string
  position: number
  created_at: string
  updated_at: string
  alt: string
}
export type Category = {
  id: string
  name: string
  description: string
  handle: string[]
  parent: string | null
  subcategories: string[]
  google_shopping_category: string | ""
  created_at: string
  updated_at: string
}

export type Product = {
  id: string
  name: string
  description: string
  handle: string[]
  variants: Variant[]
  images: Image[]
  categories: Category[]
  brand: string
  published: boolean
  free_shipping: boolean
  video_url: string
  seo_title: string
  seo_description: string
  attributes: any[]
  tags: string[]
  created_at: string
  updated_at: string
  requires_shipping: boolean
}

export type Order = {
  id: string
  token: string
  number: number
  customer: Customer
  products: OrderProduct[]
  note: string
  owner_note: string
  coupon: Coupon[]
  discount: number
  subtotal: number
  total: number
  total_usd: number
  currency: string
  language: string
  gateway: string
  shipping: string
  shipping_pickup_type: "ship" | "pickup"
  shipping_store_branch_name: string
  shipping_address: string
  shipping_tracking_number: number
  shipping_min_days: number
  shipping_max_days: number
  shipping_cost_owner: number
  shipping_cost_customer: number
  shipping_option: string
  shipping_option_code: string
  shipping_option_reference: string
  shipping_pickup_details: string
  shipping_tracking_url: string
  billing_address: string
  billing_number: number
  billing_floor: string
  billing_locality: string
  billing_zipcode: string
  billing_city: string
  billing_province: string
  billing_country: string
  extra: JSON
  storefront: Channels
  weight: number
  status: OrderStatus
  payment_status: PaymentStatus
  shipping_status: ShippingStatus
  next_action:
    | "noop"
    | "close"
    | "waiting_ipn"
    | "waiting_manual_confirmation"
    | "waiting_packing"
    | "waiting_pickup"
    | "waiting_client_pickup"
    | "waiting_shipment"
  payment_details: PaymentDetails
  shipped_at: string
  paid_at: string
  cancel_reason: string
  created_at: string
  updated_at: string
  client_details: JSON
}

type OrderProduct = {
  product_id: string
  variant_id: string
  name: string
  price: number
  quantity: number
  weight: number
  width: number
  height: number
  depth: number
  free_shipping: boolean
  issues: "unclaimed_stock"
}

export type OrderStatus = "open" | "closed" | "canceled"

type PaymentDetails = {
  method: string
  credit_card_company: string
  installments: number
}
export type ShippingStatus = "unpacked" | "fulfilled" | "unfulfilled"

export type PaymentStatus =
  | "authorized"
  | "pending"
  | "paid"
  | "abandoned"
  | "refunded"
  | "voided"

export type Channels = "store" | "meli" | "api" | "form"
export type Customer = {}
export type Coupon = {}
