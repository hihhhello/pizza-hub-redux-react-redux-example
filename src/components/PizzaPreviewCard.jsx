import { Typography, Box } from '@mui/material';

export const PizzaPreviewCard = ({ name, price, blockEndElement }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-1px 7px 13px 0px rgba(125,125,125,0.75)',
      px: 4,
      py: 2,
      minWidth: 240,
      borderRadius: 2,
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography>{name}</Typography>

      <Typography>{price}$</Typography>
    </Box>

    {blockEndElement}
  </Box>
);
