import Link from "next/link";
const NotFound = () => {
  return <div>
		<h2>NotFound Page</h2>
		<p>Sorry,页面不存在</p>
		<Link href="/">返回首页</Link>
	</div>;
};

export default NotFound;