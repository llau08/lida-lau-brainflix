import Search from "../../assets/icons/search.svg";

export default function SearchBar(){
    return (
        <form>
            <img src={Search} alt="search icon"/>
             <input type="text"
            placeholder="Search"> 
            </input>
        </form>
    )
}