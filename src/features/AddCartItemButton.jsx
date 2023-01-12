import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

export const AddCartItemButton = ({ item }) => {
  const handleAddCartItem = undefined;

  return (
    <Button variant="contained" onClick={handleAddCartItem}>
      <Add />
    </Button>
  );
};
