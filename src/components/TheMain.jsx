import style from "../css/modules/TheMain.module.css"
import postsList from "../posts.json";
import PostCard from "./PostCard";
const allTags = Array.from(
    new Set(postsList.flatMap((post) => post.tags))
);
export default function Main(){

    return (
        <main>
            <div>
                {allTags.map((tag) => tag + ", ")}
            </div>
            {postsList.map((post) => {
                console.log(post.image ,"sono qua");
                return (
                    <div key = {post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        
                        
                        <PostCard 
                        image={post.image}
                        title={post.title}
                        tags={post.tags}
                        content={post.content}
                        published={post.published}
                        ></PostCard>

                    </div>
                );
            })}
        </main>
    );
}