export const base64_to_blob = (data) => {
  const decodedString = atob(data);
  const byteNumbers = new Array(decodedString.length);
  for (let i = 0; i < decodedString.length; i++) {
    byteNumbers[i] = decodedString.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray]);

  return blob;
};

export const blob_url_to_blob = async (url) => {
  return (await fetch(url)).blob();
};
