"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import "./style.css";

export interface ProductCardProps {
  thumbnail?: string;
  title?: string;
  description?: string;
  url?: string;
  footerUrl?: string;
  price?: string;
}

function ProductCard(props: ProductCardProps) {
  const {
    thumbnail = "",
    title = "",
    description = "",
    url = "",
    footerUrl = "",
    price = "",
  } = props;
  return (
    <Card className="product-card" shadow="sm" isPressable>
      <CardBody className="thumbnail-block overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[140px]"
          src={thumbnail}
        />
      </CardBody>
      <CardFooter className="content-block text-small justify-between pb-0">
        <b>{title}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
      <CardFooter className="content-block text-small justify-between">
        <a href={footerUrl}>Tham gia nhóm</a>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
