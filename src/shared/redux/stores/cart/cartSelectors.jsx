export const selectCartItemCountById = (id) => (rootStore) =>
  rootStore.cart.items.find((cartItem) => cartItem.id === id)?.count;

export const selectCartItemsCount = (rootStore) =>
  rootStore.cart.items.reduce(
    (accumulator, cartItem) => accumulator + cartItem.count,
    0,
  );

export const selectCartItems = (rootStore) => rootStore.cart.items;

export const selectCartItemsTotal = (rootStore) =>
  rootStore.cart.items.reduce(
    (accumulator, cartItem) => accumulator + cartItem.count * cartItem.price,
    0,
  );

export const selectIsCartItemsEmpty = (rootStore) =>
  rootStore.cart.items.length === 0;
