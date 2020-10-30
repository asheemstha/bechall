import React from "react";
import { Link } from "react-router-dom";
import LogoFull from "./../../Assets/Images/Logos/LogoFull.png";
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from "react-icons/fi";
import $ from "jquery";
const Header = () => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 50) {
      $("header.mainHeader").addClass("scrolledHeader");
    } else {
      $("header.mainHeader").removeClass("scrolledHeader");
    }
  });
  const pullSearchBar = () => {
    if ($(".hcr__searchBar").hasClass("pulledDownSearchBar")) {
      $(".hcr__searchBar").removeClass("pulledDownSearchBar");
    } else {
      $(".hcr__searchBar").addClass("pulledDownSearchBar");
    }
  };
  return (
    <header className="mainHeader">
      <div className="headerContent - fill - flex">
        <div className="headerContent__left - flex">
          <div className="hcl__burgerCont - iconCont - flex">
            <div className="burger">
              <div className="line1">
                <div className="sec1"></div>
              </div>
              <div className="line2">
                <div className="sec1"></div>
              </div>
            </div>
          </div>
          <Link to="/" className="brandLink">
            <img src={LogoFull} alt="" className="logoImg" />
          </Link>
          <div className="hcl__branchLinks - flex">
            <Link className="branchLink">Furniture</Link>
            <Link className="branchLink">Real-Estates</Link>
            <Link className="branchLink">Offers</Link>
          </div>
        </div>
        <div className="headerContent__right - flex">
          <div className="hcr__searchBar - flex">
            <input
              type="text"
              className="headerSearchInput"
              placeholder="Search your wishlist"
            />
            <div className="searchIconCont - flex" onClick={pullSearchBar}>
              <FiSearch className="searchIcon" />
            </div>
          </div>
          <div className="hcr__accountSessions - flex">
            <div className="accountElement shoppingCartIconCont - iconCont">
              <FiShoppingCart className="shoppingCartIcon" />
            </div>
            <div className="accountElement heartIconCont - iconCont">
              <FiHeart className="heartIcon" />
            </div>
            <div
              className="accountElement searchIconCont - iconCont -- searchPullDownTrig"
              onClick={pullSearchBar}
            >
              <FiSearch className="searchIcon" />
            </div>
            <div className="accountElement userIconCont - iconCont">
              <FiUser className="userIcon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
