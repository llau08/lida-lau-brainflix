import Search from "../../assets/icons/search.svg";

export default function SearchBar(){
    return (
        <form className="search">
            <img src={Search} alt="search icon"/>
             <input className="search__bar" type="search" name="search"
            placeholder="Search"> 
            </input>
        </form>
    )
}