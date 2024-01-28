import React from "react";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const { inputImage, resultImage } = useSelector((store) => store.main);

  return (
    <div className="p-5 text-center">
      <div className="row">
        {inputImage && (
          <div className="col-6 col-md-6">
            <div className="h2">Input Image</div>
            <div>
              <img
                // className="h-50 w-50"
                src={URL.createObjectURL(inputImage)}
              />
            </div>
          </div>
        )}
        {resultImage && (
          <div className="col-6 col-md-6">
            <div className="h2">Result Image</div>
            <div>
              <img
                // className="h-50 w-50"
                src={URL.createObjectURL(resultImage)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
