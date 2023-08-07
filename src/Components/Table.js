import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function createData(Contributors, Closed, Reviewed, Score) {
  return { Contributors, Closed, Reviewed, Score };
}

const rows = [
  createData("Srinivas", 68, 68, 987),
  createData("Tom", 48, 48, 783),
  createData("Nawaz", 42, 42, 682),
  createData("Noah", 34, 34, 500),
  createData("Sera", 24, 24, 452),
];
const CustomizedTableContainer = styled(TableContainer)`
  box-shadow: none;
  border-radius: 0px;
`;

const TableHeadersStyle = {
  color: "#B5B5B5",
  fontweight: "500",
  textAlign: "center",
  "&.MuiTableCell-root": { borderBottom: "none" },
};

const TableRowStyle = {
  color: "#35155D",
  textAlign: "center",
  "&.MuiTableCell-root": { borderBottom: "none", fontWeight: 500 },
};

const TableScoreStyle = {
  color: "#7141DC",
  "&.MuiTableCell-root": {
    borderBottom: "none",
    fontWeight: 500,
    textAlign: "center",
  },
};
export default function TableData() {
  return (
    <CustomizedTableContainer component={Paper}>
      <Table
        sx={{ minWidth: 360, height: 280 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={TableHeadersStyle}>Contributors</TableCell>
            <TableCell sx={TableHeadersStyle} align="right">
              Closed
            </TableCell>
            <TableCell sx={TableHeadersStyle} align="right">
              Reviewed
            </TableCell>
            <TableCell sx={TableHeadersStyle} align="right">
              Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&.MuiTableRow-root": { borderBottom: "none" } }}
            >
              <TableCell component="th" scope="row" sx={TableRowStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <AccountCircleOutlinedIcon
                    sx={{ marginRight: "10px", color: "#ffc107" }}
                  />{" "}
                  <span>{row.Contributors}</span>
                </div>
              </TableCell>
              <TableCell sx={TableRowStyle} align="right">
                {row.Closed}
              </TableCell>
              <TableCell sx={TableRowStyle} align="right">
                {row.Reviewed}
              </TableCell>
              <TableCell sx={TableScoreStyle} align="right">
                {row.Score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomizedTableContainer>
  );
}
