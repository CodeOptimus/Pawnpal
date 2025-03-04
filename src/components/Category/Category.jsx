import React from "react";
import { assets } from "../../assets/assets";
import "./Category.css";

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
            <img src={assets.Phone} alt="phone" />
            <p className="item-name">Phones</p>
          </div>

          <div className="category-item">
            <img src={assets.Watch} alt="watch" />
            <p className="item-name">Watches</p>
          </div>

          <div className="category-item">
            <img src={assets.Furniture} alt="furniture" />
            <p className="item-name">Furniture</p>
          </div>

          <div className="category-item">
            <img src={assets.Laptop} alt="laptop" />
            <p className="item-name">Laptops</p>
          </div>

          <div className="category-item">
            <img src={assets.Shoes} alt="shoes" />
            <p className="item-name">Shoes</p>
          </div>

          <div className="category-item">
            <img src={assets.Electronics} alt="electronics" />
            <p className="item-name">Electronics</p>
          </div>

          <div className="category-item">
            <img src={assets.Bags} alt="bags" />
            <p className="item-name">Bags</p>
          </div>

          <div className="category-item">
            <img src={assets.Accessories} alt="accessories" />
            <p className="item-name">Accessories</p>
          </div>
        </div>

        <div className="flash-sales">
          <div className="flash-sale-orange-div">
            <div className="text">
              <h3>
                <img
                  src={assets.FlashIcon}
                  alt="flash-icon"
                  className="flash-icon"
                />
                Flash Sales
              </h3>
              <h3>This Round Ends in 20h : 30m : 20s</h3>
              <h3>
                View All
                <img
                  src={assets.DropdownIcon}
                  alt="dropdown-icon"
                  className="dropdown-icon"
                />
              </h3>
            </div>
          </div>
        </div>

        <div className="flash-sales-container">
          <div className="flash-sales-items">
            <img src={assets.WatchBlueBg} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={assets.Sneaker} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={assets.InfinixPhone} alt="phone" />
          </div>

          <div className="flash-sales-items">
            <img src={assets.Mac} alt="phone" />
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
            <h2>50% OFF</h2>
          </div>
          <div className="mega-sales-btn">
            <img
              src={assets.Headphones}
              alt="headphones"
              className="theme-img"
            />
            {/* <div className="waves">
              <img src={assets.Rings} alt="ring waves" className="waves-img"/>
            </div> */}
            <div className="start-shopping">
              <h1>Promo</h1>
              <p>FridayDeal</p>
              <button>Start Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
