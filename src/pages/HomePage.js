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
              {
                image_url: "https://media.istockphoto.com/id/1270438087/photo/looks-from-the-80s-are-making-a-comeback-in-fashion.webp?b=1&s=170667a&w=0&k=20&c=wfXpGOsRJJ2fHm4mgjB8qt2xPtSPSjPrZhnkqvlOtGY=",
                title: "Shirt",
              },
              {
                image_url: "https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
                title: "Lowers",
              },
              {
                image_url: "https://plus.unsplash.com/premium_photo-1670214286548-64aba7516393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNob2VzfGVufDB8fDB8fHww",
                title: "Foot wear",
              },
              {
                image_url: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
                title: "Accesories",
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
