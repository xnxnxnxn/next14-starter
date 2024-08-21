import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";


export const generateMetadata = async ({params}) => {
	const {slug} = params;
	const post = await getPost(slug);
	return {
		title: post.title,
		description: post.desc,
	};
};

const getData = async (slug) => {
	// revalidate: 3600  3600秒后刷新缓存
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate:3600}});
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const SingleBlog = async ({params}) => {
		const {slug} = params;
		const post = await getData(slug);
		// console.log('post',post);
		// const post = await getPost(slug);
    return (
    <div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={post.img} alt="" fill className={styles.img} />
				{/* <Image src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill ></Image> */}
			</div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
							{/* 01.01.2024 */}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlog;