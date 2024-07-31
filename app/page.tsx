import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ProductList from "@/components/ui/ProductList/ProductList";
import HomeBreadcrumbs from "@/components/ui/Breadcrumbs/HomeBreadcrumbs";

export default function Home() {
  const dataSource = [
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "This is a description for Product 1.",
      url: "https://example.com/product1",
      footerUrl: "https://example.com/footer1",
      price: "$19.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "This is a description for Product 2.",
      url: "https://example.com/product2",
      footerUrl: "https://example.com/footer2",
      price: "$29.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "This is a description for Product 3.",
      url: "https://example.com/product3",
      footerUrl: "https://example.com/footer3",
      price: "$39.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 4",
      description: "This is a description for Product 4.",
      url: "https://example.com/product4",
      footerUrl: "https://example.com/footer4",
      price: "$49.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 5",
      description: "This is a description for Product 5.",
      url: "https://example.com/product5",
      footerUrl: "https://example.com/footer5",
      price: "$59.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 6",
      description: "This is a description for Product 6.",
      url: "https://example.com/product6",
      footerUrl: "https://example.com/footer6",
      price: "$69.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 7",
      description: "This is a description for Product 7.",
      url: "https://example.com/product7",
      footerUrl: "https://example.com/footer7",
      price: "$79.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 8",
      description: "This is a description for Product 8.",
      url: "https://example.com/product8",
      footerUrl: "https://example.com/footer8",
      price: "$89.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 9",
      description: "This is a description for Product 9.",
      url: "https://example.com/product9",
      footerUrl: "https://example.com/footer9",
      price: "$99.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 10",
      description: "This is a description for Product 10.",
      url: "https://example.com/product10",
      footerUrl: "https://example.com/footer10",
      price: "$109.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 11",
      description: "This is a description for Product 11.",
      url: "https://example.com/product11",
      footerUrl: "https://example.com/footer11",
      price: "$119.99",
    },
    {
      thumbnail: "https://via.placeholder.com/150",
      title: "Product 12",
      description: "This is a description for Product 12.",
      url: "https://example.com/product12",
      footerUrl: "https://example.com/footer12",
      price: "$129.99",
    },
  ];

  return (
    <section>
      <HomeBreadcrumbs />
      <div className="flex flex-col items-center justify-center gap-4 md:py-10">
        <ProductList dataSource={dataSource} />
      </div>
    </section>
  );
}
