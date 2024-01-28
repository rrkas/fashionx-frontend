import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mainSlice } from "../store/main";
import { urls } from "../urls";
import { api_process_image } from "../api";

const ImageUploadPage = () => {
  const inputRef = useRef();
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeImage = useCallback(
    (e) => {
      const files = e.target.files;
      if (files.length > 0) {
        setImg(files[0]);
      }
      // else{
      //     setImg()
      // }
    },
    [setImg]
  );

  const removeImage = (e) => {
    e.preventDefault();
    setImg(null);
    inputRef.current.value = null;
  };

  const onProcess = async (e) => {
    e.preventDefault();
    dispatch(mainSlice.actions.setInput(img));
    dispatch(mainSlice.actions.setResult(await api_process_image(img)));
    navigate(urls.result);
  };

  return (
    <div className="pt-4 text-center">
      <div className="h1 text-start">Upload Image</div>
      <div className="row">
        <div className="col">
          <input
            ref={inputRef}
            type="file"
            className="form-control"
            accept=".png,.jpg,.jpeg"
            onChange={onChangeImage}
            multiple={false}
          />
        </div>
        {img && (
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
      {img && (
        <div>
          <div>
            <img src={URL.createObjectURL(img)} className="w-50 h-50 mt-4" />
          </div>
          <a className="btn btn-success mt-5" onClick={onProcess}>
            Process Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploadPage;
