export interface Category {
    usertype: {
        usertype: string;
    };
    category: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: Category;
}

export interface ProductsList {
    responseCode: number;
    products: Product[];
}

export interface Brand {
    id: number;
    brand: string;
}

export interface BrandsList {
    message: string;
    responseCode: number;
    brands: Brand[];
}

export interface SearchProductResponse {
    responseCode: number;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: Category;
}

export interface Category {
    usertype: Usertype;
    category: string;
}

export interface Usertype {
    usertype: string;
}

export interface ErrorResponse {
    responseCode: number;
    message: string;
}

export interface SearchProductCategory {
    usertype: {
        usertype: string;
    };
    category: string;
}

export interface SearchProduct {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: SearchProductCategory;
}

export interface SearchProductResponse {
    responseCode: number;
    products: SearchProduct[];
}

export interface VerifyLoginResponse {
    responseCode: number;
    message: string;
}

