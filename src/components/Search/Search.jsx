import "./Search.css"

export default function Search(){
    return(
        <div className="search-wrapper">
            <input 
             id="Pokemon-search"
             type="text" placeholder="Enter Pokemon Name ..." 
             />
        </div>
    );
}