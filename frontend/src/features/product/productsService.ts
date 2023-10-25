const API_BASE_URL = 'http://localhost:8080/api/product/';

const getAllAsync = async () => { 
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error('Something went wrong when getting all the products');
    return res.json();
}

const getByIdAsync = async (productId: string) => {
    const res = await fetch(API_BASE_URL + productId);
    if (!res.ok) throw new Error('Something went wrong when getting a product');
    return res.json();
}

const addProductAsync = async (productData: string) => {
    const res = await fetch(API_BASE_URL + 'add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    if (!res.ok) throw new Error('Something went wrong when adding a product');
    return res.json();
}

const updateProductAsync = async (productId: string, updatedProductData: string) => {
    const res = await fetch(API_BASE_URL + productId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
    });

    if (!res.ok) throw new Error('Something went wrong when updating a product');
    return res.json();
}

const deleteProductAsync = async (productId: string) => {
    const res = await fetch(API_BASE_URL + productId, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error('Something went wrong when deleting a product');
    return res.json();
}

const productService = {
    getAllAsync,
    getByIdAsync,
    addProductAsync,
    updateProductAsync,
    deleteProductAsync,
};

export default productService;
