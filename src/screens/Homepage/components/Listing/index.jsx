import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  AvataarRow,
  TitleContainer,
  Title,
  TableWrapper,
  TableCellComponent,
  BitBadge,
  FilterContainer,
  FilterWrapper,
  CustBtnContainer,
} from "./Listing.styled.js";
import { data } from "./data";
import { Avatar, Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import SearchFilter from "./searchFilter.js";
import { ExpandMore } from "@mui/icons-material"

const Listing = () => {
  return (
    <>
      <TableWrapper>
        <FilterContainer>
          <FilterWrapper container>
            <Grid item xs={12}>
              <Grid container className='search-filter-container' spacing={1}>
                <SearchFilter />
                <CustBtnContainer item>
                  <Button
                    sx={{ backgroundColor: "#9DBC13", color: "white", height: "41px", borderRadius: "10px" }}
                    variant="contained" endIcon={<ExpandMore />}
                  >
                    DRC TOP 24h
                  </Button>
                </CustBtnContainer>
              </Grid>
            </Grid>
          </FilterWrapper>
        </FilterContainer>

        <Container>
          <TableContainer component={Paper} sx={{ background: "black" }} className="table-container">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ borderBottom: "0.5px solid gray" }}>
                <TableRow>
                  <TableCellComponent>TICKER</TableCellComponent>
                  <TableCellComponent align="center">
                    MARKET CAP
                  </TableCellComponent>
                  <TableCellComponent align="center">
                    7D CHANGE
                  </TableCellComponent>
                  <TableCellComponent align="center">
                    7D VOLUME
                  </TableCellComponent>
                  <TableCellComponent align="center">OWNERS</TableCellComponent>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  const isPositiveTrend = row.sevenDChange % 2 === 0;
                  return (
                    <TableRow key={row.id} sx={{ border: 0 }}>
                      <TableCellComponent component="th" scope="row">
                        <AvataarRow>
                          <Avatar alt="Remy Sharp" src={row.avataar} />
                          <TitleContainer>
                            <Title>{row.first_name}</Title>
                            <p>{`PRICE $${row.price}`}</p>
                          </TitleContainer>
                        </AvataarRow>
                      </TableCellComponent>
                      <TableCellComponent align="center">{`$${row.marketCap.toLocaleString(
                        "en"
                      )}`}</TableCellComponent>
                      <TableCellComponent
                        sx={{
                          color: isPositiveTrend ? "green" : "red",
                          fontSize: "12px",
                        }}
                        align="center"
                      >{`${isPositiveTrend ? "+" : "-"}${row.sevenDChange
                        }%`}</TableCellComponent>
                      <TableCellComponent align="center">
                        <p sx={{ margin: 0 }}>
                          <BitBadge>β</BitBadge>
                          {row.sevenDVolume}
                        </p>
                      </TableCellComponent>
                      <TableCellComponent align="right">
                        {row.owners}
                      </TableCellComponent>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </TableWrapper>
    </>
  );
};

export default Listing;

