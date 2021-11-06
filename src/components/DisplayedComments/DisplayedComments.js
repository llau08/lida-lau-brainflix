import '../DisplayedComments/DisplayedComments.scss';

export default function DisplayedComments(props){
    return (
        <>
        {props.comment.map((comment, i)=>{
             const formatTimestamp = Intl.DateTimeFormat('en-US',{
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }).format(comment.timestamp);

            return(
                <article key={i} className="displayed-comm">
                    <div className="displayed-comm__avatar"></div>
                    <div className="displayed-comm__box">
                        <div className="displayed-comm__header">
                            <h4>{comment.name}</h4>
                            <p className="displayed-comm__date">{formatTimestamp}</p>
                        </div>
                    <p className="displayed-comm__txt">{comment.comment}</p>
                    </div>
                </article>)
            })}
        </>               
    )
}