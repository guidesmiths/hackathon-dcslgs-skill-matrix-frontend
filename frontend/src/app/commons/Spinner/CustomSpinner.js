import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const CustomSpinner = styled(CircularProgress)(({ theme }) => ({
  color: theme,
}));

export default CustomSpinner;
