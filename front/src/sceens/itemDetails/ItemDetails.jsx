import { Box, CircularProgress, Skeleton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Item from "../../components/item/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToCart } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../components/ui/Image";
import ItemAction from "../../components/item/ItemAction";
import { useItem } from "../../hooks/useItem";
import { useItems } from "../../hooks/useItems";
const ItemDetails = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const { data, isLoading } = useItem(itemId);
  const { data: dataItem } = useItems(1);
  let item = data?.data;
  let items = dataItem?.data;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box width="80%" m="80px auto">
      {isLoading ? (
        <>
          <Box
            display={"flex"}
            alignItems={"center"}
            margin={"0  auto"}
            width={"200px"}
            gap={2}
          >
            <Typography textAlign={"center"}>Loading ......</Typography>
            <CircularProgress />
          </Box>
          <Skeleton height={"300px"} />
        </>
      ) : (
        <>
          <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/* IMAGES */}
            <Box flex="1 1 40%" mb="40px">
              <Image
                alt={item?.name}
                width="100%"
                height="100%"
                src={item?.attributes.image.data.attributes?.url}
                ImageStyle={{ objectFit: "contain" }}
              />
            </Box>

            {/* ACTIONS */}
            <Box
              flex="1 1 50%"
              mb="40px"
              backgroundColor="background.paper"
              p={2}
              borderRadius={2}
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  {" "}
                  <Link to={"/"}>
                    <Typography
                      sx={{ color: (theme) => theme.palette.grey[400] }}
                    >
                      Home /Item/{item?.id}
                    </Typography>
                  </Link>{" "}
                </Box>
                <Box sx={{ color: (theme) => theme.palette.grey[400] }}>
                  Prev Next
                </Box>
              </Box>

              <Box m="65px 0 25px 0">
                <Typography
                  variant="h3"
                  sx={{ color: (theme) => theme.palette.grey[400] }}
                >
                  {item?.attributes?.name}
                </Typography>
                <Typography sx={{ color: (theme) => theme.palette.grey[400] }}>
                  {" "}
                  ${item?.attributes?.price}
                </Typography>
                <Typography
                  sx={{ mt: "20px", color: (theme) => theme.palette.grey[400] }}
                >
                  {item?.attributes?.longDescrption}
                </Typography>
              </Box>

              <ItemAction
                handleAddToCart={() => {
                  if (
                    cart.length > 0 &&
                    cart.find((cartItem) => cartItem.id === item.id)
                  ) {
                    return;
                  }
                  dispatch(addToCart({ item: { ...item, count: 1 } }));
                  return "success";
                }}
                videoLink={item.attributes.video}
              />

              <Box>
                <Box m="20px 0 5px 0" display="flex">
                  <FavoriteBorderOutlinedIcon />
                  <Typography
                    sx={{
                      ml: "5px",
                      color: (theme) => theme.palette.grey[400],
                    }}
                  >
                    ADD TO WISHLIST
                  </Typography>
                </Box>
                <Typography sx={{ color: (theme) => theme.palette.grey[400] }}>
                  CATEGORIES: {item?.attributes?.category}
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescrption}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items?.slice(3, 7).map((item, i) => (
            <Item width={"300px"} key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
