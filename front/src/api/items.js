export const getItems = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/api/items?populate=image`,
      {
        method: "Get",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("something went wrong");
  }
};
