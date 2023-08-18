import PropagateLoader from "react-spinners/PropagateLoader";

export default function SpinnerLoading() {
  return (
    <div className="spinner-loading">
      <PropagateLoader
        color="#4d4d4d"
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}