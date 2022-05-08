# tienda-nube-js-sdk

## Introduction:

This is a simple sdk that wraps some requests to Tienda Nube's endpoints. It provides easy configuration and methods to be able to manage the store from any app.
Currently I just deployed the js version, in the future I will deploy the @types package so that you can use it with typescript.

## How to use:

First install the dependency: 

```
npm install juanmaPuhl/tienda-nube-js-sdk
```

or

```
yarn add juanmaPuhl/tienda-nube-js-sdk
```

Then import it and start using it:

```
const tiendaNubeSDK = require("@juanmaPuhl/tienda-nube-js-sdk")
const tiendaNubeClient = new tiendaNubeSDK.TiendaNubeClient({
    accessToken: "<YOUR_ACCESS_TOKEN>",
    storeId: "<YOUR_STORE_ID>"
})
```

Then you can get information using the available methods:

```
tiendaNubeClient.getProducts().then((products) => {
    console.log(products)
})
```

## Currently implemented

- Products
- Categories
- Images
- Orders

## References
For more information you can read the TiendaNube API documentation, [here](https://github.com/TiendaNube/api-docs).