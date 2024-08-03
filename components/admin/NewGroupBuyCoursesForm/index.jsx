"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { postsAsync } from "@/api/post.api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function NewGroupBuyCoursesForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    post_title: "",
    post_content: "",
    post_link_group: "",
  });

  useEffect(() => {
    console.log("formValues ", formValues);
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const goBack = () => {
    router.back(); // Navigates back to the previous route
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Log the form values or send them to a server
    console.log(formValues);

    if (
      !Boolean(formValues.post_content) ||
      !Boolean(formValues.post_title) ||
      !Boolean(formValues.post_link_group)
    ) {
      return;
    }

    const id = toast.loading("Vui lòng chờ...");
    const response = await postsAsync(formValues);
    const { success, message } = response;
    if (success) {
      toast.update(id, {
        render: "Tạo bài viết thành công.",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          className="float-right"
          radius="sm"
          color="primary"
        >
          Tạo mới
        </Button>
        <Button
          type="button"
          className="float-right mr-2"
          radius="sm"
          color="default"
          onClick={goBack}
        >
          Trở về
        </Button>
        <div className="mt-3" style={{ gap: "10px", display: "block" }}>
          <Input
            name="post_title"
            onChange={handleChange}
            label="Tên khóa học"
            variant="underlined"
            className="mb-3"
          />
          <Input
            onChange={handleChange}
            name="post_link_group"
            label="Link nhóm"
            className="mb-3"
            variant="underlined"
          />
          <Textarea
            onChange={handleChange}
            name="post_content"
            className="mb-3"
            variant="underlined"
            label="Nội dung khóa học"
          />
        </div>
      </form>
    </div>
  );
}

export default NewGroupBuyCoursesForm;
