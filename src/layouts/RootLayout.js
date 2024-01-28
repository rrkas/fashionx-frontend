import { Outlet, Link } from "react-router-dom";
import { urls } from "../urls";

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
                <li className="nav-item">
                  <Link className="nav-link" to={urls.upload_image}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-upload"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 9l5 -5l5 5" />
                        <path d="M12 4l0 12" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Upload</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={urls.say_cheese}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-camera"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Say Cheese</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="page-wrapper h-100 w-100">
        <div className="container-xl h-100 w-100">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default RootLayout;
