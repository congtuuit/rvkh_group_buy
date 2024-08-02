import React from "react";
import GroupBuyCourses from "@/components/admin/GroupBuyCourses/GroupBuyCourses";
import { subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

function NewGroupBuyCoursesPage() {
  return (
    <div>
      <h2 className={subtitle()}>Khóa học group buy</h2>
      <div className="mt-3">
        <Input />
      </div>
    </div>
  );
}

export default NewGroupBuyCoursesPage;
