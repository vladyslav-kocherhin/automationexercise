import { APIRequestContext, request } from '@playwright/test';
import { ProductsList, BrandsList, ErrorResponse, SearchProductResponse, VerifyLoginResponse } from 'src/models/automationexercise.dto';

const BASE_URL = 'https://automationexercise.com/';

export class AutomationExerciseService {
    private static async getRequestContext(): Promise<APIRequestContext> {
        return await request.newContext({
            baseURL: BASE_URL
        });
    }

    public static async getProductsList(): Promise<ProductsList> {
        const context = await this.getRequestContext();
        const response = await context.get('/api/productsList');
        return await response.json() as ProductsList;
    }

    public static async postProductsList(): Promise<ErrorResponse> {
        const context = await this.getRequestContext();
        const response = await context.post('/api/productsList', {
            data: {}
        });
        return await response.json();

    }

    public static async getBrandsList(): Promise<BrandsList> {
        const context = await this.getRequestContext();
        const response = await context.get('/api/brandsList');

        return await response.json() as BrandsList;
    }

    public static async putBrandsList(): Promise<BrandsList> {
        const context = await this.getRequestContext();
        const response = await context.put('/api/productsList', {
            data: {}
        });
        return await response.json();
    }

    public static async searchProduct(keyword: string): Promise<{ status: number, body: SearchProductResponse }> {
        const context = await this.getRequestContext();
        const response = await context.post('/api/searchProduct', {
            form: { search_product: keyword }
        });
        const body = await response.json();
        return { status: response.status(), body };
    }

    public static async searchProductWithoutParam(): Promise<ErrorResponse> {
        const context = await this.getRequestContext();
        const response = await context.post('/api/searchProduct', {
            form: {}
        });
        return await response.json();
    }

    public static async verifyLogin(email: string, password: string): Promise<VerifyLoginResponse> {
        const context = await this.getRequestContext();
        const response = await context.post('/api/verifyLogin', {
            form: {
                email,
                password
            }
        });
        return await response.json() as VerifyLoginResponse;
    }

}
