import '../DisplayedComments/DisplayedComments.scss';
import formatTimestamp from '../../utilities/Utilities';

export default function DisplayedComments({comment}){
    return (
        <>
        {comment.map((comment, i)=>{
            return(
                <article key={i} className="displayed-comm">
                    <div className="displayed-comm__avatar"></div>
                    <div className="displayed-comm__box">
                        <div className="displayed-comm__header">
                            <h4>{comment.name}</h4>
                            <p className="displayed-comm__date">{formatTimestamp(comment.timestamp)}</p>
                        </div>
                    <p className="displayed-comm__txt">{comment.comment}</p>
                    </div>
                </article>)
            })}
        </>               
    )
}