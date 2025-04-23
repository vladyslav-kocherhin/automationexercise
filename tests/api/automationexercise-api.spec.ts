import { test, expect } from '@playwright/test';
import { AutomationExerciseService } from '../../src/services/automationexercise.service';
import { ProductsList, BrandsList, SearchProduct } from 'src/models/automationexercise.dto';

test.describe('Automation Exercise API Tests', () => {

    test('API 1: Get All Products List', async () => {
        const list: ProductsList = await AutomationExerciseService.getProductsList();

        expect(list.responseCode).toBe(200);
        expect(list).toHaveProperty('responseCode', 200);
        expect(list).toHaveProperty('products');
        expect(Array.isArray(list.products)).toBe(true);

        list.products.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('brand');
            expect(product).toHaveProperty('category');
            expect(product.category).toHaveProperty('usertype');
            expect(product.category).toHaveProperty('category');
        });
    });

    test('API 2: POST To All Products List', async () => {
        const response = await AutomationExerciseService.postProductsList();

        expect(response.responseCode).toBe(405);
        expect(response.message).toBe('This request method is not supported.');
    });

    test('API 3: Get All Brands List', async () => {
        const list: BrandsList = await AutomationExerciseService.getBrandsList();

        expect(list.responseCode).toBe(200);
        expect(list).toHaveProperty('responseCode', 200);
        expect(list).toHaveProperty('brands');
        expect(Array.isArray(list.brands)).toBe(true);

        list.brands.forEach(brand => {
            expect(brand).toHaveProperty('id');
            expect(typeof brand.id).toBe('number');

            expect(brand).toHaveProperty('brand');
            expect(typeof brand.brand).toBe('string');
        });
    });

    test('API 4: PUT To All Brands List', async () => {
        const response = await AutomationExerciseService.putBrandsList();

        expect(response.responseCode).toBe(405);
        expect(response.message).toBe('This request method is not supported.');
    });

    test('API 5: POST To Search Product', async () => {
        const { status, body } = await AutomationExerciseService.searchProduct('top');

        expect(status).toBe(200);
        expect(body).toHaveProperty('responseCode', 200);
        expect(body).toHaveProperty('products');
        expect(Array.isArray(body.products)).toBe(true);

        body.products.forEach((product: SearchProduct) => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('brand');
            expect(product).toHaveProperty('category');
            expect(product.category).toHaveProperty('usertype');
            expect(product.category).toHaveProperty('category');
        });
    });

    test('API 6: POST To Search Product without search_product parameter', async () => {
        const response = await AutomationExerciseService.searchProductWithoutParam();

        expect(response.responseCode).toBe(400);
        expect(response.message).toBe('Bad request, search_product parameter is missing in POST request.');
    });

});
