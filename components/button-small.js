import { useMemo } from "react";

const ButtonSmall = ({
  buttonText,
  buttonSmallBorderRadius,
  buttonSmallBorder,
  buttonSmallPosition,
  buttonSmallTop,
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
      left: buttonSmallLeft,
      backgroundColor: buttonSmallBackgroundColor,
    };
  }, [
    buttonSmallBorderRadius,
    buttonSmallBorder,
    buttonSmallPosition,
    buttonSmallTop,
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
    <div
      className="rounded-[34px] flex flex-row items-center justify-center py-4 px-8 text-left text-xl text-dark-theme-10-2 font-roboto-semibold-sb20 border-[2px] border-solid border-dark-theme-10-2"
      style={buttonSmallStyle}
    >
      <div
        className="relative leading-[30px] font-semibold"
        style={readMoreStyle}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default ButtonSmall;
