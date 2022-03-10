import { NextApiRequest, NextApiResponse } from "next";
import {
  initialThemeList,
  ThemeList,
} from "../../components/react-context/utils/types";

let themes: ThemeList = initialThemeList;

export default function themesHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method, body } = request;

  switch (method) {
    case "GET":
      response.status(200).json(themes);
      break;
    case "POST":
      themes = { ...themes, [body.name]: body };
      response.status(200).json({ message: "Theme is successfully saved" });
      break;
  }
}
