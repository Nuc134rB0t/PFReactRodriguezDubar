const inventory = [
    {
        id: "1",
        description: "Toma tu café con estilo en esta taza de Super Mario Bros.",
        idCategory: "mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Fmug1.jpg?alt=media&token=4b557067-068a-444f-94b1-8fb507a4e0d7&_gl=1*ynl3p8*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTEzOTAxOS41LjEuMTY5OTE0MDEyOC41OS4wLjA.",
        price: 9,
        stock: 5,
        title: "Taza Super Mario Bros",
    },
    {
        id: "2",
        description: "Disfruta de las aventuras de Mario y Luigi con esta taza.",
        idCategory: "mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Fmug2.jpg?alt=media&token=39f369fa-df3a-4f3a-89ea-1fd3d50ba99f&_gl=1*1p370d2*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTEzOTAxOS41LjEuMTY5OTE0MDE4MC43LjAuMA..",
        price: 12,
        stock: 3,
        title: "Taza Super Mario Bros y Luigi",
    },
    {
        id: "3",
        description: "Reúne a todos los Mario y compañía en tu taza de colección.",
        idCategory: "mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Fmug3.jpg?alt=media&token=bcf621bd-8cac-4e75-ac08-6b09ae7e9937&_gl=1*1nb9pgo*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDUwMi41Ny4wLjA.",
        price: 7,
        stock: 7,
        title: "Taza Multiverso Mario Bros",
    },
    {
        id: "4",
        description: "Añade un toque de Mario a tu espacio con este paraban.",
        idCategory: "dormitorio",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Froom1.jpg?alt=media&token=56dc5c14-8ae3-4666-96e3-9c4be8664c9c&_gl=1*aqu9tr*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDUyNi4zMy4wLjA.",
        price: 6,
        stock: 2,
        title: "Paraban Super Mario Bros",
    },
    {
        id: "5",
        description: "Decora tu habitación con una pintura 3D de Luigi.",
        idCategory: "dormitorio",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Froom2.jpg?alt=media&token=5ff9787a-8d89-46b0-a05c-401433d684a3&_gl=1*1szap6w*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDU2OC42MC4wLjA.",
        price: 8,
        stock: 4,
        title: "Pintura 3D Luigi de Super Mario",
    },
    {
        id: "6",
        description: "Embellece tu hogar con un cuadro de pared de Luigi.",
        idCategory: "dormitorio",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Froom3.jpg?alt=media&token=1616a2d6-fadf-4526-b0a8-a5b83940fc18&_gl=1*15o9uvp*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDU5OC4zMC4wLjA.",
        price: 14,
        stock: 6,
        title: "Cuadro de pared Luigi Super Mario",
    },
    {
        id: "7",
        description: "Viste a tus hijos con esta divertida franela de Mario Bros.",
        idCategory: "franelas",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Ftshirt1.jpg?alt=media&token=3b0d69b9-e78e-42a3-b013-3181261758e8&_gl=1*hdi7h*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDYzMS42MC4wLjA.",
        price: 4,
        stock: 1,
        title: "Franela para niños Mario Bros",
    },
    {
        id: "8",
        description: "Muestra tu amor por Mario con esta franela para adultos.",
        idCategory: "franelas",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Ftshirt2.jpg?alt=media&token=73be4065-de6f-40a1-a5ea-f545554ccb90&_gl=1*q8oei8*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDY1OS4zMi4wLjA.",
        price: 11,
        stock: 5,
        title: "Franela adultos Mario Bros",
    },
    {
        id: "9",
        description: "Viste a tu bebé con esta linda franela de Mario Bros.",
        idCategory: "franelas",
        img: "https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fproducts%2Ftshirt3.jpg?alt=media&token=4f1d5bd8-9dc1-42f5-a87b-da1e0c22fbda&_gl=1*j7iiu3*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTIxNDQ5OS45LjEuMTY5OTIxNDY4Ny40LjAuMA..",
        price: 10,
        stock: 3,
        title: "Franela para bebés Mario Bros",
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inventory);
        }, 100)
    })
}

export const getProduct = (idFound) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = inventory.find(prod=> prod.id === idFound);
            resolve(producto);
        }, 100)
    })
}

export const getProductsCategory = (idFound) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productsCategory = inventory.filter(prod => prod.idCategory === idFound);
            resolve(productsCategory);
        }, 100 )
    })
}