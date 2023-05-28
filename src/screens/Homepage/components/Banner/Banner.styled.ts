import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';


export const GridContainer = styled(Grid)`

    .banner-homepage{
        background-image : url(https://wallpaperaccess.com/full/1184361.jpg);
        height: 70vh;
        color: white;
        display: flex;
        align-items: center;
    }

    .top-container{
      margin: 10px 0;
    }
    .mid-container{
      margin: 10px 0;
    }
    .bottom-container{
      margin: 30px 0;
    }
`;

export const PrimaryButton = styled(Button)`
  background-color: #548AA0;
  color: white;
  border-radius: 12px;
`;

