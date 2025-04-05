import React, {useState} from 'react';
import './App.css';
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => { //functional components
    const [courseGoals, setCourseGoals] = useState([
        {id: 'cg1', text: 'Uno'},
        {id: 'cg2', text: 'Dos'},
        {id: 'cg3', text: 'Tre'}
    ]);

    const addNewGoalHandler = newGoal => {
        // W tym przypadku jak wielokrotnie klikniemy akcję courseGoals może
        // nie być aktulanym ostatnim state'em
        // setCourseGoals(courseGoals.concat(newGoal));

        //Dlatego (jeśli state aktualny polega na poprzednim):
        //previousState => new state snapshot
        // setCourseGoals((prevCourseGoals) => {
        //     return prevCourseGoals.concat(newGoal);
        // });
        setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
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