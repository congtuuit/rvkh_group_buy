//import { deleteAuthCookie } from "./../../actions/auth.action";

export const AuthService = {
  logoutAsync: async (router) => {
    // await deleteAuthCookie(); this is used in server - not run at client
    router.replace("/login");
  },
  isLoggedIn: () => {
    // const token = getAuthCookie();
    // // Implement additional logic to validate the token if necessary
    // return !!token;
  },
  loginAsync: async (req, callBack) => {
    // TODO

    console.log("vreq ", req);

    if (callBack) {
      callBack(false);
    }
    return false;
  },
};
