import React, { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode[];
  show?: number;
  infiniteLoop?: boolean;
};

const Carousel = ({ children, show, infiniteLoop }: Props) => {
  const [showNumber, setShowNumber] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState<null | number>(null);
  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > showNumber
  );

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown as number);
    console.log("handleTouchStart: " + touchDown);
  };

  useEffect(() => {
    setLength(children.length);
    setShowNumber(show ? show : 1);
    setIsRepeating(infiniteLoop && children.length > showNumber);
  }, [children, show, infiniteLoop]);

  const next = () => {
    if (isRepeating || currentIndex < length - showNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    console.log("handleTransitionEnd isRpeating:[" + isRepeating + "]");
    if (isRepeating) {
      if (currentIndex === 0) {
        setCurrentIndex(length);
      } else if (currentIndex === length + showNumber) {
        setCurrentIndex(showNumber);
      }
    }
    console.log("handleTransitionEnd currentIndex:[" + currentIndex + "]");
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < showNumber; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < showNumber; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    // carousel-container
    <div className="p-5">
      {/* carousel-wrapper */}
      <div className="flex w-full relative">
        {currentIndex > 0 && (
          <button className="left-arrow" onClick={prev}>
            &lt;
          </button>
        )}
        {/* carousel-content-wrapper */}
        <div
          className="overflow-hidden w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* carousel-content */}
          <div
            className={`flex transition-all [&>*]:ring-2 [&>*]:ring-inset [&>*]:shrink-0 [&>*]:grow ${
              showNumber > 1
                ? `[&>*]:w-[calc(100%/${showNumber})]`
                : `[&>*]:w-full`
            }  `}
            style={{
              transform: `translateX(-${(currentIndex * 100) / showNumber}%)`,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > showNumber && isRepeating && renderExtraPrev()}
            {children}
            {length > showNumber && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex < length - showNumber) && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
