import { Navigate } from "react-router-dom";
import { selectAuth } from "../store/auth/authSlice";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

const CheckAccess = ({
  children,
}: {
  children: ReactNode;
  perms?: string[];
  showMessage?: boolean;
  componentReplace?: ReactNode;
}): JSX.Element => {
  const auth = useSelector(selectAuth);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default CheckAccess;
