import { Outlet, Link } from "react-router-dom";
import { urls } from "../urls";
import { imageInputType } from "../utils/constants";
import { useDispatch } from "react-redux";

const RootLayout = () => {
  return (
    <div className="page h-100 w-100">
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-3 pe-md-3">
            <Link to={urls.home}>
              {/* <img
                src="./static/logo.svg"
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image"
              /> */}
              FashionX
            </Link>
          </h1>
          <div className="navbar-nav flex-row order-md-last"></div>
          <div className="collapse navbar-collapse ms-3" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav">
                {Object.entries(imageInputType).map((e, i) => (
                  <li className="nav-item" key={i}>
                    <Link className="nav-link" to={urls.form(e[1])}>
                      <span className="nav-link-title strong">
                        {e[0].toUpperCase()}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="page-wrapper h-100 w-100">
        <div className="h-100 w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
