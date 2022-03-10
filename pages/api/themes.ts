import { NextApiRequest, NextApiResponse } from "next";
import { ThemeRepo } from "../../backend/theme-configurator/logic";
import { BASE_THEME } from "../../components/theme-configurator/data";

const themeRepo = ThemeRepo(BASE_THEME);

// 👋🏻: Persistence in ThemeRepo works, but since NextJS Dev reloads API
// on frontend reload, the saved theme goes away on reload
//
// - To try this, do `yarn build` followed by `yarn start -p <PORT>`
//   - this forces NextJS to build the whole repo and start a server
//     without the "livereoload" feature
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const newTheme = req.body;
    themeRepo.saveTheme(newTheme);
    res.status(200).json({ name: newTheme.name });
    return;
  } else if (req.method === "GET") {
    // console.log(JSON.stringify(themeRepo.allThemes(), undefined, 2));
    res.status(200).json(themeRepo.allThemes());
    return;
  }
  res.status(405).send({ message: "Not allowed" });
};
