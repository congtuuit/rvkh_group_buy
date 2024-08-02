import React from "react";
import GroupBuyCourses from "@/components/admin/GroupBuyCourses/GroupBuyCourses";
import { subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

function GroupBuyCoursesPage() {
  return (
    <div>
      <h2 className={subtitle()}>Khóa học group buy</h2>
      <div className="mt-3">
        <Link href="group-buy-courses/new"  className="mb-3 float-right">
          <Button type="button" color="primary">
            Thêm khóa học
          </Button>
        </Link>
        <GroupBuyCourses />
      </div>
    </div>
  );
}

export default GroupBuyCoursesPage;
