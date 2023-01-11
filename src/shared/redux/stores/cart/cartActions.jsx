export const cartItemAdded = (item) => ({
  type: 'CART/ITEM_ADDED',
  payload: item,
});

export const cartItemRemoved = (id) => ({
  type: 'CART/ITEM_REMOVED',
  payload: id,
});

export const cartItemsOrdered = () => ({
  type: 'CART/ITEMS_ORDERED',
});
