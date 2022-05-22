import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import MaterialUISwitch from "./Partials/MaterialUISwitch";

type Props = {};

const MobileHeader = (props: any) => {
  // console.log(props);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [isLight, setIsLight] = useState<boolean>(props.theme.lightMode);

  useEffect(() => {
    setIsLight(props.theme.lightMode);
  }, [props.theme.lightMode]);

  const router = useRouter();
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (props.theme.lightMode) {
      dispatch(setDarkModeTheme());
    } else {
      dispatch(setLightModeTheme());
    }
  };
  return (
    <header className="bg-light dark:bg-dark-background py-2 px-5 flex md:hidden justify-between items-center sticky z-[100] top-0 shadow-sm">
      <Link href="/">
        <a>
        <Image
            src={props.theme.lightMode ? "/img/logo/Fovero Technologies Logo.png" : "/img/logo/Fovero Technologies Logo Dark.png"}
            alt="Braandly"
            width={133.32}
            height={34.66}
            className="cursor-pointer mt-4"
          />
        </a>
      </Link>

      <div className="flex gap-3 items-center">
        <MaterialUISwitch
          sx={{ m: 1 }}
          // defaultChecked={isLight}
          checked={isLight}
          // defaultChecked={isLight}
          // lightMode={props.theme.lightMode}
          onChange={() => {
            if (props.theme.lightMode) {
              dispatch(setDarkModeTheme());
            } else {
              dispatch(setLightModeTheme());
            }
          }}
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(MobileHeader);
