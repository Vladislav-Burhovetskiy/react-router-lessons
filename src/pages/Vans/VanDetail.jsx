import React, { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";
import SpinnerLoading from "../../utils/Spinner";

export function loader({ params }) {
  return defer({ van: getVans(params.id) });
}

export default function VanDetail() {
  const location = useLocation();
  const promiseData = useLoaderData();

  // const searchType = location.state?.search || "";
  const searchType = location.state ? "?" + location.state.search : "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link
        to={`..${searchType}`}
        // to=".."
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {type} vans</span>
      </Link>
      <Suspense fallback={<SpinnerLoading />}>
        <Await resolve={promiseData.van}>
          {(van) => {
            return (
              <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
