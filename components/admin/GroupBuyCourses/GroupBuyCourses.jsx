"use client";

import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { getPostsAsync } from "../../../api/post.api";
import { EyeIcon } from "../icons/table/eye-icon";

const statusColorMap = {
    draff: "default",
    publish: "success",
  };

function GroupBuyCourses() {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState("loading");

  useEffect(() => {
    setIsLoading("loading");
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    setIsLoading("idle");
  }, [posts]);

  const fetchPosts = async (page) => {
    try {
      const response = await getPostsAsync({ paged: page });
      const { posts, total_pages } = response.data;
      const displayPosts = posts?.map((i) => {
        return {
          id: i.id,
          thumbnail: "https://via.placeholder.com/150",
          title: i.title,
          content: i.content,
          description: i.excerpt,
          url: i.permalink,
          footerUrl: i.permalink,
          status: i.status,
        };
      });
      setPosts(displayPosts);
      setTotalPages(total_pages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };


  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[item.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                Xem
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                Sửa
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                Xóa
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        totalPages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={totalPages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="id">Id</TableColumn>
        <TableColumn key="title">Tiêu đề</TableColumn>
        <TableColumn key="url">Đường dẫn</TableColumn>
        <TableColumn key="status">Trạng thái</TableColumn>
        <TableColumn key="actions">Thao tác</TableColumn>
      </TableHeader>
      <TableBody
        items={posts ?? []}
        loadingContent={<Spinner />}
        loadingState={isLoading ?? undefined}
      >
        {(item) => {
          return (
            <TableRow key={item?.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}

export default GroupBuyCourses;
