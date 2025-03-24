import { useState } from "react";

type ToggleProps = {
  isToggle?: boolean;
  onToggle?: (value: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({isToggle = false, onToggle}) => {
  const [localToggle, setLocalToggle] = useState(isToggle);

  const toggle = () => {
    const newToggle = !localToggle;
    setLocalToggle(newToggle);
    onToggle?.(newToggle);
  }

  return (
    <button onClick={toggle}>
      {localToggle ? "OFF" : "ON"}
    </button>
  );
};

export const ParentComponent = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <p>Bankai is {isToggle ? "ON" : "OFF"}</p>
      <Toggle isToggle={isToggle} onToggle={setIsToggle} />
    </div>
  );
};
