import clientPromise from "../../lib/mongodb";

export default async (req: any, res: any) => {
    try {
        const client = await clientPromise;
        const db = client.db("e-commerce");

        const products = await db
            .collection("products")
            .find({})
            .limit(10)
            .toArray();

        res.json(products);
    } catch (e) {
        console.error(e);
    }
};