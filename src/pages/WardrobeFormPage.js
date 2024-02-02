import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam";
import { base64_to_blob, blob_url_to_blob } from "../utils/image_utils";
import { mainSlice } from "../store/main";
import { urls } from "../urls";
import { api_process_image } from "../api";
import {
  APP_NAME,
  acceptableImgExt,
  imageInputType,
  wardrobeTypes,
} from "../utils/constants";
import { toast } from "react-toastify";
import { toast_error } from "../utils/toast_utils";

const WardrobeFormPage = () => {
  const [state, setState] = useState({
    [wardrobeTypes.OUT_WEAR]: [],
    [wardrobeTypes.LEG_WEAR]: [],
    [wardrobeTypes.SHOES]: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeImage = useCallback(
    (e, type) => {
      const files = e.target.files;
      if (files.length > 0) {
        setState((p) => {
          let newFiles = [...p[type], ...files];

          if (newFiles.length > 3) {
            toast_error(`${newFiles.length} images picked!`);
            toast_error("Keeping only 3 images!");
          }

          newFiles = newFiles.slice(0, 3);
          e.target.value = "";
          return { ...p, [type]: newFiles };
        });
      }
    },
    [setState]
  );

  const removeImage = (e, type, idx) => {
    e.preventDefault();
    setState((p) => ({
      ...p,
      [type]: p[type].filter((e) => e !== p[type][idx]),
    }));
  };

  const onProcess = async (e) => {
    e.preventDefault();
    dispatch(mainSlice.actions.setInput(state));
    dispatch(
      mainSlice.actions.setResult(
        await api_process_image(state, imageInputType.WARDROBE)
      )
    );
    navigate(urls.result);
  };

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
        {imageInputType.WARDROBE.toUpperCase()}
      </div>

      <div className="card">
        <div className="row">
          <div className="col-12">
            {Object.values(wardrobeTypes).map((type, typeidx) => (
              <div className="row m-2" key={`row__${type}`}>
                <div
                  className="col-12 text-center h3"
                  style={{ fontSize: "25px" }}
                >
                  {type.toUpperCase()}
                </div>
                <div className="col-12">
                  <input
                    type="file"
                    className="form-control"
                    accept={acceptableImgExt}
                    onChange={(ev) => onChangeImage(ev, type)}
                    multiple={true}
                    max={3}
                  />
                </div>
                {state[type].length > 0 && (
                  <div className="col-12 my-4">
                    <div className="row">
                      {state[type].map((ei, eidx) => (
                        <div className="col-12 col-md-4" key={eidx}>
                          <div className="me-auto" style={{ height: "200px" }}>
                            <img
                              style={{ objectFit: "contain" }}
                              className="h-100 w-100 border border-dark border-2 rounded"
                              src={URL.createObjectURL(ei)}
                            />
                          </div>
                          <a
                            className="btn btn-danger btn-icon mt-2"
                            onClick={(ev) => removeImage(ev, type, eidx)}
                          >
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M4 7l16 0" />
                              <path d="M10 11l0 6" />
                              <path d="M14 11l0 6" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {typeidx != Object.values(wardrobeTypes).length - 1 && (
                  <hr
                    className="mt-3 mb-3 border border-black border-3"
                    style={{ outlineColor: "black" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {Object.values(state).some((e) => e.length > 0) && (
        <div>
          <a className="btn btn-success mt-5" onClick={onProcess}>
            Process Images
          </a>
        </div>
      )}
    </div>
  );
};

export default WardrobeFormPage;
