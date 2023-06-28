import React, { useEffect, useState } from "react";
import { getProductsApi } from "../../Pokeman/api";
import { Card, Image, ListWrapper, ProductWrapper } from "./Products.style";
import { Button } from "@mantine/core";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getProductsApi()
            .then((data) => {
                setProducts(data.products)
                // console.log(data)
            })
            .catch((e) => setError(true));
    }, [])
    return (
        <ProductWrapper>
            <ListWrapper>
                {products.map((list: any) => {
                    return (
                        <Card key={list.id}>
                            <Image src={list.thumbnail}/>
                            
                            <p style = {{textAlign:"center"}}>{list.title}</p>
                        </Card>
                    )
                })}
            </ListWrapper>
        </ProductWrapper>
    )
}
export default Products;