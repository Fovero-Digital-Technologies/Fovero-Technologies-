import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import { themeChange, themeOSLoad } from "../../functions/theme";
// const Backtotop = dynamic(
//   () => import("../Elements/Backtotop"),
//   { ssr: false }
// )

type Props = {};

const MasterLayout = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useLayoutEffect(() => {
    themeChange(props);
  });

  useLayoutEffect(() => {
    themeOSLoad(props, dispatch, setDarkModeTheme, setLightModeTheme);
  }, []);
  return (
    <>
      {props.children}
      {/* <Backtotop /> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MasterLayout);
