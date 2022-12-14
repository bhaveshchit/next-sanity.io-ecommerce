import React from 'react';

import { client } from '../lib/client';
//import { Product, FooterBanner, HeroBanner } from '../components';
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner'
//import Navbar from '../components/Navbar';
const Home = ({ products, bannerData }) => (
  <div>
    
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;