import GroupBuyCourses from "@/components/ui/GroupBuyCourses/GroupBuyCourses";
import HomeBreadcrumbs from "@/components/ui/Breadcrumbs/HomeBreadcrumbs";

function Home() {
  return (
    <section>
      <HomeBreadcrumbs />
      <div className="flex flex-col items-center justify-center gap-4 md:py-10">
        <GroupBuyCourses key="group-buy-courses"/>
      </div>
    </section>
  );
}

export default Home;
