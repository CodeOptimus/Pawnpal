import React from "react";
import "./Category.css";
import Phone from "../../assets/Phone.png";
import Watch from "../../assets/Watches.png";
import Furniture from "../../assets/Furniture.png";
import Laptop from "../../assets/Laptop.png";
import Shoes from "../../assets/Shoes.png";
import Electronics from "../../assets/Electronics.png";
import Bags from "../../assets/Bags.png";
import Accessories from "../../assets/Accessories.png";
import FlashIcon from "../../assets/Flash-icon.png";
import DropdownIcon from "../../assets/Dropdown-icon.png";
import WatchBlueBg from "../../assets/Watch-blue-bg.png";
import Sneaker from "../../assets/Sneaker.png";
import InfinixPhone from "../../assets/Infinix-phone.png";
import Mac from "../../assets/Mac.png";
import Headphones from "../../assets/Headphones.png";

function Category() {
  return (
    <>
      <div className="category">
        <h2 className="category-heading">Category of Items on Sale</h2>
        <p className="category-products">
          Shop now and explore our wide range of products!
        </p>
        <div className="category-container">
          <div className="category-item">
            <img src={Phone} alt="phone" />
            <p className="item-name">Phones</p>
          </div>

          <div className="category-item">
            <img src={Watch} alt="watch" />
            <p className="item-name">Watches</p>
          </div>

          <div className="category-item">
            <img src={Furniture} alt="furniture" />
            <p className="item-name">Furniture</p>
          </div>

          <div className="category-item">
            <img src={Laptop} alt="laptop" />
            <p className="item-name">Laptops</p>
          </div>

          <div className="category-item">
            <img src={Shoes} alt="shoes" />
            <p className="item-name">Shoes</p>
          </div>

          <div className="category-item">
            <img src={Electronics} alt="electronics" />
            <p className="item-name">Electronics</p>
          </div>

          <div className="category-item">
            <img src={Bags} alt="bags" />
            <p className="item-name">Bags</p>
          </div>

          <div className="category-item">
            <img src={Accessories} alt="accessories" />
            <p className="item-name">Accessories</p>
          </div>
        </div>

        <div className="flash-sales">
          <div className="flash-sale-orange-div">
            <div className="text">
              <h3>
                <img src={FlashIcon} alt="flash-icon" className="flash-icon" />
                Flash Sales
              </h3>
              <h3>This Round Ends in 20h : 30m : 20s</h3>
              <h3>
                View All
                <img
                  src={DropdownIcon}
                  alt="dropdown-icon"
                  className="dropdown-icon"
                />
              </h3>
            </div>
          </div>
        </div>

        <div className="flash-sales-container">
          <div className="flash-sales-items">
            <img src={WatchBlueBg} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={Sneaker} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={InfinixPhone} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={Mac} alt="phone" />
          </div>
        </div>

        <div className="mega-sales">
          <div className="mega-sales-text">
            <h1>
              Mega Sales
              <br />
              Extravaganza!
            </h1>
            <p>
              Shop Headset From Jumia Ghana @Lowest Prices - <br />
              Find Headset Offers & Deals from Jumia with <br />
              Secure Payment - Fast Delivery - Free Returns.
            </p>
          </div>
          <div className="mega-sales-img">
            <h1>50% OFF</h1>
            <img src={Headphones} alt="headphones" />
          </div>
          <div className="mega-sales-btn">
            <h1>Promo</h1>
            <p>FridayDeal</p>
            <button>Start Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
