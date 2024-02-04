import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyBkTMP8QDbu37RJ7nJkrDHlNCqXlZIDNVw",
  authDomain: "fashionx-fa7e7.firebaseapp.com",
  projectId: "fashionx-fa7e7",
  storageBucket: "fashionx-fa7e7.appspot.com",
  messagingSenderId: "227744105185",
  appId: "1:227744105185:web:eec70d3fbcad89d9002da0",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(
  firebaseApp
  //   "gs://fashionx-fa7e7.appspot.com"
);

export async function upload_image_to_firebase(image_obj, type) {
  //   console.log(image_obj);
  const filename = `${uuid4()}.${image_obj.name.split(".").reverse()[0]}`;
  const fileRef = ref(firebaseStorage, `${type}/${filename}`);
  const res = await uploadBytes(fileRef, image_obj);
  const url = await getDownloadURL(res.ref);
  console.log(url);
  return url;
}
