import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Results({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalIntereset =
            data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
            const totalAmountInvesteed = data.valueEndOfYear - totalIntereset;
            
            return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalIntereset)}</td>
              <td>{formatter.format(totalAmountInvesteed)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
