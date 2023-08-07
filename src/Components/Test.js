import React from "react";
import { Box, Typography, styled } from "@mui/material";

const CustomizedTypography = styled(Typography)`
  color: #ffd966;
  :hover {
    background: #f44e1a;
    color: blue;
  }
`;
const Test = () => {
  return (
    <Box>
      <CustomizedTypography>India</CustomizedTypography>
    </Box>
  );
};

export default Test;
