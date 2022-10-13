const products = [
    {
        id: '1',
        name: 'M1 SPACE GREY',
        price: 634.79900,
        category: 'MAC',
        img: '/Images/m1spacegrey.jpeg',
        stock: 10,
        description: 'MacBook Pro 13" Touch Bar M1 256 GB - Gris Espacial (Space Gray) (2020)'
    },
    {
        id: '2',
        name: 'M1 SILVER',
        price: 634.79900,
        category: 'MAC',
        img: '/Images/m1silver.jpeg',
        stock: 9,
        description: 'MacBook Pro 13" Touch Bar M1 256 GB - Gris Espacial (Silver) (2020)'
    },
    {
        id: '3',
        name: 'IPAD',
        price: 284.399,
        category: 'IPAD',
        img: '/Images/ipadpro.jpeg',
        stock: 10,
        description: 'iPad Pro 11" M1 WiFi 128GB - Gris Espacial (Space Gray) (2021)'
    },
    {
        id: '4',
        name: 'IPHONE 13 GREY',
        price: 577.399,
        category: 'IPHONE',
        img: '/Images/iphone13grey.jpeg',
        stock: 10,
        description: 'iPhone 13 Pro 128 GB - Grafito'
    },
    {
        id: '5',
        name: 'IPHONE 13 WHITE',
        price: 577.399,
        category: 'IPHONE',
        img: '/Images/iphonewhite.jpeg',
        stock: 7,
        description: 'iPhone 13 Pro 128 GB - Plateado'
    },
    {
        id: '5',
        name: 'AIRPODS MAX GREEN',
        price: 227.599,
        category: 'AIRPODS',
        img: '/Images/airpodsma.jpeg',
        stock: 10,
        description: 'Apple Airpods Max - Verde'
    },
    {
        id: '6',
        name: 'AIRPODS 3RA GENERACION',
        price: 64.799,
        category: 'AIRPODS',
        img: '/Images/airpodspro.jpeg',
        stock: 10,
        description: 'Apple Airpods (3.ª generación)'
    },
    {
        id: '7',
        name: 'AIRPODS 2DA GENERACION',
        price: 47.999,
        category: 'AIRPODS',
        img: '/Images/airpods2.jpeg',
        stock: 10,
        description: 'Apple Airpods 2 con Estuche de Carga Inalambrica'
    },
    {
        id: '8',
        name: 'APPLE TV 32 GB',
        price: 85.499,
        category: 'APPLE TV',
        img:'/Images/applet32.jpeg',
        stock: 10,
        description: 'Apple TV 32 GB 4K (2021)'
    },
    {
        id: '9',
        name: 'APPLE TV 64 GB',
        price: 94.999,
        category: 'APPLE TV',
        img: '/Images/appletv64.jpeg',
        stock: 10,
        description: 'Apple TV 64 GB 4K (2021)'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

// Retorno una promesa que es un objeto que maneja los estados de una accion. Da 2 funciones, RESOLVE (1er parametro) y REJECT (2do)
// Resuelvo promesa con un valor, en este caso usamos un settimeout para simular el retardo dentro de la promesa, y esa funcion que se ejecuta 1 seg despues, ejecuta Resolve para cambiar el estado de la promesa y devolver el array de productos 