import { title } from "@/components/primitives";
import HomeBreadcrumbs from "@/components/ui/Breadcrumbs/HomeBreadcrumbs";

function AdminPage() {
  return (
    <section>
      <HomeBreadcrumbs />
      <div className="flex flex-col items-center justify-center gap-4 md:py-10">
        <h1 className={title()}>AdminPage</h1>
      </div>
    </section>
  );
}

export default AdminPage;
