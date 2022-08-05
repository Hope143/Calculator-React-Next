import React, { useState } from "react";

function Index() {
  const [result, setResult] = useState("");

  function TriggerValue(event) {
    setResult(result + event.target.value);
  }

  function DeleteLastValue() {
    try {
      setResult(result.slice(0, -1));
    } catch (error) {
      setResult("Error");
    }
  }

  // function DeleteAllValue() {
  //   try {
  //     setResult(result.slice(0, 0));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  return (
    <div className="p-5">
      <h3 className="text-center fs-1 text-dark fw-bold py-4">
        BASIC CALCULATOR
      </h3>
      <div className="card m-auto" style={{ width: "24rem" }}>
        <div className="card-body border border-3 rounded border-dark shadow">
          <input
            type="text"
            value={result}
            placeholder="0"
            className="w-100 my-3 py-2 px-4 fs-2 fw-bold text-end border border-dark border-2 shadow"
          />
          <div className="container text-center">
            <div className="row mb-2">
              <div className="col-3 p-0">
                <button
                  onClick={() => {
                    setResult("");
                  }}
                  className="btn btn-dark text-info p-4 w-75 w-75 fs-4"
                >
                  C
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="/"
                  onClick={TriggerValue}
                  className="btn btn-dark text-info p-4 w-75 fs-4"
                >
                  /
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="*"
                  onClick={TriggerValue}
                  className="btn btn-dark text-info p-4 w-75 fs-4"
                >
                  x
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  onClick={DeleteLastValue}
                  className="btn btn-danger p-4 w-75 fs-4"
                >
                  X
                </button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-3 p-0">
                <button
                  value="7"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  7
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="8"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  8
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="9"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  9
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="-"
                  onClick={TriggerValue}
                  className="btn btn-dark text-info p-4 w-75 fs-4"
                >
                  -
                </button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-3 p-0">
                <button
                  value="4"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  4
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="5"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  5
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="6"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  6
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="+"
                  onClick={TriggerValue}
                  className="btn btn-dark text-info p-4 w-75 fs-4"
                >
                  +
                </button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-3 p-0">
                <button
                  value="1"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  1
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="2"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  2
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="3"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  3
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="="
                  onClick={() => {
                    try {
                      setResult(eval(result));
                    } catch {
                      setResult("Error");
                    }
                  }}
                  className="btn btn-dark text-info p-4 w-75 fs-4"
                >
                  =
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-0">
                <button
                  value="%"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  %
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="0"
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  0
                </button>
              </div>
              <div className="col-3 p-0">
                <button
                  value="."
                  onClick={TriggerValue}
                  className="btn btn-dark p-4 w-75 fs-4"
                >
                  .
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
