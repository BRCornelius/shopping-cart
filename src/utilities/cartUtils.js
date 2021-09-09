export const checkIfExists = (cartProducts, item) => cartProducts.some(element => element.id === item.id)
export const getItemIndex = (cartProducts, item) => cartProducts.some(element => element.id === item.id)
