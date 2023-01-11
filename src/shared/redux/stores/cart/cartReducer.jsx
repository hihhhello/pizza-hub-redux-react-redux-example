const CART_STORE_INITIAL_STATE = { items: [] };

export const cartReducer = (state = CART_STORE_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CART/ITEM_ADDED': {
      const itemToAdd = state.items.find(({ id }) => id === action.payload.id);

      if (!itemToAdd) {
        return {
          ...state,
          items: [{ ...action.payload, count: 1 }, ...state.items],
        };
      }

      return {
        ...state,
        items: [
          { ...itemToAdd, count: itemToAdd.count + 1 },
          ...state.items.filter(({ id }) => id !== itemToAdd.id),
        ],
      };
    }

    case 'CART/ITEM_REMOVED': {
      const itemToRemove = state.items.find(({ id }) => id === action.payload);

      if (!itemToRemove) {
        return state;
      }

      if (itemToRemove.count === 1) {
        return {
          ...state,
          items: state.items.filter(({ id }) => id !== itemToRemove.id),
        };
      }

      return {
        ...state,
        items: [
          { ...itemToRemove, count: itemToRemove.count - 1 },
          ...state.items.filter(({ id }) => id !== itemToRemove.id),
        ],
      };
    }

    case 'CART/ITEMS_ORDERED': {
      return { ...state, items: [] };
    }

    default: {
      return state;
    }
  }
};
