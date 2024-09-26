import { useEffect } from "react";
import $ from 'jquery'

const SearchBar = () => {
    useEffect(()=>{
        $('.search-option').hide();
        $(".main-search").on('click', function(){
        $('.search-option').animate({
            height:'toggle',
            });
        });

    },[])

  return (
    <form action="#">
      <div className="search-option">
        <input type="text" placeholder="Search..." />
        <button className="button" type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
      <a className="main-search" href="#">
        <i className="fa fa-search" />
      </a>
    </form>
  );
};

export default SearchBar;
