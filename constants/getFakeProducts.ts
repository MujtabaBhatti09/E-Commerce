import axios from "axios"

export const getProducts = async (limit?: string) => {
    if (limit) {
        const res = await axios.get(`https://fakestoreapi.in/api/products?limit=${limit}`)
        return res.data.products
    } else {
        const res = await axios.get("https://fakestoreapi.in/api/products")
        return res.data.products
    }
}

export const getCategories = async (type?: string) => {
    if (type) {
        const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${type}`)
        return res.data.categories
    } else {
        const res = await axios.get("https://fakestoreapi.in/api/products/category")
        return res.data.categories
    }

}