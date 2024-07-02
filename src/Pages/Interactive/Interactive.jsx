import React, { useState }  from 'react';
import './Interactive.css'

// const Interactive = () => {
//   return (
//     <div className='container'>
//       <h1>Interactive Learning App</h1>
//       <hr />
//       <h2>
//         Background: <br />
//         Alice, the manager, is organizing a team dinner to celebrate the successful completion of a major project. The event is scheduled for next week and will involve a variety of food and festivities. The dinner is intended to be a significant team-building event, with all team members encouraged to attend.
//       </h2>
//       <h2>
//         Situation: <br />
//         Bob, a member of Alice's team, has informed her that he will be unable to attend the dinner. He explains that he is observing Ramadan, a month when Muslims fast from sunrise to sunset. Eating and drinking during the daylight hours is not permitted, and the team dinner is scheduled during these hours.
//       </h2>
//       <h2>
//         Question: <br />
//         How should Alice respond to Bob's situation to best demonstrate inclusivity and respect for his religious practices?
//       </h2>
//       <ul>
//         <li>Alice should insist that Bob attend the dinner despite his fasting, emphasizing the importance of team participation.</li>
//         <li>Alice should acknowledge Bob's religious commitments and offer to reschedule the team dinner to an evening after Ramadan.</li>
//         <li>Alice should exclude Bob from the dinner and hold the event as planned without further discussion.</li>
//         <li>Alice should ask Bob to adjust his religious practices temporarily to accommodate the team event.</li>
//       </ul>
//       <button>Next</button>
//       <div className="index">1 of 5 questions</div>
//     </div>
//   )
// }

// export default Interactive

const scenarios = [
  { 
    id: "A", 
    scenario: "Alice, the manager, is organizing a team dinner to celebrate the successful completion of a major project. The event is scheduled for next week and will involve a variety of food and festivities. The dinner is intended to be a significant team-building event, with all team members encouraged to attend. Bob, a member of Alice's team, has informed her that he will be unable to attend the dinner as he is observing Ramadan, a month when Muslims fast from sunrise to sunset.",
    optionA: "Insist that Bob attend the dinner, emphasizing team participation.",
    optionB: "Acknowledge Bob's religious commitments and offer to reschedule the dinner.",
    nextIdA: "B",
    nextIdB: "C"
  },
  { 
    id: "B", // Incorrect Answer (Option B) for Scenario A
    scenario: "Alice insists that Bob attend. Bob feels uncomfortable and excluded. What should Alice do next?",
    optionA: "Apologize and offer to discuss further adjustments.",
    optionB: "Proceed without making any changes.",
    nextIdA: "D",
    nextIdB: "E"
  },
  { 
    id: "C", // Correct Answer (Option C) for Scenario A
    scenario: "Alice reschedules the dinner for a date after Ramadan. The team expresses gratitude for inclusivity. What next?",
    optionA: "Hold a brief meeting to discuss future inclusivity efforts.",
    optionB: "Ignore and proceed as usual.",
    nextIdA: "F",
    nextIdB: "G"
  },
  {

  }
]

const Interactive = () => {
  const [currentScenarioId, setCurrentScenarioId] = useState("A");

  const buildScenario = (id, option) => {
    let scenario = scenarios.find(o => o.id === id);
    let nextId = option === scenario.optionA ? scenario.nextIdA : scenario.nextIdB;
    let nextScenario = scenarios.find(o => o.id === nextId);
    setCurrentScenarioId(nextId);
    return nextScenario.scenario;
  };

  return (
    <div className='quizbox'>
      <h2>Scenario: {scenarios.find(o => o.id === currentScenarioId).scenario}</h2>
      <button onClick={() => buildScenario(currentScenarioId, scenarios.find(o => o.id === currentScenarioId).optionA)}>
        {scenarios.find(o => o.id === currentScenarioId).optionA}
      </button>
      <button onClick={() => buildScenario(currentScenarioId, scenarios.find(o => o.id === currentScenarioId).optionB)}>
        {scenarios.find(o => o.id === currentScenarioId).optionB}
      </button>
    </div>
  );
};

export default Interactive;



// const scenarios = [
//   { id: "A", scenario: "Alice wants to lalala", optionA: "Remove Bob", optionB: "Reschedule", nextId: "B", nextIdB: "C" }
// ]

// const buildScenario = (id, option) => {
//   const content = "";

//   let scenario = scenarios.find(o => o.id === id);

//   if (option == scenario.optionA) {
//     content = scenario.find(o => o.id === scenario.nextIdA).scenario
//   } else if (option == scenario.optionB) {
//     content = scenario.find(o => o.id === scenario.nextIdB).scenario
//   }


//   return <div>
//     {content}
//   </div>
// }