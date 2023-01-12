import { Box, Typography } from '@mui/material';

import { Center } from '../components';
import { OrderPizzasButton } from '../features/OrderPizzasButton';

export const CartPage = () => {
  const cartItems = undefined;
  const cartItemsTotal = undefined;

  return (
    <Center>
      <Box>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Cart
        </Typography>

        <Box>
          <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
            <Box>
              {cartItems?.map((item) => (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 4,
                  }}
                  key={item.id}
                >
                  <Typography>{item.name}</Typography>

                  <Typography>{`${item.price}$ x ${item.count} = ${
                    item.price * item.count
                  }$`}</Typography>
                </Box>
              ))}
            </Box>

            <Typography sx={{ fontWeight: 600 }}>
              Total: {cartItemsTotal}$
            </Typography>
          </Box>

          <OrderPizzasButton />
        </Box>
      </Box>
    </Center>
  );
};
