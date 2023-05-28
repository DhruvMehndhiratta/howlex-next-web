import { styled } from "@mui/system";
import TableCell from "@mui/material/TableCell";
import { Container, Grid } from "@mui/material";

export const AvataarRow = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const Title = styled("p")`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`;

export const TableWrapper = styled("div")`
  background: black;
  position: relative;

  .table-container{
    padding-top: 10vh;
  }
`;


export const TableCellComponent = styled(TableCell)`
  color: white;
  border-bottom: 0;
`;

export const BitBadge = styled('span')`
  border-radius: 50%;
  font-size: 8px;
  background-color: white;
  color: black;
  padding: 4px;
  margin-right: 6px;
`


// -------------------------Filter Section 



export const FilterWrapper = styled(Grid)`
  background: #1c1c1c;
  border-radius: 10px;
  height: 10vh;
  display: flex;
  border: 2px solid #444444;
  align-items: center;

  position: absolute;
  top: -30px;
`;


export const FilterContainer = styled(Container)`
  position: relative;
  

  .search-filter-container{
    margin-left: 15px;
  }

`;

//---------------- Search Btn 

export const SearchBtnWrapper = styled(Grid)`
  background: #373737;
  border-radius: 10px;
  height: 41px;
  display: flex;
  border: 2px solid #65a6c0;
  align-items: center;

  .search-text-container{
    display: flex;
    padding :0 8px 0 12px;
    align-items: center;
    justify-content: space-between;

    .search-text{
      color:white;
    }
    .drpdwn-icon{
      color:white;
    }
  }

`;


export const CustBtnContainer = styled(Grid)`
  margin-left:10px;

`;