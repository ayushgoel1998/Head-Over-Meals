import React from "react";
const Header = (props) => {
    const { search, onInputChange, onSearchClick } = props;
    return (
        <div className="jumbotron"> 
            <h2 className="display-1">
                <i class="material-icons brand-icon" >fastfood</i>Food Recipe
            </h2>
            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Your Favourite Recipe..."
                    value={search} onChange={onInputChange} />
                <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
            </div>
        </div>
    )
}

export default Header;
