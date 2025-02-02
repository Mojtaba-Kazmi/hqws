import { getPostsByCategory} from "../../shared/utils/posts";
import { getUniqueCategories } from "../../shared/utils/getUniqueCategories";
import AllBlogPosts from "./components/blog/AllBlogPosts";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Walling & Rendering Insights | Expert Tips & Trends - HQWS",
  description:
    "Stay informed with the latest trends, expert tips, and industry updates on walling, rendering, and coatings in Adelaide. Read now!",
  openGraph: {
    title: "Walling & Rendering Blog | Expert Advice & Updates - HQWS",
    description:
      "Explore our expert blogs on walling, rendering, texture coatings, and more. Get insights to enhance your property's durability & aesthetics.",
    url: "https://hqws.com.au/blog",
  },
});

export default async function BlogPage({ searchParams }) {
  // Await the searchParams object before using its properties
  const awaitedSearchParams = await searchParams;
  const category = awaitedSearchParams.category || "All"; // Default category is "All"
  const page = parseInt(awaitedSearchParams.page) || 1; // Default page is 1
  const POSTS_PER_PAGE = 6;

  // Fetch all posts for category filtering
  const allPosts = await getPostsByCategory(); // Get all posts first
  const categories = getUniqueCategories(allPosts); // Extract unique categories
  const posts = await getPostsByCategory(category); // Get filtered posts for the selected category

  // Pagination logic
  const totalPosts = posts.length;
  const pageCount = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <section>
      {/* Pass data to AllBlogPosts */}
      <AllBlogPosts
        paginatedPosts={paginatedPosts}
        page={page}
        pageCount={pageCount}
        allPosts={posts} // Filtered posts
        categories={categories} // Unique categories
        category={category}
      />
    </section>
  );
}