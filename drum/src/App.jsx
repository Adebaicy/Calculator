import { useState } from "react";

const App = () => {
  //const [ac, setAc] = useState(0);
  //const [mm, setMm] = useState([]);
  //const [id, setId] = useState();
  //const [out, setOut] = useState(0);
  const [out1, setOut1] = useState(0);
  const [initial, setInitial] = useState(true);
  const [prev, setPrev] = useState(0);

  const [opera, setOpera] = useState("");
  //const [final, setFinal] = useState(0);
  const [sign, setSign] = useState();

  //const [signt, setSignt] = useState(true);
  const [equal1, setEqual1] = useState(0);

  //var prev = 0;
  //let next = 0;
  let nt = 0;

  //const [prev, setPrev] = useState( initial === true ? out1 : nt);

  //[val, setVal] = useState(0);
  const handleChange = () => {
    setOut1(Number(event.target.value));
  };

  const clear = () => {
    setPrev(0);
    nt = 0;
    setOpera("");
    setInitial(true);
    setOut1(0);
  };

  const add = (event) => {
    setPrev(() => {
      if (initial) {
        setInitial(false);
        return out1;
      } else {
        return nt;
      }
    });
    setOut1(0);
    setOpera("add");
    setSign("a");
    //setSignt(true);
  };
  if (opera === "add") {
    // console.log(sign)
    if (out1 == "-") {
      nt = prev + 0;
    } else {
      nt = prev + parseFloat(out1);
    }
  }

  const subtract = (event) => {
    let lm = event.target.innerHTML;
    console.log(lm);
    setPrev((event) => {
      if (initial) {
        setInitial(false);
        setOut1(0);

        setOpera("subtract");
        setSign("a");
        //setSign(false);
        return out1;
      } else if (initial == false && sign == 2) {
        console.log(sign);
        setOut1(0);
        setOpera("subtract");
        setSign("a");
        return nt;
      } else if (initial == false && sign == "a") {
        setOut1("-");

        return nt;
      }
    });
  };
  if (opera === "subtract") {
    if (out1 == "-") {
      nt = prev - 0;
    } else {
      nt = prev - out1;
    }
  }

  const multiply = (event) => {
    setPrev(() => {
      if (initial) {
        setInitial(false);
        return out1;
      } else {
        return nt;
      }
    });

    setOut1(0);
    setOpera("multiply");
    setSign("a");
    //setSignt(true);
  };

  if (opera === "multiply") {
    if (out1 == 0 || out1 == "-") {
      nt = prev * 1;
    } else {
      nt = prev * out1;
    }
  }

  const divide = (event) => {
    setPrev(() => {
      if (initial) {
        setInitial(false);
        return out1;
      } else {
        return nt;
      }
    });

    setOut1(0);
    setOpera("divide");
    setSign("a");
  };

  if (opera === "divide") {
    if (out1 == 0 || out1 == "-") {
      nt = prev / 1;
    } else {
      nt = prev / out1;
    }
  }

  const display = (event) => {
    setSign(2);

    setOut1((prevOut1) => {
      if (String(prevOut1).includes(".") && event.target.innerHTML == "0") {
        return prevOut1 + event.target.innerHTML;
      } else {
        return parseFloat(prevOut1 + event.target.innerHTML);
      }
    });
  };

  const decimal = (event) => {
    //setSign(false);
    setOut1((prevOut1) => {
      if (String(prevOut1).includes(".")) {
        return prevOut1;
      } else {
        return prevOut1 + event.target.innerHTML;
      }
    });
  };

  const equal = () => {
    document.getElementById("display").innerHTML =
      document.getElementById("nt").innerHTML;

    setInitial(false);
  };

  return (
    //   <button id="clear" onClick={clear}>
    //   AC
    // </button>
    <div className="tired" >
      <div className="table-responsive lxt ">
      <table className="mx-auto w-auto " >
        <tr>
          <td className="exempt" id="display" colSpan={4}>{out1}</td>
          </tr>
          <tr><td className="exempt" id="nt" colSpan={4}>{nt}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            {" "}
            <button id="clear" onClick={clear}>
              AC
            </button>
          </td>
          <td className="table-success">
            <button className="optns" id="divide" onClick={divide}>
              /
            </button>
          </td>{" "}
          <td>
            <button className="optns" id="multiply" onClick={multiply}>
              *
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={display} id="seven">
              7
            </button>
          </td>
          <td>
            <button onClick={display} id="eight">
              8
            </button>
          </td>
          <td>
            <button onClick={display} id="nine">
              9
            </button>
          </td>
          <td>
            {" "}
            <button className="optns" id="subtract" onClick={subtract}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={display} id="four">
              4
            </button>
          </td>
          <td>
            <button onClick={display} id="five">
              5
            </button>
          </td>
          <td>
            <button onClick={display} id="six">
              6
            </button>
          </td>
          <td>
            <button className="optns" id="add" onClick={add}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="" onClick={display} id="one">
              1
            </button>
          </td>
          <td>
            {" "}
            <button onClick={display} id="two">
              2
            </button>
          </td>

          <td>
            <button onClick={display} id="three">
              3
            </button>
          </td>
          <td id = "eq"  rowSpan={2}>
            {" "}
            <button className="optns" onClick={equal} id="equals">
              =
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button onClick={display} id="zero">
              0
            </button>
          </td>
          <td>
            <button onClick={decimal} id="decimal">
              .
            </button>
          </td>
      
        </tr>
        
      </table>
      </div>
<div id="hide">      
      {/* final:<p id="finny"></p> */}
      <br />
      {/* {opera} */}
      prev: {prev}
      <br />
      final:
      <br />
      Output:
      <input
        onChange={handleChange}
        type="number"
        step="any"
        value={out1}
      ></input>
      equal: <span id="resslt">{equal1}</span>
      {/* OUT=  */}
      </div>      
     
    </div>
  );
};
export default App;
