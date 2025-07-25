import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: "INTERNSHIP - .NET FSE",
      status: "ongoing",
      startDate: "Jan 2023",
      endDate: "June 2023",
      courseStatus: "Ongoing",
      trainer: "Ravi Kiran"
    },
    {
      name: "ADVANCED - Java FSE",
      status: "completed",
      startDate: "Jan 2023",
      endDate: "June 2023",
      courseStatus: "Ongoing",
      trainer: "Ravi Kiran"
    },
    {
      name: "CERTIFIED - Java FSE",
      status: "completed",
      startDate: "Jan 2023",
      endDate: "June 2023",
      courseStatus: "Ongoing",
      trainer: "Ravi Kiran"
    }
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
