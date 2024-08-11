import React from "react";
import { subtitle } from "@/components/primitives";
import NewGroupBuyCoursesForm from "@/components/admin/NewGroupBuyCoursesForm";

function EditGroupBuyCoursesPage() {
  return (
    <div>
      <h2 className={subtitle()}>Chỉnh sửa khóa học group buy</h2>
      <NewGroupBuyCoursesForm />
    </div>
  );
}

export default EditGroupBuyCoursesPage;
