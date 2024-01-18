import React from "react";
import styles from "./Cart.module.css";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../API/firebase";
import useUserContext from "../context/UserProvider";
import CartItem from "./CartItem";
import PriceCard from "./PriceCard";

export default function Cart() {
  const { uid } = useUserContext();
  const {
    isLoading,
    error,
    data: items,
  } = useQuery({
    queryKey: [],
    queryFn: () => getCart(uid),
  });
  const hasItems = items && items.length > 0;
  const totalPrice =
    items &&
    items.reduce(
      (total, item) => {
        const price = parseInt(item.price.replace(/,/g, ""), 10);
        return total + (price * item.quantity)
      },
      0
    );
  const shippingPee = totalPrice > 50000 ? 0 : 3000;

  return (
    <section className="section">
      <p className="sectiontitle">장바구니</p>
      <div className="container">
        {isLoading && <Loading />}
        {error && <NotFound />}
        {!hasItems && <p>장바니에 상품이 없습니다.</p>}
        {hasItems && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id} item={item} uid={uid} />
              ))}
            </ul>
            <div className={styles.totalprice}>
              <PriceCard text="상품 금액" price={totalPrice} />
              <img src="/image/icons/totalplus.svg" alt="plus" />
              <PriceCard text="배송비" price={shippingPee} />
              <img src="/image/icons/equal.svg" alt="equal" />
              <PriceCard text="총 금액" price={totalPrice + shippingPee} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
