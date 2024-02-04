import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";

const ResultPage = () => {
  const { inputImage, resultImage } = useSelector((store) => store.main);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputImage === null || resultImage === null) {
      navigate(urls.home);
    }
  }, [inputImage, resultImage]);

  return (
    <div className="p-5 text-center container-xl">
      <div className="row">
        {/* {inputImage && (
          <div className="col-6 col-md-6">
            <div className="h2">Input Image</div>
            <div>
              <img
              style={{maxe}}
                // className="h-50 w-50"
                src={URL.createObjectURL(inputImage)}
              />
            </div>
          </div>
        )} */}
        {resultImage && (
          <div className="col-12 col-md-12">
            <div className="row">
              {Object.keys(resultImage).map((e) => {
                if (resultImage[e].length === 0) return <></>;
                return (
                  <div className="col-12" key={e}>
                    <div className="card card-body">
                      <div className="h2">{e.toUpperCase()}</div>
                      <div className="row">
                        {resultImage[e].map((url, idx) => (
                          <div
                            key={`${e}__${idx}`}
                            className="col-12 col-md-6 col-lg-4"
                          >
                            <img src={url} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
