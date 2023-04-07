import { variable } from "../variable/variable";
const { serverUrl } = variable;
export const getItems = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/items?populate=image`, {
      method: "Get",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("something went wrong");
  }
};
