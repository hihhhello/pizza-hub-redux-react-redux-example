import { Box } from '@mui/material';

import { Center } from '../components';
import { PizzaPreviewCard } from '../components/PizzaPreviewCard';
import { PizzaPreviewCardButtons } from '../features/PizzaPreviewCardButtons';
import { MOCKED_PIZZAS } from '../shared/mocks';

export const HomePage = () => (
  <Center>
    <Box sx={{ display: 'flex', gap: 4 }}>
      {MOCKED_PIZZAS.map((pizza) => (
        <PizzaPreviewCard
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          blockEndElement={<PizzaPreviewCardButtons showCount pizza={pizza} />}
        />
      ))}
    </Box>
  </Center>
);
