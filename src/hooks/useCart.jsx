
import useUserContext from "../context/UserProvider";
import {useQueryClient, useMutation} from '@tanstack/react-query'
import { addOrUpdateToCart, removeFromCart } from "../API/firebase";

export default function useCart() {
  const {uid} = useUserContext();
  const queryClient = useQueryClient();

  const addOrUpdateItem = useMutation({
    mutationFn:(product) => addOrUpdateToCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', uid])
    }
  })

    const removeItem = useMutation({
      mutationFn: (id) => removeFromCart(uid, id),
      onSuccess: () => {
        queryClient.invalidateQueries(["cart", uid]);
      },
    });
  return {addOrUpdateItem, removeItem}
}

