import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProductsByCategory.module.css";
import { getProduct } from "../API/firebase";
import Loading from "./Loading";
import NotFound from "./NotFound";
import ProductCard from "./ProductCard";
import Heart from "../components/Heart";

const categories = {
  crossbag: "크로스백",
  totebag: "토트백",
  ecobag: "에코백",
};

export default function ProductsByCategory() {
  const { category } = useParams();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", categories[category]],
    queryFn: () => getProduct(categories[category]),
  });
  return (
    <section className="section">
      <p className="sectiontitle">{category ? categories[category] : "전체"}</p>
      <div className="container">
        {isLoading && <Loading />}
        {error && <NotFound />}

        <ul className={styles.lists}>
          {products &&
            products.map((product) => (
              <li className={styles.list} key={product.id}>
                <ProductCard product={product} />
                <div className={styles.heartcontainer}>
                  <Heart product={product} />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
