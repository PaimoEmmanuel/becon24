import axios from "axios";
import qs from "qs";
import { Buffer } from "buffer";

const apiKey = import.meta.env.VITE_API_KEY;
const mailingList = import.meta.env.VITE_MAILING_LIST;

export async function addToMailingList(email: string, name: string) {
  const url = `https://api.mailgun.net/v3/lists/${mailingList}/members`;
  const auth = `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`;
  const data = qs.stringify({
    address: email,
    name,
    subscribed: "yes",
  });

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: auth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
