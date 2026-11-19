import { calculateInvestmentResults } from "../../util/investment";

export default function Results({ userInput }) {
  console.log("userInput", userInput);
  const resultData = calculateInvestmentResults(userInput);
  console.log("resultData", resultData);
  return "<h1>Hi</h1>";
}
