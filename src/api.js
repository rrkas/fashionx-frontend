import { imageInputType } from "./utils/constants";
import { upload_image_to_firebase } from "./utils/firebase-utils";
import { toast_error } from "./utils/toast_utils";

const BACKEND_URL =
  process.env.NODE_ENV === "production" ? "" : "http://130.211.196.17:8080";

export const api_process_image = async (data, type) => {
  try {
    if (type !== imageInputType.WARDROBE) {
      const img_url = await upload_image_to_firebase(data, type);
      const resp = await fetch(`${BACKEND_URL}/${type}?query=${img_url}`);
      // const resp = await fetch(
      //   `${BACKEND_URL}/${type}?query=https://firebasestorage.googleapis.com/v0/b/fashionx-ebe6c.appspot.com/o/user-images%2Fsingle-shot%2FNQbxlNR1UMSeU2fwgafR4sfmski1%2Fsingle_shot_1eec3787-744b-6f30-a9ef-bb3f23548e7b.jpg?alt=media&token=41715991-2cee-450f-adbf-f8cc5c987308`
      // );
      console.log(await resp.clone().json());
      return await resp.clone().json();
    } else {
      // for(const )
      // url_outwear = 'https://fashionx-ebe6c-default-rtdb.firebaseio.com/' + f'{uid}/WardrobeAI/Outwear.json'
      // url_legwear = 'https://fashionx-ebe6c-default-rtdb.firebaseio.com/' + f'{uid}/WardrobeAI/Legwear.json'
      // url_shoe = 'https://fashionx-ebe6c-default-rtdb.firebaseio.com/' + f'{uid}/WardrobeAI/Shoes.json'
    }
  } catch (e) {
    toast_error(e.toString());
    return null;
  }
};
