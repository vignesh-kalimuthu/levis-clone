import React from "react";

import FreeShippingBanner from "./FreeShippingBanner";
import BannerCarousel from "./BannerCarousel";
import TrendingProducts from "./TrendingProducts";
import PromoBanner from "./PromoBanner";
import SpecialOfferBanner from "./SpecialOfferBanner";
import PopularProducts from "./PopularProducts";
import LargePromoBanner from "./LargePromoBanner";
import BackPack from "./BackPack";
import LatesetDrop from "./LatestDrop";
import PromoBanner2 from "./PromoBanner2";
import CategoryShowcase from "./CategoryShowCase";
import Footer from "./Footer";

const MainContent = () => {
  return (
    <>
      <FreeShippingBanner />
      <BannerCarousel />
      <TrendingProducts />
      <PromoBanner />
      <SpecialOfferBanner />
      <PopularProducts />
      <LargePromoBanner />
      <BackPack />
      <LatesetDrop />
      <PromoBanner2 />
      <CategoryShowcase />
      <Footer />
    </>
  );
};

export default MainContent;
