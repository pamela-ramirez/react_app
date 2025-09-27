import products from "./products";

function getMockApiData() {
  const promiseProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  return promiseProducts;
}

export function getProductById(idParam){
    const requestProduct = products.find(product => product.id === Number(idParam));

    const promiseProduct = new Promise ( (resolve) =>{
        setTimeout(() => {
            console.log("devolviendo DatabaseIcon...")
            resolve(requestProduct)
        }, 2000);
    })

    return promiseProduct;
}

export function getProductsByCategory(catParam){
    const requestCategory = products.filter(product => product.category === catParam);

    const promiseCategory = new Promise ( (resolve) =>{
        setTimeout(() => {
            console.log("devolviendo DatabaseIcon...")
            resolve(requestCategory)
        }, 2000);
    })

    return promiseCategory;
}


export default getMockApiData;
