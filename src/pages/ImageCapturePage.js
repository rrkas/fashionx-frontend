import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { base64_to_blob, blob_url_to_blob } from "../utils/image_utils";
import { mainSlice } from "../store/main";
import { urls } from "../urls";
import { api_process_image } from "../api";

const ImageCapturePage = () => {
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(async () => {
    const img = webcamRef.current.getScreenshot();
    setImg(await blob_url_to_blob(img));
  }, [webcamRef]);

  const onProcess = async (e) => {
    e.preventDefault();
    dispatch(mainSlice.actions.setInput(img));
    dispatch(mainSlice.actions.setResult(await api_process_image(img)));
    navigate(urls.result);
  };

  return (
    <div className="p-5 text-center">
      {img ? (
        <div>
          <div>
            <img src={URL.createObjectURL(img)} className="w-50 h-50 mt-4" />
            {/* {img} */}
          </div>
          <a className="btn btn-success mt-5" onClick={onProcess}>
            Process Image
          </a>
        </div>
      ) : (
        <div>
          <div>
            <Webcam
              className="h-50 w-50"
              audio={false}
              // height={720}
              ref={webcamRef}
              // width={1280}
              mirrored
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button className="btn btn-primary mt-4" onClick={capture}>Capture photo</button>
        </div>
      )}
    </div>
  );
};

export default ImageCapturePage;
