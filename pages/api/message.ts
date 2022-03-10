import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const webhookUrl = process.env.WEBHOOK_URL ?? "";

  try {
    const result = await axios.post(webhookUrl, request.body, {
      withCredentials: false,
    });
    if (result.status === 200) {
      response.status(200).json("Successful post message to Slack!");
    } else {
      response.status(result.status).json("there is an error");
    }
  } catch (error) {
    console.log(error);
  }
}
