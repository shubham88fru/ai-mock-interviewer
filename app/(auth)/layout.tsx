import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
