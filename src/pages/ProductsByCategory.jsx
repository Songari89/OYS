import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./ProductsByCategory.module.css";
import { getProduct } from "../API/firebase";
import Loading from "./Loading";
import NotFound from "./NotFound";
import ProductCard from "./ProductCard";

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
      <p className="sectiontitle">{category? categories[category] : "전체" }</p>
      <div className={styles.contentcontainer}>
        {isLoading && <Loading />}
        {error && <NotFound />}

        <ul className={styles.lists}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ul>
      </div>
    </section>
  );
}
