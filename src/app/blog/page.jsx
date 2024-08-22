import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
	// revalidate: 3600  3600秒后刷新缓存
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache: "no-store"});
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const BlogPage = async () => {
	const posts = await getData();
	// const posts = await getPosts();
  return <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>;
};

export default BlogPage;