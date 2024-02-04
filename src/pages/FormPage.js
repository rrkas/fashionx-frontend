import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam";
import { base64_to_blob, blob_url_to_blob } from "../utils/image_utils";
import { mainSlice } from "../store/main";
import { urls } from "../urls";
import { api_process_image } from "../api";
import { APP_NAME, acceptableImgExt, imageInputType } from "../utils/constants";

const FormPage = () => {
  const { type: imageType } = useParams();
  const [state, setState] = useState({
    img: null,
    inputTypeCamera: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const webcamRef = useRef(null);
  const inputRef = useRef();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(async () => {
    const img = await blob_url_to_blob(webcamRef.current.getScreenshot());
    setState((p) => ({ ...p, img }));
  }, [webcamRef]);

  const onChangeImage = useCallback(
    (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        setState((p) => ({ ...p, img: files[0] }));
      }
      // else{
      //     setImg()
      // }
    },
    [setState]
  );

  const removeImage = (e) => {
    e.preventDefault();
    setState((p) => ({ ...p, img: null }));
    inputRef.current.value = null;
  };

  const onProcess = async (e) => {
    e.preventDefault();
    dispatch(mainSlice.actions.setInput(state.img));
    const resp = await api_process_image(state.img, imageType);
    if (resp) {
      dispatch(mainSlice.actions.setResult(resp));
      navigate(urls.result);
    }
  };

  function toggleCamera(e) {
    // e.preventDefault();
    setState((p) => ({ ...p, inputTypeCamera: !p.inputTypeCamera }));
  }

  console.log(state);

  return (
    <div className="p-5 text-center container-xl">
      <div className="h1 mb-5" style={{ fontSize: "40px" }}>
        {APP_NAME}
      </div>
      <div
        className="h2 mb-5"
        style={{ fontSize: "25px", fontFamily: "cursive" }}
      >
        {Object.entries(imageInputType).filter((e) => e[1] === imageType)[0][0]}
      </div>
      {
        <div className="row">
          <div className="col-12">
            <div class="btn-group w-100 mb-5" role="group">
              <input
                type="radio"
                class="btn-check"
                name="btn-radio-dropdown"
                id="btn-radio-dropdown-1"
                autocomplete="off"
                checked={!state.inputTypeCamera}
                onClick={toggleCamera}
              />
              <label for="btn-radio-dropdown-1" type="button" class="btn">
                File Upload
              </label>
              <input
                type="radio"
                class="btn-check"
                name="radio-src"
                id="btn-radio-dropdown-2"
                autocomplete="off"
                checked={state.inputTypeCamera}
                onClick={toggleCamera}
              />
              <label for="btn-radio-dropdown-2" type="button" class="btn">
                Camera
              </label>
            </div>
          </div>
        </div>
      }
      {state.inputTypeCamera ? (
        <div>
          {!state.img && (
            <>
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
              <button className="btn btn-primary mt-4" onClick={capture}>
                Capture photo
              </button>
            </>
          )}
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col">
              <input
                ref={inputRef}
                type="file"
                className="form-control"
                accept={acceptableImgExt}
                onChange={onChangeImage}
                multiple={false}
              />
            </div>
            {state.img && (
              <div className="col-auto">
                <a className="btn btn-danger btn-icon" onClick={removeImage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash"
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
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {state.img && (
        <div>
          <div>
            <img
              src={URL.createObjectURL(state.img)}
              className="w-50 h-50 mt-4"
            />
          </div>
          <a className="btn btn-success mt-5" onClick={onProcess}>
            Process Image
          </a>
        </div>
      )}
    </div>
  );
};

export default FormPage;
