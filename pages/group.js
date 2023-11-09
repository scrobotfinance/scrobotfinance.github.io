import LogoTextIcon from "../components/logo-text-icon";

const Group = () => {
  return (
    <div className="relative w-full h-[34px]">
      <LogoTextIcon />
      <img
        className="absolute h-full w-[62.45%] top-[0%] right-[0%] bottom-[0%] left-[37.55%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/layer-22.svg"
      />
    </div>
  );
};

export default Group;
