import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect, useDispatch } from "react-redux";
import { setDarkModeTheme, setLightModeTheme } from "../../store/theme/action";
import MaterialUISwitch from "./Partials/MaterialUISwitch";


type Props = {};

const MainHeader = (props: any) => {
  // console.log(props)
  const [isLight, setIsLight] = useState<boolean>(props.theme.lightMode);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLight(props.theme.lightMode);
  },[props.theme.lightMode])


  return (
    <header className="bg-gray-100 dark:bg-dark py-2 px-5 flex justify-between items-center shadow-sm">
      {<Link href="/" passHref>
        <a>
          {!props.theme.lightMode ? <Image
            src={"/img/logo/Fovero Technologies Logo Dark.png"}
            alt="Fovero Digital Technologies Logo"
            width={73.32}
            height={44.66}
            className="cursor-pointer mt-4"
          /> : <h1 className="font-bold text-lg sm:text-xl text-brand">Fovero Technologies</h1>}
        </a>
      </Link>
}
      <div className="flex gap-6 items-center">
      <MaterialUISwitch
      aria-label="Change theme"
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

export default connect(mapStateToProps)(MainHeader);
