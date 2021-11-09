import '../SearchBar/SearchBar.scss'

export default function SearchBar(){
    return (
        <form className="search">
             <input className="search__bar" type="search" name="search"
            placeholder="Search"> 
            </input>
        </form>
    )
}