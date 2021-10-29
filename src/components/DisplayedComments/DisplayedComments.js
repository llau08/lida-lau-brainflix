export default function DisplayedComments(props){
    return (
        <>
        {props.comment.map((comment)=>{
             const formatTimestamp = Intl.DateTimeFormat('en-US',{
                year: "numeric",
                month: "numeric",
                day: "2-digit",
            }).format(comment.timestamp);
            return(
        <article>
            <img />
            <div>
                <h4>{comment.name}</h4>
                <p>{formatTimestamp}</p>
                <p>{comment.comment}</p>
            </div>
        </article>)
        })}
        </>               
    )
}