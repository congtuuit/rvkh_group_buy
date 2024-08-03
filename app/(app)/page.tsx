import GroupBuyCourses from "@/components/ui/GroupBuyCourses/GroupBuyCourses";
import HomeBreadcrumbs from "@/components/ui/Breadcrumbs/HomeBreadcrumbs";

function Home() {
  return (
    <section>
      <HomeBreadcrumbs />
      <div className="flex flex-col md:py-4">
        <GroupBuyCourses key="group-buy-courses"/>
      </div>
    </section>
  );
}

export default Home;
