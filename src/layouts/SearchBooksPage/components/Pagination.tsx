import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PagePagination: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "2em",
      }}
    >
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        onChange={handleChange}
        color="primary"
        sx={{
          "& .MuiSvgIcon-root": {
            color: "#0e76a8",
          },
        }}
      />
    </Stack>
  );
};

export default PagePagination;
