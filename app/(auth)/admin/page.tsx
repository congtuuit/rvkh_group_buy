import { title } from "@/components/primitives";
import HomeBreadcrumbs from "@/components/ui/Breadcrumbs/HomeBreadcrumbs";

function AdminPage() {
  return (
    <div>
      <h1 className={title()}>Admin</h1>
    </div>
  );

  return (
    <div>
      <h1 className={title()}>Admin</h1>
      <div>
        <HomeBreadcrumbs />
      </div>
    </div>
  );
}

export default AdminPage;
