import React from 'react';

export const Nav = (Image) => {
  return (
    <div >
      <div className='Nav'>
      <div>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
      </div>
      <div className='Search' >
        <input type="text" placeholder='Search for products, brand more' />
        <button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </button>
      </div>
      <div className='Login' >
        <a href="Login">Login</a>
      </div>
      <div>
        <span>
            Become a Seller
        </span>
      </div>
      <div> 
        <span> 
            More
        </span>
        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="zZ3yfL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg>
      </div>
      </div>
    </div>
  );
};

export const Nav2 = () => {
    const arr = [
      {image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100 ", label: "Electronics", link: "/electronics" },
      {image:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", label: "TVs Application", link: "/tvs" },
      {image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100", label: "Men", link: "/men" },
      {image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100", label: "Women", link: "/women" },
      {image:"https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100", label: "Baby & Kids", link: "/kids" },
      {image:"https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100", label: "Home and Furniture", link: "/home" },
      {image:"https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100", label: "Fights", link: "/flights" },
      {image:"https://static.india.com/wp-content/uploads/2021/09/Flipkart-Big-Billion-Days-Sale.jpg", label: "Offer Zone", link: "/offers" }
    ];
  
    const linkElements = arr.map((item, index) => (
        <div  key={index}>
          <img src={item.image} alt={item.label} />
          <span><a href={item.link}>{item.label}</a></span>
        </div>
      ));
    
      return (
        <div className='nav-2'>
          {linkElements}
        </div>
      );
    };
// export function HowerNav(){
//     const arr = [
//         {image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100 ", label: "Electronics", link: "/electronics" },
//         {image:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100", label: "TVs Application", link: "/tvs" },
//         {image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100", label: "Men", link: "/men" },
//         {image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100", label: "Women", link: "/women" },
//         {image:"https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100", label: "Baby & Kids", link: "/kids" },
//         {image:"https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100", label: "Home and Furniture", link: "/home" },
//         {image:"https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100", label: "Fights", link: "/flights" },
//         {image:"https://static.india.com/wp-content/uploads/2021/09/Flipkart-Big-Billion-Days-Sale.jpg", label: "Offer Zone", link: "/offers" }
//       ];
//       const hoveredElements = arr.map((item, index) => (
//         <div key={index}>
//           <li>
//             <a href={item.link}>{item.label}</a>
//           </li>
//         </div>
//       ));
    
//       return (
//         <div className='Hower-Nav'>
//          {hoveredElements}
//         </div>
//       );
//     }


