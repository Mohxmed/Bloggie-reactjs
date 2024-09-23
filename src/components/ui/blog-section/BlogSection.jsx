import BlogSectionHeader from "./BlogSectionHeader";
import BlogSectionSearch from "./BlogSectionSearch";
import Categories from "./Categories";

export default function BlogSection() {
  return (
    <div>
      <div className="container relative">
        <BlogSectionHeader />
        <BlogSectionSearch />
      </div>
      <div className="container mt-16 flex justify-center ">
        <Categories />
      </div>
    </div>
  );
}
