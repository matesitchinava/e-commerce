export interface ProductImageType {
    url: string;
}

export interface ProductPriceType {
    value: string;
    currencyCode: string;
}

export interface ProductType {
    _id: any;
    name: string;
    description: string;
    price: ProductPriceType;
    images: [ProductImageType];
}

export interface ProductPropsType {
    product: ProductType;
}