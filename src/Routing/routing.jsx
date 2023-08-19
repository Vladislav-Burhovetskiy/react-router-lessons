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
import Login, {
  loader as loginLoader,
  action as loginAction,
} from ".././pages/Login";
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
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vansDetailLoader}
      />

      <Route
        path="host"
        element={<HostLayout />}
        loader={async ({ request }) => await reqiureAuth(request)}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await reqiureAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await reqiureAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await reqiureAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVansDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await reqiureAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await reqiureAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await reqiureAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routing;
