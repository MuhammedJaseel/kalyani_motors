import axios from "axios";

export default async function enquiry(body) {
  await axios
    .post("https://kalyanimotorsapi.kalyanicrm.com/api/enquiry", body)
    .then(() => {})
    .catch(() => alert("Error on your form, submit again by reloading."));
  return;
}
