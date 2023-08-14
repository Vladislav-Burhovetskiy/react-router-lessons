import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from ".././pages/Home";
import About from ".././pages/About";
import NotFound from ".././pages/NotFound";
import Login, { loader as loginLoader } from ".././pages/Login";
import Vans, { loader as vansLoader } from ".././pages/Vans/Vans";
import VanDetail, {
  loader as vansDetailLoader,
} from ".././pages/Vans/VanDetail";
import Dashboard from ".././pages/Host/Dashboard";
import Income from ".././pages/Host/Income";
import HostVans, { loader as hostVansLoader } from ".././pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from ".././pages/Host/HostVanDetail";
import Reviews from ".././pages/Host/Reviews";
import HostVanInfo from ".././pages/Host/HostVanInfo";
import HostVanPricing from ".././pages/Host/HostVanPricing";
import HostVanPhotos from ".././pages/Host/HostVanPhotos";
import Layout from ".././components/Layout";
import HostLayout from ".././components/HostLayout";
import Error from ".././components/Error";
import { reqiureAuth } from "../utils/utils";

import "../../server/server";

const routing = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
        path="login" 
        element={<Login />} 
        loader={loginLoader} 
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vansDetailLoader}
      />

      <Route
        path="host"
        element={<HostLayout />}
        loader={async () => await reqiureAuth()}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => await reqiureAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await reqiureAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await reqiureAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await reqiureAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await reqiureAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await reqiureAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routing;
