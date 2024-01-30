import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Carousel
        className="container-xl w-100 mt-3"
        autoPlay
        showArrows
        stopOnHover
        infiniteLoop
        dynamicHeight
        showThumbs={false}
        showStatus={false}
        interval={5 * 1000}
        showIndicators={false}
      >
        {[
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ].map((e, i) => (
          <div key={i} style={{ maxHeight: "400px" }}>
            <img src={e} style={{ maxHeight: "400px", objectFit: "cover" }} />
          </div>
        ))}
      </Carousel>
      <div style={{ backgroundColor: "gray" }} className="w-100 mt-3 p-2">
        <div className="card card-body container-fluid">
          <div className="text-center h1" style={{ fontSize: "35px" }}>
            Categories
          </div>
          <div className="row">
            {[
              {
                image_url: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "T-shirt",
              },
            ].map((e, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card card-body">
                  <img src={e.image_url} />
                  <p className="text-center mt-2 strong" style={{fontSize: "18px"}}>{e.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
