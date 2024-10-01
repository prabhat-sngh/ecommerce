import React, { useState, useEffect } from 'react';

import './App.css'; // Import the CSS file

const data = {
  categories: [
    {
      category_name: "Men",
      category_products: [
        {
          id: "1",
          title: "Mens Kurta",
          price: "1199",
          compare_at_price: "1299",
          vendor: "Manyvar",
          badge_text: "Wedding Special",
          image: "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384",
          second_image: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267",
        },
        {
          id: "2",
          title: "RCB Tshirt",
          price: "2199",
          compare_at_price: "4299",
          vendor: "Puma",
          badge_text: null,
          image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/27a1d087-dc81-46a0-9b86-505f6491b5931679431326265RoyalChallengersBangalore2023MensReplicaJersey1.jpg",
          second_image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/e0ac3f07-f869-4d36-a8fa-47bab62c579e1679431326230RoyalChallengersBangalore2023MensReplicaJersey3.jpg",
        },
        // More products...
        {
          "id": "3",
          "title": "Green Charm",
          "price": "1399",
          "compare_at_price": "1499",
          "vendor": "Myntra",
          "badge_text": "On offer",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22372642/2023/3/16/52d27507-a870-456b-addd-e62aefa0f79a1678911375020ESSLogoRegularFitMensT-Shirt1.jpg",
          "second_image": "empty"
        },
        {
          "id": "4",
          "title": "Mens Tshirt",
          "price": "599",
          "compare_at_price": "799",
          "vendor": "Myntra",
          "badge_text": "New season",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/215a939a-b567-4110-9a2b-33d0e191d5c61690363492956-Ess-Multicolor-Mens-T-shirt-971690363492544-1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/51b94b0f-b2f1-4f40-a976-0a9b3110114c1690363492943-Ess-Multicolor-Mens-T-shirt-971690363492544-2.jpg"
        }
      ],
    },
    {
      category_name: "Women",
      category_products: [
        {
          id: "1w",
          title: "Women Kurti",
          price: "1199",
          compare_at_price: "1299",
          vendor: "Manyvar",
          badge_text: "New season",
          image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/cb1a5027-184f-4c8a-a96b-154987ff47f31692955360626-HERENOW-Women-Kurtis-1661692955360126-1.jpg",
          second_image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/3c5fdff6-e41a-4bbe-9539-11c9ea6a1c8f1692955360564-HERENOW-Women-Kurtis-1661692955360126-3.jpg",
        },
        // More products...
        {
          "id": "2w",
          "title": "Yellow casual dress",
          "price": "199",
          "compare_at_price": "299",
          "vendor": "Myntra",
          "badge_text": null,
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/55497e43-260c-4a3f-865b-059d9edd861a1659942435451-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/c8c6a172-cd4d-4637-9078-2e791cd7dbfe1659942435386-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-4.jpg"
        },
        {
          "id": "3w",
          "title": "Women Black & Golden A-Line Kurti",
          "price": "1399",
          "compare_at_price": "1499",
          "vendor": "Myntra",
          "badge_text": "On offer",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/e50bd870-573d-4f6f-9ebc-938bda01edc31606382198225WomenBlackMultiColourPrintedKurti1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/32c3c29c-5be7-4978-8e03-0851b2ed33601606382198380WomenBlackMultiColourPrintedKurti3.jpg"
        },
        {
          "id": "4w",
          "title": "METRO-FASHION",
          "price": "1599",
          "compare_at_price": "1799",
          "vendor": "Myntra",
          "badge_text": "New season",
          "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg",
          "second_image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg"
        }
      ],
    },
    // More categories...
    {
      "category_name": "Kids",
      "category_products": [
        {
          "id": "1k",
          "title": "Chicco",
          "price": "1199",
          "compare_at_price": "1399",
          "vendor": "Myntra",
          "badge_text": "Wedding Special",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/85af90ad-db0a-47ee-b26f-4b2168cc31ae1618209422880ChiccoBoysWhite1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/9a744074-86f3-4c0f-810b-2877e4bdf1701618209422918ChiccoBoysWhite3.jpg"
        },
        {
          "id": "2k",
          "title": "Girls White & Black Printed Sustainable Tracksuit",
          "price": "2199",
          "compare_at_price": "4299",
          "vendor": "Myntra",
          "badge_text": "New season",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/1fe8ff1f-6c80-402e-ac72-cbdccb8f77371632552170304Chicco1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/fc288e63-8e9e-4f02-8e70-1a3b7452674f1632552170439Chicco2.jpg"
        },
        {
          "id": "3k",
          "title": "Custom t-shirt",
          "price": "1399",
          "compare_at_price": "1499",
          "vendor": "Myntra",
          "badge_text": "On offer",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/167ed0a2-7936-4d1a-955b-dfff4e53f1281643289347488Tshirts1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/13822874-aa23-4eb6-ab6a-026021ea503a1643289347112Tshirts2.jpg"
        },
        {
          "id": "4k",
          "title": "Kids Tshirt",
          "price": "599",
          "compare_at_price": "799",
          "vendor": "Myntra",
          "badge_text": "New season",
          "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg",
          "second_image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg"
        }
      ]
    }
  ],
};

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);


  useEffect(() => {
    // Simulate fetching data
    setCategories(data.categories);
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };


  ///////////////////////////////////////////////////////////////////////
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  ///////////////////////////////////////////////////////////////////////


  const filteredCategories = selectedCategory === 'All'
    ? categories
    : categories.filter((category) => category.category_name === selectedCategory);

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Ecommerce App</h1>
      </header>

      {/* Navigation */}
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <button onClick={() => handleCategoryClick('All')} style={buttonStyle}>All</button>
        <button onClick={() => handleCategoryClick('Men')} style={buttonStyle}>Men</button>
        <button onClick={() => handleCategoryClick('Women')} style={buttonStyle}>Women</button>
        <button onClick={() => handleCategoryClick('Kids')} style={buttonStyle}>Kids</button>
      </div>

      {/* Category Products
      <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {filteredCategories.map((category) => (
          <div key={category.category_name} style={{ width: '100%', marginBottom: '20px' }}>
            <h2>{category.category_name}</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {category.category_products.map((product) => (
                <div key={product.id} style={productCardStyle}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3>{product.title}</h3>
                  <p>Vendor: {product.vendor}</p>
                  <p>
                    <b>Price: ₹{product.price}</b> <span style={{ textDecoration: 'line-through', color: 'gray' }}>₹{product.compare_at_price}</span>
                  </p>
                  {product.badge_text && <p style={{ color: 'green' }}>{product.badge_text}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {/* Category Products */}
<div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {filteredCategories.map((category) => (
    <div key={category.category_name} style={{ width: '100%', marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>{category.category_name}</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {category.category_products.map((product) => (
          <div key={product.id} style={{ ...productCardStyle, flex: '1 1 200px', maxWidth: '300px' }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <h3 style={{ fontSize: '1.2em', textAlign: 'center' }}>{product.title}</h3>
            <p style={{ textAlign: 'center' }}>Vendor: {product.vendor}</p>
            <p style={{ textAlign: 'center' }}>
              <b>Price: ₹{product.price}</b>
              {product.compare_at_price && (
                <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '5px' }}>
                  ₹{product.compare_at_price}
                </span>
              )}
            </p>
            {product.badge_text && <p style={{ color: 'green', textAlign: 'center' }}>{product.badge_text}</p>}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
{/* Cart */}
<div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} (x{item.quantity}) - ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h3>Total Price: ₹{getTotalPrice()}</h3>
      </div>
    </div>
  );
};

// Styling
const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#282c34',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

const productCardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  width: '200px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export default App;