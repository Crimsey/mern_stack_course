import React from 'react';
import './App.css';
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => { //functional components
    const courseGoals = [
        {id: 'cg1', text: 'Uno'},
        {id: 'cg2', text: 'Dos'},
        {id: 'cg3', text: 'Tre'}
    ];

    const addNewGoalHandler = (newGoal) => {
        courseGoals.push(newGoal);
        console.log(courseGoals);
    }

    return (
        <div className="course-goals">
            <h2>Course Goals 2</h2>
            <NewGoal onAddGoal={addNewGoalHandler}/>
            <GoalList goals={courseGoals} />
        </div>
    );
};


export default App;