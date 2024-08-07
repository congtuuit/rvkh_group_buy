"use client";

import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { getPostsAsync } from "../../../api/post.api";

import ProductCard, {
  ProductCardProps,
} from "@/components/ui/ProductCard/ProductCard";

/**
 *
 * @param {*} props
 * @returns
 */
export interface ProductListProps {
  dataSource?: ProductCardProps[];
  handlePageChange?: Function;
}
function GroupBuyCourses(_props: ProductListProps) {
  const [posts, setPosts] = useState<ProductCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page: number) => {
    try {
      const response = await getPostsAsync({ paged: page, posts_per_page: 20 });
      const { posts, total_pages } = response.data;
      const displayPosts = posts?.map((i: any) => {
        return {
          id: i.id,
          thumbnail: "https://via.placeholder.com/150",
          title: i.title,
          content: i.content,
          description: i.excerpt,
          url: i.permalink,
          footerUrl: i.permalink,
          price: "$19.99",
        };
      });

      setPosts(displayPosts);
      setTotalPages(total_pages);
    } catch (error) {
      //console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {posts?.map((data, index) => {
              return <ProductCard key={index} {...data} />;
            })}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Pagination
              showControls
              className="mt-2"
              initialPage={1}
              page={currentPage}
              total={totalPages}
              onChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </div>
        </>
      ) : (
        <p>No group buy courses found.</p>
      )}
    </div>
  );
}

export default GroupBuyCourses;
