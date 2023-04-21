import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => 'products',
			providesTags: ['Products'],
		}),
		deleteProducts: builder.mutation({
			query: (id) => ({ url: `products/${id}`, method: 'DELETE' }),
			invalidatesTags: ['Products'],
		}),
	}),
})

export const { useGetProductsQuery, useDeleteProductsMutation } = productsApi
