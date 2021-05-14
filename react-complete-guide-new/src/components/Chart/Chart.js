import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

const values = props.dataPoints.map(x=>x.value);
const maxValueOverMonths = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValueOverMonths}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
