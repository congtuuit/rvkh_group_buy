"use client"

import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function HomeBreadcrumbs() {
  const variants = ["light"];

  return (
    <div className="flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <Breadcrumbs key={variant} variant={variant}>
          <BreadcrumbItem><a target="_blank" href={siteConfig.links["homePage"]}>Trang chủ</a></BreadcrumbItem>
          <BreadcrumbItem>Khóa Học Group Buy</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </div>
  );
}
