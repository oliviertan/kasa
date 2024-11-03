import Tag from "../Tag";

function Tags({logement}){
    return(
        <div className="tags_div">
            {logement.tags.map((tag, index) => (
                <Tag
                    key={`${tag}-${index}`}
                    text={tag}
                />
            ))}
        </div>
    )
}
export default Tags