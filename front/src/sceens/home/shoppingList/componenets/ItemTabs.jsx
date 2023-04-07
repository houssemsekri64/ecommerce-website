import { Tabs, Tab } from "@mui/material";

function ItemTabs({ value, setValue, isNonMobile }) {
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Tabs
      textColor="primary"
      indicatorColor="primary"
      value={value}
      onChange={handleChange}
      centered
      TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
      sx={{
        m: "25px",
        "& .MuiTabs-flexContainer": {
          flexWrap: "wrap",
        },
      }}
    >
      <Tab label="All" value="all" />
      <Tab label="New Arrivals" value="newArrivals" />
      <Tab label="Best Sellers" value="bestSellers" />
      <Tab label="Top Rated" value="topRated" />
    </Tabs>
  );
}

export default ItemTabs;
