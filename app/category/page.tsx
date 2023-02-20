import React from "react";
import Product from "../../components/product/Product";
import { ProductType } from "../../components/product/Product.type";
import clientPromise, { MONGO_DB_NAME } from "../../lib/mongodb";

export async function getData() {
  const client = await clientPromise;
  const db = client.db(MONGO_DB_NAME);

  const products = await db.collection("products").find({}).limit(10).toArray();

  return await JSON.parse(JSON.stringify(products));
}

export default async function CategoryPage(args: any) {
  const products = await getData();

  return (
    <div className="CategoryPage">
      <h1>Category Page</h1>
      <div className="CategoryPage-List">
        {products.map((product: ProductType) => (
          <Product key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
}
