const apiProductsURL = "http://localhost:9000/products";
const apiOrdersURL = "http://localhost:9000/payments";

function filterByCategory(category = null, label = null, cache = false) {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(apiProductsURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const productsData = await response.json();
            let filteredProducts;

            if (category) {
                filteredProducts = productsData.products[category];
            }
            else {
                const allProducts = Object.values(productsData.products).flat();
                filteredProducts = allProducts;
            }

            if (label) {
                filteredProducts = filteredProducts.filter(product => product.label === label);
            }

            resolve(filteredProducts);
        }
        catch (error) {
            console.error(`Error in filtering data: ${error.message}`);
            resolve([]);
        }
    });
}

function getOrders(mobile) {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch(apiOrdersURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const ordersData = await response.json();
            let myOrders;

            if (mobile) {
                myOrders = ordersData.filter((item) => {
                    if(item.mobile == mobile) {
                        return item;
                    }
                });
                resolve(myOrders);
            }
            else {
                resolve([]);
            }
        }
        catch (error) {
            console.error(`Error in filtering data: ${error.message}`);
            resolve([]);
        }
    });
}

export { filterByCategory, getOrders };
