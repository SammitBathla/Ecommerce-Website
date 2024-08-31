import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {

return(

     <div className="categories"> 
        <div className="col">
            <div className="row">
            <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          /> 
          <button>
            <Link className="link" to="/products/1">
                Sale
            </Link>
          </button>
        </div>

        <div className="row">
        <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
         </div>
        </div>
        
        <div className="col">
            <div className="row">
            {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
         </div>
        </div>
        
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className=" row">
                    <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
              </div>
            </div>
            <div className="col">
                <div className=" row">
                {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
              </div>
             </div>
            </div>
            
            <div className="row">
            <img
            src="https://static.wixstatic.com/media/7567fc_7ee1d4959bb34f0ea683a3735d76eed1~mv2.png/v1/fill/w_683,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Photo_1625568164277.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
         </div>
        </div>
    </div>

    )
};

export default Categories;