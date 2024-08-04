// features/useAuth.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthService } from "./authServices";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("checklogin token");
    if (!AuthService.isLoggedIn()) {
      router.replace("/login");
    }
  }, []);
};

export default useAuth;
