import { MdArrowUpward } from "react-icons/md";
import Fab from "@mui/material/Fab";

const Backtotop = () => {
  const UpArrow: any = MdArrowUpward;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <Fab
      color="primary"
      aria-label="add"
      className="flex items-center justify-center bg-primary text-white hover:bg-primary-hov dark:bg-warning dark:text-dark dark:hover:bg-warning-hov rounded-full shadow text-lg fixed z-[10000] right-[30px] bottom-[40px]"
      onClick={scrollToTop}
    >
      <UpArrow />
    </Fab>
  );
};

export default Backtotop;
