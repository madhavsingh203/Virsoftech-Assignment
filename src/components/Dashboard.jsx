import { useState } from "react";
import Output from "./Output";

const Dashboard = () => {
  const [age, setAge] = useState(null);
  const [gender, setgender] = useState("male");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleGender = (e) => {
    setgender(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="form">
      <label>Age:</label>
      <input type="number" min="2" max="100" onChange={handleAge} />
      <br />
      <label>Gender:</label>
      <select onChange={handleGender}>
        <option value="male"> Male </option>
        <option value="female"> Female </option>
      </select>
      <br />
      <label>Height(in inches):</label>
      <input
        onChange={handleHeight}
        placeholder="24.00"
        type="number"
        min="24"
        max="96"
        step="0.01"
      />
      <br />
      <label>Weight(in KG):</label>
      <input
        onChange={handleWeight}
        placeholder="0.00"
        type="number"
        step="0.01"
      />
      <Output age={age} height={height} gender={gender} weight={weight} />
    </div>
  );
};

export default Dashboard;
