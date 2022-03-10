import axios, { AxiosResponse } from "axios";
import { Theme } from "../model";

/**
 * A basic Theme Repository factory to manage themes
 * NOTE: This DOES NOT involve React in any fashion
 *
 * - think of this as our eventual backend implementation
 */
export function ThemeRepoApi() {
  return {
    async allThemes(): Promise<AxiosResponse<Theme[]>> {
      return await axios.get("/api/themes");
    },
    async saveTheme(theme: Theme) {
      return await axios.post("/api/themes", theme);
    },
  };
}
