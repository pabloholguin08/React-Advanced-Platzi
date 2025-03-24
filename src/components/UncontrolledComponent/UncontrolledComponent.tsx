import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`You typed: ${inputRef.current.value}`);
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
