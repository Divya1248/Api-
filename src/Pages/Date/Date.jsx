import React from "react";
import "react-datetime-picker/dist/shared/propTypes";
import { useState } from "react";
import "./Date.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";



const DatePage = () => {
  //const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedDate, onChange1] = useState(new Date().getDay());
  const [num, setnum] = useState({
    number: "",
  });
  let { number } = num;
  let handleChange = e => {
    var { name, value } = e.target;
    setnum({ number: value });
  };

  let startDate = moment(selectedDate)
    .add(number, "days")
    .format("DD/MM/YYYY hh:mm:ss");
  console.log(number);

  return (
    <section id="dateBlock">
      <article>
        <div className="dateinput">
          <label htmlFor="date">FROM DATE :</label>
          <DateTimePicker
            value={selectedDate}
            format="dd/MM/yyyy hh:mm:ss"
            onChange={onChange1}
            className="input"
          />
        </div>
        <div className="dateinput">
          <label htmlFor="date">DURATION: </label>
          <input
            type="text"
            placeholder="Enter Number"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div className="dateinput">
          <label htmlFor="date">TO DATE:</label>
          <input value={startDate} />
        </div>
      </article>
    </section>
  );
};

export default DatePage;
