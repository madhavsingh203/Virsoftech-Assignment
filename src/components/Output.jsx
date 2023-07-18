import { useState } from "react";

const Output = ({ age, gender, height, weight }) => {
  const [bmi, setBMI] = useState("Please enter all the details");
  const [type, setType] = useState("");
  const calculateBMI = () => {
    const heightMeters = height * 0.0254;
    const bmiResult = (weight / (heightMeters * heightMeters)).toFixed(2);
    setBMI(bmiResult);

    if (gender === "male") {
      if (bmi <= 18.5) {
        setType("Underweight");
      } else if (bmi > 18.5 && bmi <= 24.9) {
        setType("Normal Weight");
      } else if (bmi >= 25 && bmi < 30) {
        setType("Normal Weight");
      } else {
        setType("Obesity");
      }
    }
    if (gender === "female") {
      if (bmi < 20.5) {
        setType("Underweight");
      } else if (bmi >= 20.5 && bmi <= 26.9) {
        setType("Normal Weight");
      } else if (bmi >= 27 && bmi < 32) {
        setType("Normal Weight");
      } else {
        setType("Obesity");
      }
    }
  };

  return (
    <>
      <button onClick={calculateBMI}>Submit</button>
      <div>BMI:{bmi} </div>
      <div
        style={{
          marginTop: "10px"
        }}
      >
        Type:{type}{" "}
      </div>
    </>
  );
};

export default Output;
