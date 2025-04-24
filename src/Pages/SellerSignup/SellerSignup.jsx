import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload, MdCheckCircle } from "react-icons/md";
import "./SellerSignup.css";
import LoadingSpinner from "../../components/LoadingSpinner";

function SellerSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    gender: "",
    dateOfBirth: "",
    digitalAddress: "",
    phoneNumber: "",
    ghanaCardNumber: "",
    location: "",
    storeName: "",
    productImage: null,
    productName: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    // Scroll to top when step changes
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        productImage: URL.createObjectURL(file),
      }));
      setShowUploadSuccess(true);
    }
  };

  const handleCloseSuccessPopup = () => {
    setShowUploadSuccess(false);
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="seller-step">
            <h2 className="seller-heading">Seller Terms & Conditions</h2>
            <div className="terms-content">
              <h3>
                By registering as a seller ("Seller", "you", "your") on PawnPal
                ("Platform", "we", "us", "our"), you agree to the following
                terms and conditions ("Agreement") governing your use of the
                Platform for selling products and services. If you do not agree
                with these terms, do not register or use the Platform as a
                seller.
              </h3>
              <ol>
                <li>
                  <p>Eligibility</p>
                  <p>To register as a seller, you must:</p>
                  <ul>
                    <li>Be at least 18 years old.</li>
                    <li>
                      Have a valid email address, phone number, and payment
                      method.
                    </li>
                    <li>
                      Provide all required business information, including but
                      not limited to tax identification, company registration,
                      and any applicable licenses.
                    </li>
                    <li>
                      Comply with all applicable local, state, and international
                      laws and regulations.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Seller Account Registration</p>
                  <ul>
                    <li>
                      You must create an account to become a seller on the
                      Platform by providing accurate and up-to-date information.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account credentials (username, password) and all
                      activities under your account.
                    </li>
                    <li>
                      We reserve the right to suspend or terminate your account
                      if we suspect any fraudulent or unauthorized activity.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Product Listings</p>
                  <ul>
                    <li>
                      You may list only products that are legal, non-prohibited,
                      and comply with our Platform's guidelines, including
                      intellectual property, safety, and health regulations.
                    </li>
                    <li>
                      All product listings must include accurate descriptions,
                      images, pricing, and availability. You must not mislead
                      customers about the nature or quality of your products.
                    </li>
                    <li>
                      We reserve the right to remove any listing that violates
                      our policies or legal requirements.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Fees and Payments</p>
                  <ul>
                    <li>
                      As a seller, you agree to pay any fees associated with
                      listing and selling products on the Platform, including
                      but not limited to transaction fees, processing fees, and
                      advertising costs.
                    </li>
                    <li>
                      Payments to sellers will be processed according to the
                      Platform's payment policies. You must ensure that your
                      payment account is set up correctly to receive payments.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Order Fulfillment and Shipping</p>
                  <ul>
                    <li>
                      You are responsible for fulfilling orders in a timely
                      manner, including shipping, handling, and any associated
                      charges.
                    </li>
                    <li>
                      You must adhere to the Platform's shipping policies,
                      including providing tracking information and ensuring
                      delivery within the stated time frame.
                    </li>
                    <li>
                      Failure to meet shipping obligations may result in
                      penalties, including but not limited to account
                      suspension, fines, or removal of your products from the
                      Platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Returns, Refunds, and Cancellations</p>
                  <ul>
                    <li>
                      You must adhere to the Platform's return, refund, and
                      cancellation policies.
                    </li>
                    <li>
                      You agree to process returns and refunds promptly as
                      required by law and the Platform's policies.
                    </li>
                    <li>
                      Any disputes with customers regarding returns, refunds, or
                      cancellations must be resolved between you and the
                      customer, with the Platform acting as a mediator if
                      necessary.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Seller Conduct</p>
                  <ul>
                    <li>
                      You agree to act with professionalism and fairness in all
                      interactions with customers and the Platform.
                    </li>
                    <li>
                      You must not engage in any unlawful, abusive, or unethical
                      behavior, including but not limited to harassment,
                      fraudulent practices, or manipulation of reviews.
                    </li>
                    <li>
                      You must not interfere with other sellers or the
                      Platform's operations.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Intellectual Property</p>
                  <ul>
                    <li>
                      You retain ownership of the intellectual property rights
                      to your products and content you submit. However, by
                      listing your products on the Platform, you grant us a
                      non-exclusive, worldwide, royalty-free license to use,
                      display, and promote your products within the Platform.
                    </li>
                    <li>
                      You must ensure that your products do not infringe on the
                      intellectual property rights of others.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Indemnification</p>
                  <ul>
                    <li>
                      You agree to indemnify, defend, and hold harmless the
                      Platform and its affiliates from any claims, losses,
                      damages, liabilities, and expenses (including legal fees)
                      arising out of your violation of this Agreement,
                      infringement of third-party rights, or other wrongful acts
                      related to your use of the Platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Platform's Rights</p>
                  <ul>
                    <li>
                      We reserve the right to modify, suspend, or terminate the
                      Platform or your access to the Platform at any time, for
                      any reason, and without notice.
                    </li>
                    <li>
                      We may, at our discretion, remove listings, suspend or ban
                      accounts, or take other actions to ensure the integrity of
                      the Platform and compliance with these terms and
                      conditions.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Privacy and Data Protection</p>
                  <ul>
                    <li>
                      We collect, store, and process your personal and business
                      data according to our Privacy Policy.
                    </li>
                    <li>
                      By using the Platform, you agree to our collection and use
                      of your information as outlined in the Privacy Policy.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Limitation of Liability</p>
                  <ul>
                    <li>
                      To the fullest extent permitted by law, we shall not be
                      liable for any indirect, incidental, special,
                      consequential, or punitive damages arising out of or
                      related to this Agreement or your use of the Platform,
                      even if we have been advised of the possibility of such
                      damages.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Dispute Resolution</p>
                  <ul>
                    <li>
                      Any disputes arising under this Agreement will be governed
                      by the laws of [Country/Region].
                    </li>
                    <li>
                      All disputes shall be resolved through binding
                      arbitration, with each party bearing its own legal costs,
                      unless otherwise stated in the Platform's dispute
                      resolution policy.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Amendments</p>
                  <ul>
                    <li>
                      We reserve the right to modify these terms and conditions
                      at any time. Any changes will be posted on this page, and
                      your continued use of the Platform after such changes
                      constitutes your acceptance of the updated terms.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Termination</p>
                  <ul>
                    <li>
                      We may terminate or suspend your seller account at any
                      time if you breach these terms and conditions or if we
                      believe that your actions may harm the Platform or its
                      users.
                    </li>
                    <li>
                      You may terminate your seller account by providing written
                      notice to the Platform. Any outstanding fees or orders
                      must be fulfilled before termination.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Miscellaneous</p>
                  <ul>
                    <li>
                      This Agreement constitutes the entire understanding
                      between the parties concerning your use of the Platform,
                      superseding all prior agreements or understandings.
                    </li>
                    <li>
                      If any part of this Agreement is found to be invalid or
                      unenforceable, the rest of the Agreement will remain in
                      full force and effect.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="terms-acceptance">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span className="checkmark"></span>By clicking "I Agree" or
                registering as a seller on PawnPal, you acknowledge that you
                have read, understood, and accepted these terms and conditions.
              </label>
              <button
                className="next-btn"
                disabled={!acceptedTerms}
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="seller-step seller-form">
            <h2 className="seller-heading">Want to Sell on Pawnpal?</h2>
            <p>Enter your details to get going</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(3);
              }}
              className="seller-details-form"
            >
              <p>Personal Details</p>
              <div className="form-grid">
                <div className="seller-form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="eg. John"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="eg. Doe"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    placeholder="eg. Male"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="eg. 2000/01/01"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="eg. Ahoe, Ho"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Digital Address</label>
                  <input
                    type="text"
                    name="digitalAddress"
                    value={formData.digitalAddress}
                    onChange={handleInputChange}
                    placeholder="eg. VC-000-2543-8"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={"eg, 0245689456"}
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Ghana Card Number</label>
                  <input
                    type="text"
                    name="ghanaCardNumber"
                    value={formData.ghanaCardNumber}
                    onChange={handleInputChange}
                    placeholder={"eg, GHA-73156984-2"}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="next-btn">
                Next
              </button>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="seller-step product-upload">
            <h2 className="seller-heading">Product Information</h2>
            <div className="product-content">
              <div className="image-upload">
                <input
                  type="file"
                  id="product-image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
                <label htmlFor="product-image" className="upload-area">
                  {formData.productImage ? (
                    <img src={formData.productImage} alt="Product preview" />
                  ) : (
                    <>
                      <MdCloudUpload size={50} />
                      <p>Click to upload product image</p>
                    </>
                  )}
                </label>
              </div>
              <div className="product-details">
                <div className="seller-form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    placeholder="eg. Iphone 14 Pro Max"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Name of Store</label>
                  <input
                    type="text"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    placeholder="eg. Node8"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="eg. Ahoe, Ho"
                    required
                  />
                </div>
                <div className="seller-form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="eg, 50.00"
                    required
                  />
                </div>

                <div className="product-details-bottom">
                  <p className="to-note">
                    Please make sure you are uploading the right information and
                    quality images
                  </p>
                  <div className="buttons">
                    <button className="upload-btn">Upload</button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="seller-signup-container">
      {renderStep()}
      {showUploadSuccess && (
        <div className="upload-success-popup">
          <MdCheckCircle className="success-icon" />
          <p>Image uploaded successfully!</p>
          <button className="close-btn" onClick={handleCloseSuccessPopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default SellerSignup;
