import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  const decreaseNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return
    }
  };

  return (
    <>
      <div>
        <div className="flex gap-5">
          <button type="button" onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button type="button" onClick={decreaseNum}>
            Decrease
          </button>
        </div>
        <div className="text-3xl p-4 bg-gray-700 m-4 rounded-xl ">{count}</div>
      </div>
    </>
  );
}

export default App;
