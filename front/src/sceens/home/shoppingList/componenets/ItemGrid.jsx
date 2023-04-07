import React, { useMemo } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Box, Skeleton } from "@mui/material";
import Item from "../../../../components/Item";

function ItemGrid({ items, value, loading }) {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const filteredItems = useMemo(() => {
    if (value === "all") {
      return items;
    } else {
      return items.filter((item) => item.attributes.category === value);
    }
  }, [items, value]);
  return (
    <Box
      margin="0 auto"
      display={"grid"}
      gridTemplateColumns="repeat(auto-fill,300px) "
      justifyContent={"space-around"}
      rowGap={"20px"}
      columnGap={"1.33%"}
      ref={parent}
    >
      {loading && (
        <>
          <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
          <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
          <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
          <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
        </>
      )}
      {filteredItems.map((item) => {
        return <Item item={item} key={`${item.name}-${item.id}`} />;
      })}
    </Box>
  );
}

export default ItemGrid;
