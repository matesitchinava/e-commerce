"use client";

import Image from "next/image";
import { ProductPropsType } from './Product.type';

import "./Product.style.css";

export default function Product({ product }: ProductPropsType) {
  return (
    <div className="Product">
      <Image
        alt={product.name}
        src={product.images[0].url}
        width={150}
        height={150}
      />
      <h4>{product.name}</h4>
      <p>
        {product.price.value} {product.price.currencyCode}
      </p>
    </div>
  );
}
