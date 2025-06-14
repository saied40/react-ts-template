import { useState } from "react";

type SwitchBtnProps = {
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function SwitchButton({ className="", onClick }: SwitchBtnProps) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(!toggle);
    if (onClick) onClick(event);
  };

  return (
    <button
      className={
        "w-11 h-6 rounded-full bg-green-500 relative after:absolute after:left-1/2 after:top-1/2 after:inline-block after:size-5 after:rounded-full after:bg-white after:transition-all after:-translate-y-1/2 " +
        (toggle ? "after:-translate-x-0" : "after:-translate-x-full") +
        className
      }
      onClick={handleToggle}
    />
  );
};
