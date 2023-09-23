import { useSelector } from "react-redux";
import { Spin } from "antd";
import { selectLoadingPage } from "../store/app/app.slice";

export default function Loading() {
  const loadingPage = useSelector(selectLoadingPage);
  return (
    <div
      className={`w-screen h-screen fixed z-[2000] flex justify-center items-center bg-slate-200/50 transition-all duration-300 ${
        loadingPage ? "visible opacity-100" : "invisible opacity-0 "
      }`}
    >
      <Spin tip={`Loading` + "..."} size="large" />
    </div>
  );
}
