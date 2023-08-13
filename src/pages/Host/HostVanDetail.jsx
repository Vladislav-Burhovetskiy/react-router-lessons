import React from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";
import HostVanLayout from "../.././components/HostVanLayout";
import { getHostVans } from "../../api";
import { reqiureAuth } from "../../utils/utils";

export async function loader({ params }) {
  await reqiureAuth();
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  // const { id } = useParams();
  const currentVan = useLoaderData();

  return (
    <section>
      <Link to="../vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

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
    </section>
  );
}
