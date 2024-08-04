//import { deleteAuthCookie } from "./../../actions/auth.action";
import axiosInstance from "@/api/axiosInstance";
import Cookies from "js-cookie";

export const AuthService = {
  isLoggedIn: () => {
    const token = AuthService.getToken();
    return !!token;
  },
  logoutAsync: async (router) => {
    Cookies.set("token", "");
    router.replace("/login");
  },
  loginAsync: async ({ email, password }, callBack) => {
    // TODO
    try {
      const response = await axiosInstance.post(
        "",
        {
          action: "authenticate",
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { success, token } = response.data;
      if (success === false) {
        callBack && callBack(false);
      } else {
        // Store token in a cookie
        Cookies.set("token", token, { expires: 1 }); // Expires in 1 day
        callBack && callBack(true);
      }
    } catch (error) {
      console.error("API call error:", error);
      callBack && callBack(false);
    }
  },
  getToken: () => {
    return Cookies.get("token");
  },
};
