import React from "react";
import { Grid } from "@mui/material";
import CustPopover from "../../../../components/common/popover/index.js";
import { SearchBtnWrapper } from "./Listing.styled.js";
import { ArrowDropDown } from "@mui/icons-material";

const SearchFilter = () => {
  return (
    <>
      <Grid item xs={1}>
        <CustPopover title={<SearchBtn />}>
          <div style={{ width: 500, height: "50vh" }}>test</div>
        </CustPopover>
      </Grid>
    </>
  );
};

const SearchBtn = () => {
  return (
    <SearchBtnWrapper container>
      <Grid item xs={12} className="search-text-container">
        <div className="search-text">Search</div>
        <div>
          <ArrowDropDown className="drpdwn-icon" />
        </div>
      </Grid>
    </SearchBtnWrapper>
  );
};
export default SearchFilter;
