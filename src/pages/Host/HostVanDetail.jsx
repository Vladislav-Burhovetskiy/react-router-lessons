import React, { Suspense } from "react";
import { useParams, Link, useLoaderData, defer, Await } from "react-router-dom";
import HostVanLayout from "../.././components/HostVanLayout";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils/utils";
import SpinnerLoading from "../../utils/Spinner";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ currentVan: getHostVans(params.id) });
}

export default function HostVanDetail() {
  // const { id } = useParams();
  const promiseData = useLoaderData();

  return (
    <section>
      <Link to="../vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <Suspense fallback={<SpinnerLoading />}>
        <Await resolve={promiseData.currentVan}>
          {(currentVan) => {
            return (
              <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                  <img src={currentVan.imageUrl} />
                  <div className="host-van-detail-info-text">
                    <i className={`van-type van-type-${currentVan.type}`}>
                      {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                  </div>
                </div>

                <HostVanLayout currentVan={currentVan} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
