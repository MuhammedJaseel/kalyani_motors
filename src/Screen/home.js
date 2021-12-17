import React, { useEffect, useState } from "react";
import HomeAppsAds from "../Compnent/home_apps_ads";
import HomeBodyHeader from "../Compnent/home_body_header";
import HomeBrands from "../Compnent/home_brands";
import HomeCars from "../Compnent/home_cars";
import HomeFindCar from "../Compnent/home_findcar";
import HomeFooter from "../Compnent/home_footer";
import HomeMunsoon from "../Compnent/home_monsoon";
import HomeQuestions from "../Compnent/home_questions";
import HomeSecurity from "../Compnent/home_security";
import HomeService from "../Compnent/home_service";
import { HomeTop } from "../Compnent/home_top";
import LoadingPage from "../Compnent/loading_page";
import { getData } from "../methord/home";

function Home() {
  const [loading, setloading] = useState(true);
  const [label, setlabel] = useState(null);
  const [items, setitems] = useState(null);

  useEffect(() => getData(setlabel, setloading, setitems));

  return loading ? (
    <LoadingPage />
  ) : (
    <React.StrictMode>
      <HomeTop />
      <HomeBrands />
      <HomeBodyHeader />
      <HomeCars />
      <HomeFindCar />
      <HomeService />
      <HomeSecurity />
      <HomeMunsoon />
      <HomeAppsAds />
      <HomeQuestions />
      <HomeFooter />
    </React.StrictMode>
  );
}

export default Home;
