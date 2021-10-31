import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Comment from "../../assets/icons/add_comment.svg";
import '../../components/Comments/Comments.scss';

export default function Comments(props){
    return(
        <section className="comments">
            <img className="comments__avatar" src={Avatar} alt="Mohan muruge avatar"/>
            <form className="comments__form">
                <label className="comments__label">JOIN THE CONVERSATION</label>
                <textarea className="comments__field" name="comments" placeholder="Add a new comment"/>
                <button className="comments__btn">
                    <img className="comments__icon" src={Comment} alt="comment icon"/>COMMENT
                </button>
            </form>
        </section>
    )
}