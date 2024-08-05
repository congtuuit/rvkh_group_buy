import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import GroupBuyCourses from "@/components/admin/GroupBuyCourses/GroupBuyCourses";
import { subtitle } from "@/components/primitives";

function GroupBuyCoursesPage() {
  return (
    <div>
      <h2 className={subtitle()}>Khóa học group buy</h2>
      <div className="mt-3">
        <Link className="mb-3 float-right" href="/group-buy-courses/new">
          <Button color="primary" radius="sm" type="button">
            Thêm khóa học
          </Button>
        </Link>
        <GroupBuyCourses />
      </div>
    </div>
  );
}

export default GroupBuyCoursesPage;
