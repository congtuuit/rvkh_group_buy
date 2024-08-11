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
import { deletePostAsync, getPostsAsync } from "../../../api/post.api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const statusColorMap = {
  draff: "default",
  publish: "success",
};

function GroupBuyCourses() {
  const router = useRouter();
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
      const displayPosts = posts?.map((i, index) => {
        const no = (page - 1) * 10 + index + 1;
        return {
          no: no,
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
      console.error("Error :", error);
    }
  };

  function deleteConfirmAlert(callBack, id) {
    let text = "Bạn có chắc muốn xóa khóa học này không? \nĐồng ý OK hoặc Hủy.";
    if (confirm(text) == true) {
      callBack && callBack(id);
    } else {
      callBack && callBack(undefined);
    }
  }

  const deleteRecord = async (recordId = undefined) => {
    if (!Boolean(recordId)) return;
    let isSuccess = false;
    const id = toast.loading("Vui lòng chờ...");
    try {
      const response = await deletePostAsync(recordId);
      const { success, message } = response;
      isSuccess = success;
    } catch (error) {}

    if (isSuccess) {
      toast.update(id, {
        render: "Xóa bài viết thành công.",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });

      fetchPosts(1);
    } else {
      toast.update(id, {
        render: "Xóa bài viết thất bại.",
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
    }
  };

  const openEditPage = (id) => {
    return router.push("/group-buy-courses/edit/?id=" + id);
  };

  const renderCell = React.useCallback((item, columnKey) => {
    const { id } = item;
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <button onClick={() => openEditPage(id)} className="cursor-pointer">
            {cellValue}
          </button>
        );
      case "url":
        return (
          <a href={cellValue} target="_blank" rel="noreferrer">
            {cellValue}
          </a>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[item.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Sửa" className="mr-5">
              <button
                onClick={() => openEditPage(id)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50 mr-3"
              >
                Sửa
              </button>
            </Tooltip>
            <Tooltip color="danger" content="Xóa">
              <div
                role="presentation"
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => {
                  deleteConfirmAlert(deleteRecord, id);
                }}
              >
                Xóa
              </div>
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
        <TableColumn key="no">STT</TableColumn>
        <TableColumn key="id">Id</TableColumn>
        <TableColumn key="title">Tiêu đề</TableColumn>
        <TableColumn key="url">Đường dẫn</TableColumn>
        <TableColumn key="status">Trạng thái</TableColumn>
        <TableColumn key="actions">Thao tác</TableColumn>
      </TableHeader>
      <TableBody items={posts ?? []} loadingContent={<Spinner />} loadingState={isLoading ?? undefined}>
        {(item) => {
          return (
            <TableRow key={item?.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}

const showConfirmToast = () => {
  const ConfirmToast = ({ onConfirm, onCancel }) => {
    return (
      <div>
        <p>Bạn có chắc muốn xóa khóa học này không?</p>
        <button onClick={onConfirm}>Đồng ý</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    );
  };

  return new Promise((resolve, reject) => {
    const handleConfirm = () => {
      resolve(true);
      toast.dismiss();
    };

    const handleCancel = () => {
      reject(false);
      toast.dismiss();
    };

    toast(<ConfirmToast onConfirm={handleConfirm} onCancel={handleCancel} />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // Disable auto-close for confirmation
      closeOnClick: false, // Prevent closing on click outside
    });
  });
};

export default GroupBuyCourses;
