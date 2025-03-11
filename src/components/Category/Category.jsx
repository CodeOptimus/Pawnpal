import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Category.css";


const CategoryItem = ({ image, alt, name }) => (
  <div className="category-item">
    <img src={image} alt={alt} />
    <p className="item-name">{name}</p>
  </div>
);

const FlashSalesItem = ({ image, alt }) => (
  <div className="flash-sales-items">
    <img src={image} alt={alt} />
  </div>
);

const categories = [
  { image: assets.Phone, alt: "phone", name: "Phones" },
  { image: assets.Watch, alt: "watch", name: "Watches" },
  { image: assets.Furniture, alt: "furniture", name: "Furniture" },
  { image: assets.Laptop, alt: "laptop", name: "Laptops" },
  { image: assets.Shoes, alt: "shoes", name: "Shoes" },
  { image: assets.Electronics, alt: "electronics", name: "Electronics" },
  { image: assets.Bags, alt: "bags", name: "Bags" },
  { image: assets.Accessories, alt: "accessories", name: "Accessories" },
];

const flashSales = [
  { image: assets.WatchBlueBg, alt: "watch" },
  { image: assets.Sneaker, alt: "sneaker" },
  { image: assets.InfinixPhone, alt: "phone" },
  { image: assets.Mac, alt: "mac" },
];

const backgroundColors = [
  "#8B49A9",
  "rgba(0, 0, 0, 1)",
  "rgba(35, 14, 81, 1)"
];

const themeImages = [
  assets.Headphones,
  assets.AppleAirpodsPro,
  assets.IceWatch
];


function Category() {
  const [currentColor, setCurrentColor] = useState(0);
  const [currentThemeImage, setCurrentThemeImage] = useState(0);

  // change background color and theme image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % backgroundColors.length);
      setCurrentThemeImage((prev) => (prev + 1) % themeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
      <div className="category">
        <h2 className="category-heading">Category of Items on Sale</h2>
        <p className="category-products">
          Shop now and explore our wide range of products!
        </p>

        <div className="category-container">
        {categories.map((item, index) => (
          <CategoryItem key={index} {...item} />
        ))}
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
                  src={assets.DropdownIconWhite}
                  alt="dropdown icon white"
                  className="dropdown-icon"
                />
              </h3>
            </div>
          </div>
        </div>

        <div className="flash-sales-container">
        {flashSales.map((item, index) => (
          <FlashSalesItem key={index} {...item} />
        ))}
      </div>

        <div className="mega-sales" style={{ backgroundColor: backgroundColors[currentColor] }}>

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
            <div className="waves">
              <img src={assets.Rings} alt="ring waves" className="waves-img"/>
            </div>
            <img
              src={themeImages[currentThemeImage]}
              alt="headphones"
              className="theme-img"
            />
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
