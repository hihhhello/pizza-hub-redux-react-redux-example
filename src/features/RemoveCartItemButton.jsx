import { Remove } from '@mui/icons-material';
import { Button } from '@mui/material';

export const RemoveCartItemButton = ({ itemId }) => {
  const handleRemoveCartItem = undefined;

  return (
    <Button variant="contained" onClick={handleRemoveCartItem}>
      <Remove />
    </Button>
  );
};
