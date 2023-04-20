import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  Box,
  CircularProgress,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import Item from "../../../../components/item/Item";
import { useItems } from "../../../../hooks/useItems";

function ItemGrid({ handleButtonClick }) {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useItems(page);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  let items = data?.data;
  let meta = data?.meta;
  if (meta) {
    console.log(meta);
  }
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <Box>
      {isLoading && (
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"200px"}
          mb={2}
          margin={"0 auto"}
          gap={2}
        >
          <Typography textAlign={"center"}>Loading ......</Typography>
          <CircularProgress />
        </Box>
      )}
      <Box
        margin="0 auto"
        display={"grid"}
        gridTemplateColumns="repeat(auto-fill,300px) "
        justifyContent={"space-around"}
        rowGap={"20px"}
        columnGap={"1.33%"}
        ref={parent}
      >
        {isLoading ? (
          <>
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
          </>
        ) : (
          <>
            {items &&
              items.map((item) => {
                return <Item item={item} key={`${item.name}-${item.id}`} />;
              })}
          </>
        )}
      </Box>
      <Box
        sx={{ margin: "0 auto", width: "300px", pt: 3 }}
        onClick={() => handleButtonClick()}
      >
        <Pagination
          count={meta?.pagination.pageCount}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}

export default ItemGrid;
