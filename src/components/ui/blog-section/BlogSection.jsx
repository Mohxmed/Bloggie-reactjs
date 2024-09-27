import BlogSectionHeader from "./BlogSectionHeader";
import SearchBox, { SearchAbsolute } from "./SearchBox";
import Categories from "./Categories";

import ArticlesWrapper from "./ArticlesWrapper";

import useFetchData from "../../../hooks/useFetchData";
import ShowMore from "./ShowMore";

export default function BlogSection() {
  const { data, loading, error } = useFetchData("posts");

  return (
    <div>
      <div className="container relative">
        <BlogSectionHeader />
        <SearchAbsolute>
          <SearchBox />
        </SearchAbsolute>
      </div>
      <div className="container mt-16 flex flex-col space-y-12 justify-center items-center ">
        <Categories />
        <ArticlesWrapper data={data} loading={loading} />
        <ShowMore />
      </div>
    </div>
  );
}
