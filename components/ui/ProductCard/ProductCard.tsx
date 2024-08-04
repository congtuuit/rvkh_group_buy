"use client";

import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
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
  const { thumbnail = "", title = "", footerUrl = "", price = "" } = props;

  return (
    <Card isPressable className="product-card" shadow="sm" radius="sm" style={{height: "280px", width: ""}}>
      <CardBody className="thumbnail-block overflow-visible p-0">
        <Image
          alt={title}
          className="w-full object-cover h-[140px]"
          radius="none"
          shadow="sm"
          src={thumbnail}
          width="100%"
        />
      </CardBody>
      <CardFooter className="content-block text-small justify-between pb-0">
        <b>{title}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
      <CardFooter className="content-block text-small justify-between">
        <a href={footerUrl} className="content-block self-center w-full">
          <Button className="w-full" radius="sm" size="sm" color="primary">Tham gia nhóm</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
