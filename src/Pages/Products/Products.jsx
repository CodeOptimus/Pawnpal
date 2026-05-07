import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { assets } from "../../assets/assets";
import { useCart } from "../../contexts/CartContext";
import "./Products.css";
import LoadingSpinner from "../../components/LoadingSpinner";

function Products() {
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setIsLoading(true);
        setLoadError("");

        const res = await fetch("/api/products.json", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          throw new Error(`Failed to load products (${res.status})`);
        }

        const data = await res.json();
        const nextProducts = Array.isArray(data?.products) ? data.products : [];

        if (isMounted) {
          setProducts(nextProducts);
          setIsLoading(false);
        }
      } catch (err) {
        if (controller.signal.aborted) return;

        if (isMounted) {
          setLoadError(err instanceof Error ? err.message : "Failed to load products");
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    addToCart({
      ...product,
      image: assets[product.imageKey] || assets.iphone13_for_products,
      quantity: quantities[product.id] || 1,
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const visibleProducts = useMemo(() => {
    if (!q) return products;

    return products.filter((p) => {
      const haystack = `${p.name ?? ""} ${p.storage ?? ""} ${p.price ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [products, q]);

  return (
    <>
      <Navbar />
      <div className="products-container">
        <div className="products-header">
          <h1>Phones and Accessories</h1>
          <p>We give you quality and affordable products</p>
        </div>

        {loadError ? (
          <div style={{ padding: "16px 0" }}>
            <p style={{ margin: 0 }}>Couldn&apos;t load products.</p>
            <p style={{ margin: "6px 0 0", opacity: 0.8 }}>{loadError}</p>
          </div>
        ) : null}

        <div className="products-grid">
          {visibleProducts.map((product) => (
            <div key={product.id} className="the-product">
              <div className="product-image">
                <img
                  src={assets[product.imageKey] || assets.iphone13_for_products}
                  alt={product.name || "Product image"}
                />
              </div>
              <div className="product-details">
                <div className="top">
                  <div className="detail">
                    <h2>
                      {product.name} <br />
                      Charger & Earphone
                    </h2>
                    <p className="storage-details">{product.storage}</p>
                  </div>
                  <div className="price">
                    {(product.currency || "GHC") + " "}
                    {product.price}
                  </div>
                </div>

                <div className="bottom">
                  <div className="review">
                    <img
                      src={assets[product.ratingImageKey] || assets.stars}
                      alt="Rating"
                    />
                  </div>
                  <div className="product-actions">
                    {!addedItems[product.id] ? (
                      <>
                        <div className="quantity-controls">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span>{quantities[product.id] || 1}</span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="add-to-cart-btn"
                        >
                          <img src={assets.add_to_cart} alt="" />
                          Add to Cart
                        </button>
                      </>
                    ) : (
                      <button className="added-to-cart-btn" disabled>
                        {quantities[product.id] || 1} Item
                        {quantities[product.id] > 1 ? "s" : ""} Added
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
