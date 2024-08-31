import React from "react";
import Card from "../Cards/Card";
import "./FeatureProducts.scss";

const FeatureProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://static.wixstatic.com/media/7567fc_d320b5c8f95f49ccb7a01f62a764cf14~mv2.jpg/v1/fill/w_550,h_550,al_c,lg_1,q_80,enc_auto/7567fc_d320b5c8f95f49ccb7a01f62a764cf14~mv2.jpg rgb&w=1600",
      img2: "https://static.wixstatic.com/media/7567fc_e5919b2beadc481e886be247e5abc968~mv2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_e5919b2beadc481e886be247e5abc968~mv2.jpg rgb&w=1600",
      title: "Campus Mens Sports Shoe",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://static.wixstatic.com/media/7567fc_6d201e67228e4ed4be438749075504d8~mv2.jpg/v1/fill/w_550,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_6d201e67228e4ed4be438749075504d8~mv2.jpg rgb&w=1600",
      img2: "https://static.wixstatic.com/media/7567fc_ae28591da3584e0ea8f3d374c6070aac~mv2.jpg/v1/fill/w_550,h_567,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_ae28591da3584e0ea8f3d374c6070aac~mv2.jpg rgb&w=1600",
      title: "Campus First Mens Sports Shoe",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://static.wixstatic.com/media/7567fc_833ca839113649359e2a663495f5062f~mv2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_833ca839113649359e2a663495f5062f~mv2.jpg rgb&w=1600",
      img2: "https://static.wixstatic.com/media/7567fc_7d3a689ad39e4a48b4e25e7b3d95e8b7~mv2.jpg/v1/fill/w_550,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_7d3a689ad39e4a48b4e25e7b3d95e8b7~mv2.jpg rgb&w=1600",
      title: "Campus Mens Sports Shoes",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://static.wixstatic.com/media/7567fc_a4b5fed852554c0ba9a119c1bb210139~mv2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7567fc_a4b5fed852554c0ba9a119c1bb210139~mv2.jpg rgb&w=1600",
      img2: "https://static.wixstatic.com/media/7567fc_e209e7eac17c442da0f5f11106503d3b~mv2.jpg/v1/fill/w_550,h_413,al_c,lg_1,q_80,enc_auto/7567fc_e209e7eac17c442da0f5f11106503d3b~mv2.jpg rgb&w=1600",
      title: "Campus Mens Sports Shoes",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
 
  ];

  return (
    <div className="featureProducts">

      <div className="top">
        <h1>{type} products </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>

      </div>

      <div className="bottom">
       
        {data.map((item) => (

          <Card item={item} key={item.id} />

        ))}

      </div>

    </div>
  );
};

export default FeatureProducts;
