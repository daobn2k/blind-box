import React from "react";
import clsx from "clsx";
import MenuBottom from "../MenuBottom/MenuBottom";

export default function WrapperPage({
  children,
  className = "",
  showMenu,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  showMenu?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={clsx("max-w-[500px] w-full overflow-auto scrollable m-auto", {
        [className]: !!className,
      })}
      style={{
        height: "100dvh",
        marginBottom: 124,
        paddingBottom: 96,
        ...style,
      }}
    >
      {children}
      {showMenu && (
        <div className="fixed bottom-0 right-0 left-0">
          <MenuBottom />
        </div>
      )}
    </div>
  );
}
