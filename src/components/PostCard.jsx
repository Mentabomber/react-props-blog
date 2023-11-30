import style from "../css/modules/Card.module.css";
import { getImgUrl } from "../utilities/getImgUrl";


function TagsList ({ tags }) {
    const toReturn = [];
    const colorsMap = {
        "html": "bg-red-300",
        "css": "bg-teal-300",
        "js": "bg-yellow-300",
        "php": "bg-gray-300",
    };

    tags.forEach((tag, i) => {
        const color = colorsMap[tag] ?? "bg-gray-100";

        toReturn.push(
            <span   key={"tag_" + i}
                    className={"rounded-lg px-2 text-xs "+ color}>
                {tag}
            </span>
        );
    });
    return toReturn;
}

export default function PostCard({image, title, content, tags, published}) {

    if (!published) {
        return;
    }
    return (
        <div className="bg-gray-100 rounded-lg border border-gray-100 min-h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-[500px]">

            <div className="aspect-video overflow-hidden group">
                <img src={getImgUrl(image)} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out" />
            </div>

            <div>

                <h3>{title}</h3>

                <p>{content}</p>
                <div>
                    <TagsList tags={tags}></TagsList>
                </div>
            </div>

        </div>
        

    )
}

