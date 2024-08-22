// import { sayHello } from "@/lib/action";
import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {

	// const actionInComponent = async () => {
	// 	"use server";
	// 	console.log("it works！")
	// }

	return <div>
		{/* <form action={sayHello}>
			<button>点击</button>
		</form>
		<form action={actionInComponent}>
			<button>点击内部</button>
		</form> */}
		<form action={addPost}>
			<input type="text" placeholder="title" name ="title"/>
			<input type="text" placeholder="desc" name ="desc"/>
			<input type="text" placeholder="slug" name ="slug"/>
			<input type="text" placeholder="userId" name ="userId"/>
			<button>创建</button>
		</form>
		<form action={deletePost}>
			<input type="text" placeholder="postId" name ="id"/>
			<button>删除</button>
		</form>
	</div>;
};
export default ServerActionTestPage;