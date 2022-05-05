import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [selectType, setSelectType] = useState("");
  const [isPrime, setIsPrime] = useState(true);
  // const [isFibonacci, setIsBonacci] = useState(true);

  const checkInput = (e) => {
    if (e < 0) {
      return setInput(-1);
    } else {
      return setInput(e);
    }
  };

  const checkPrime = (input) => {
    if (selectType === "isPrime") {
      // check if input is equal to 1
      if (input === 1) {
        return console.log("1 is neither prime or composite number.");
      }

      // check if input is greater than 1
      else if (input > 1) {
        // looping through 2 to input -1
        for (let i = 2; i < input; i++) {
          if (+input % i === 0) {
            setIsPrime(false);
            break;
          }
        }
      }
      // } else if (5 * (input * input) - 4 || 5 * (input * input) + 4) {
      //   return setIsBonacci(true);
      // } else {
      //   return setIsBonacci(false);
    }
  };

  checkPrime(input);
  console.log(input);

  return (
    <table className="App">
      <tbody>
        <tr>
          {/* col1 */}
          <th className="col1">
            <input type="number" onChange={(e) => checkInput(e.target.value)} />
          </th>

          {/* col2 */}
          <th className="col2">
            <select onChange={(e) => setSelectType(e.target.value)}>
              <option value="isPrime">isPrime</option>
              <option value="isFibonacci">isFibonacci</option>
            </select>
          </th>

          {/* col3 */}
          <th className="col3">
            {isPrime ? <span>true</span> : <span>false</span>}
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
