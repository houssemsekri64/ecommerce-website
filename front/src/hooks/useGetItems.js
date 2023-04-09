import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../api/items";
import { setItems, setLoading } from "../state";

function useGetItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getItems();
        dispatch(setItems(data.data));
        dispatch(setLoading(false));
      } catch (error) {}
    };
    getData();
  }, []);
}
export default useGetItems;
