import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../api/items";
import { setItems, setLoading } from "../state";

function useGetItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const getData = async () => {
      try {
        const data = await getItems();
        dispatch(setItems(data.data));
        dispatch(setLoading(false));
      } catch (error) {}
    };
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);
}
export default useGetItems;
