"use client";

//import { createAuthCookie } from "@/actions/auth.action";
import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { authService } from "@/features";
import { toast } from "react-toastify";

export const Login = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = useCallback(
    async (values) => {
      // `values` contains email & password. You can use provider to connect user
      //await createAuthCookie();
      authService.loginAsync(values, (success) => {
        console.log("success ", success)
        if (success) {
          router.replace("/admin");
        } else {
          console.log("err")
          toast.error("Tài khoản hoặc mật khẩu không đúng.");
        }
      });
    },
    [router]
  );

  return (
    <>
      <div className="text-center text-[25px] font-bold mb-6">Login</div>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className="flex flex-col w-1/4 gap-4 mb-4">
              <Input
                variant="underlined"
                label="Email"
                type="email"
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange("email")}
              />
              <Input
                variant="underlined"
                label="Password"
                type="password"
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange("password")}
              />
            </div>

            <Button
              onPress={() => handleSubmit()}
              variant="flat"
              color="primary"
              className="w-1/4"
              radius="none"
            >
              Login
            </Button>
          </>
        )}
      </Formik>
    </>
  );
};
