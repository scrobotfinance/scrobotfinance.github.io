import { useMemo } from "react";

const ButtonSmall = ({
  buttonText,
  buttonSmallBorderRadius,
  buttonSmallBorder,
  buttonSmallPosition,
  buttonSmallTop,
  buttonSmallBottom,
  buttonSmallLeft,
  buttonSmallBackgroundColor,
  readMoreFontSize,
  readMoreLineHeight,
  readMoreFontFamily,
  readMoreColor,
}) => {
  const buttonSmallStyle = useMemo(() => {
    return {
      borderRadius: buttonSmallBorderRadius,
      border: buttonSmallBorder,
      position: buttonSmallPosition,
      top: buttonSmallTop,
      bottom : buttonSmallBottom,
      left: buttonSmallLeft,
      backgroundColor: buttonSmallBackgroundColor,
    };
  }, [
    buttonSmallBorderRadius,
    buttonSmallBorder,
    buttonSmallPosition,
    buttonSmallTop,
    buttonSmallBottom,
    buttonSmallLeft,
    buttonSmallBackgroundColor,
  ]);

  const readMoreStyle = useMemo(() => {
    return {
      fontSize: readMoreFontSize,
      lineHeight: readMoreLineHeight,
      fontFamily: readMoreFontFamily,
      color: readMoreColor,
    };
  }, [readMoreFontSize, readMoreLineHeight, readMoreFontFamily, readMoreColor]);

  return (
    <button
      className="rounded-[34px] cursor-pointer flex flex-row items-center justify-center py-4 px-8 text-left text-xl text-dark-theme-10-2 border-[2px] border-solid border-dark-theme-10-2"
      style={buttonSmallStyle}
    >
      <div
        className="relative leading-[30px] font-semibold"
        style={readMoreStyle}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default ButtonSmall;
