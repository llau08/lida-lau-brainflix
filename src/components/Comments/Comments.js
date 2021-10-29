import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Comment from "../../assets/icons/add_comment.svg";
import '../../components/Comments/Comments.scss';

export default function SubmitComments(props){
    return(
        <section className="comments">
            <h3>JOIN THE CONVERSATION</h3>
            <form>
                <textarea name="comment"/>
                <button>
                    <img src={Comment}/>
                    COMMENT</button>
            </form>
            <div>
                <img className="comments__avatar" src={Avatar} />
            </div>
        </section>
    )
}