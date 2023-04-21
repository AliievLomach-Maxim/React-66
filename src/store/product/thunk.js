import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createProducts,
	deleteProducts,
	getProducts,
} from '../../services/productsApi'

export const getProductsThunk = createAsyncThunk('products/getAll', () =>
	getProducts()
)

export const createProductsThunk = createAsyncThunk('products/create', (data) =>
	createProducts(data)
)

export const deleteProductsThunk = createAsyncThunk('products/delete', (id) =>
	deleteProducts(id)
)
