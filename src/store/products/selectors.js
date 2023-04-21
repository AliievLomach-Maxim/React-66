export const productsSelector = (state) =>
	[...state.products.products].sort((a, b) => a.price - b.price)
