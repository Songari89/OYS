import useUserContext from "../context/UserProvider";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { addOrUpdateToLike, getLike, removeFromLike } from "../API/firebase";

export default function useHeart() {
  const { uid } = useUserContext();
  const queryClient = useQueryClient();
  const heartQuery = useQuery({
    queryKey: ["likes", uid || ""],
    queryFn: () => getLike(uid),
    enabled: !!uid,
  });

  const addOrUpdateLike = useMutation({
    mutationFn: (product) => addOrUpdateToLike(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(["likes", uid]);
    },
  });

  const removeLike = useMutation({
    mutationFn: (id) => removeFromLike(uid, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["likes", uid]);
    },
  });
  return { heartQuery, addOrUpdateLike, removeLike, uid };
}
