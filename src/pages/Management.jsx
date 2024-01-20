import React, { useState } from "react";
import styles from "./Management.module.css";
import { uploadImage } from "../API/uploader";
import { addNewProduct } from "../API/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Management() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);
  const queryClient = useQueryClient();
  const addProduct = useMutation({mutationFn:({product, url}) => addNewProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries(['products'])
});
  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate({product, url}, {
          onSuccess: () => {
            setSuccess("✅ 상품이 등록되었습니다.");
        setTimeout(() => {
          setSuccess(null);
          setProduct({});
          setFile(null);
        }, 3000);
          }
        })
      })
      .finally(() => setUploading(false));
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <div className={styles.container}>
      <h6>새 상품 등록</h6>
      {file && (
        <img
          className={styles.fileimage}
          src={URL.createObjectURL(file)}
          alt="file"
        />
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="상품명"
          name="title"
          value={product.title ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="가격"
          name="price"
          value={product.price ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="할인가격(할인 시에만 입력)"
          name="saleprice"
          value={product.saleprice ?? ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="카테고리"
          name="category"
          value={product.category ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="상품설명"
          name="description"
          value={product.description ?? ""}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="색상(콤마로 구분)"
          name="colors"
          value={product.colors ?? ""}
          required
          onChange={handleChange}
        />
        <p className={styles.success}>{success}</p>
        <button
          disabled={uploading}
          className={`submitbtn ${uploading ? styles.uploading : ""}`}
        >
          {uploading ? "업로드 중..." : "제품 등록하기"}
        </button>
      </form>
    </div>
  );
}
