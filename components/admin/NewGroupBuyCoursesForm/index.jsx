"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAsync, postsAsync, putAsync } from "@/api/post.api";
import { useSearchParams } from "next/navigation";
import { Formik } from "formik";

const category = {
  GROUPING: "171",
  GROUPED: "106",
};

function NewGroupBuyCoursesForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  // check edit mode
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      handleGetCourse(id);
    }
  }, [isEdit]);

  const handleGetCourse = async (id) => {
    const response = await getAsync(id);
    const { success, data } = response;
    if (success) {
      const categories = data?.categories
        ?.filter((i) => i.term_taxonomy_id == category.GROUPING || i.term_taxonomy_id == category.GROUPED)
        .map((i) => i.term_taxonomy_id.toString());

      const editData = {
        id: data.id,
        post_author: 1,
        post_title: data.title,
        post_content: data.content,
        post_status: data.status,
        tutor_course_group_buy_url: data.tutor_course_group_buy_url,
        course_categories: categories.length > 0 ? categories[categories.length - 1] : category.GROUPING,
        pricing: {
          type: "paid",
          price: data.price,
          regular_price: data.regular_price,
          sale_price: data.sale_price,
        },
      };

      setFormData(editData);
    }
  };

  const goBack = () => {
    router.back();
  };

  const handleCreateCourse = async (_formData) => {
    const request = {
      ..._formData,
      course_categories: [_formData.course_categories],
    };

    const id = toast.loading("Vui lòng chờ...");
    const response = await postsAsync(request);
    const { success, message } = response;
    toast.update(id, {
      render: success ? "Tạo bài viết thành công." : message || "Có lỗi xảy ra.",
      type: success ? "success" : "error",
      isLoading: false,
      autoClose: 2000,
    });
  };

  const handleUpdateCourse = async (_formData) => {
    const request = {
      ..._formData,
      course_categories: [_formData.course_categories],
    };
    const id = toast.loading("Vui lòng chờ...");
    const response = await putAsync(request);
    const { success, message } = response;
    toast.update(id, {
      render: success ? "Cập nhật bài viết thành công." : message || "Có lỗi xảy ra.",
      type: success ? "success" : "error",
      isLoading: false,
      autoClose: 2000,
    });
  };

  const handleFormSubmit = async (values) => {
    if (isEdit) {
      await handleUpdateCourse(values);
    } else {
      await handleCreateCourse(values);
    }
  };

  return (
    <Card className="p-5">
      <Formik initialValues={formData} onSubmit={handleFormSubmit}>
        {({ handleChange, values, handleSubmit, setValues }) => {
          useEffect(() => {
            setValues(formData);
          }, [formData]);
          return (
            <div style={{ display: "block" }}>
              <div className="w-full" style={{ display: "inline-block" }}>
                <div className="float-right mb-3">
                  <Button radius="sm" color="default" onClick={goBack}>
                    Trở về
                  </Button>
                  <Button radius="sm" color="primary" type="submit" className="ml-2" onPress={handleSubmit}>
                    {isEdit ? "Cập nhật" : "Tạo mới"}
                  </Button>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-5">
                  <RadioGroup
                    name="course_categories"
                    label="Loại khóa học"
                    orientation="horizontal"
                    onChange={handleChange}
                    value={values.course_categories}
                  >
                    <Radio value="171">Đang Group Buy</Radio>
                    <Radio value="106">Group Buy</Radio>
                  </RadioGroup>
                </div>

                <div className="flex">
                  <div className="flex-1 pr-3">
                    <InputField disabled={true} label="Mã khóa học" name="id" value={values.id} />
                    <InputField
                      label="Tên khóa học"
                      name="post_title"
                      value={values.post_title}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Link nhóm"
                      name="tutor_course_group_buy_url"
                      value={values.tutor_course_group_buy_url}
                      onChange={handleChange}
                    />
                    <TextareaField
                      label="Nội dung khóa học"
                      name="post_content"
                      value={values.post_content}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-1 pl-3">
                    <SelectField
                      label="Trạng thái"
                      name="post_status"
                      value={values.post_status}
                      onChange={(value, e) => {
                        handleChange(e);
                      }}
                      options={[
                        { value: "publish", label: "Công khai" },
                        { value: "draft", label: "Nháp" },
                      ]}
                    />
                    <PricingField
                      label="Giá khóa học"
                      name="pricing.price"
                      value={values.pricing.price}
                      onChange={handleChange}
                    />
                    <PricingField
                      label="Giá gốc"
                      name="pricing.regular_price"
                      value={values.pricing.regular_price}
                      onChange={handleChange}
                    />
                    <PricingField
                      label="Giá khuyến mãi"
                      name="pricing.sale_price"
                      value={values.pricing.sale_price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </Card>
  );
}

const initialFormData = {
  post_author: 1,
  post_title: "DEV_TEST",
  post_content: "DEV_TEST",
  post_status: "draft",
  course_level: "beginner",
  tutor_course_group_buy_url: "google.com",
  course_categories: category.GROUPING,
  course_tags: [],
  pricing: {
    type: "paid",
    price: "18000",
    regular_price: "199999",
    sale_price: "18000",
  },
};

const PricingField = ({ label, name, value, onChange }) => (
  <Input inputMode="numeric" label={label} name={name} value={value} onChange={onChange} variant="" className="mb-3" />
);
const InputField = ({ disabled = false, label, name, value, onChange }) => (
  <Input disabled={disabled} label={label} name={name} value={value} onChange={onChange} variant="" className="mb-3" />
);
const TextareaField = ({ label, name, value, onChange }) => (
  <Textarea label={label} name={name} value={value} onChange={onChange} variant="" className="mb-3" />
);
const SelectField = ({ label, name, value, onChange, options }) => (
  <Select
    label={label}
    name={name}
    value={value}
    onChange={(val) => onChange(name, val)}
    className="mb-3"
    defaultSelectedKeys={["draft"]}
  >
    {options.map((option) => (
      <SelectItem key={option.value} value={option.value}>
        {option.label}
      </SelectItem>
    ))}
  </Select>
);

export default NewGroupBuyCoursesForm;
