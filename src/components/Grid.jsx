import { workoutProgram as training_plan } from "../utils/index.js"
import WorkoutCard from "./WorkoutCard.jsx"

export default function Grid(){
     const isLocked=false
     const selectedWorkout=0

    return(
        <div className="training-plan-grid">
            {Object.keys(training_plan).map((workout,workoutIndex)=>{
                // isLocked is a constant to that user cannot open another workout without complwting prior one
                const type = workoutIndex %3===0?'Push':
                workoutIndex %3===1?
                'Pull':
                'Legs'

                const trainingPlan = training_plan[workoutIndex];

                if(workoutIndex===selectedWorkout){
                    return(
                        <WorkoutCard key={workoutIndex} />
                    )
                }
               return(
                // when we use this mapping to return a lot of item we need to give the top return element a unique key,hence workoutIndex
                <button className={'card plan-card '+(isLocked?'inactive':'')} key={workoutIndex}>
                    <div className="plan-card-header">
                        <p>Day {((workoutIndex /8 )<= 1)?'0'+(workoutIndex+1):workoutIndex+1}</p>
                    </div>

{/* her we checked the condition of locked workout and if not locked which icon to display */}
                    {isLocked ? (
                        <i className="fa-solid fa-lock"></i>
                    ):(
                        workoutIndex % 3 === 0)?(
                            <i className="fa-solid fa-dumbbell"></i>
                        ):(
                            workoutIndex % 3 === 1?(
                            <i className ="fa-solid fa-weight-hanging"></i>
                        ):(
                            <i className ="fa-solid fa-bolt"></i>
                        )
                        )
                    }

                    <div className="plan-card-header">
                        <h4>
                            <b> {type}</b>
                        </h4>

                    </div>

                </button>
               )
            })}

        </div>
    )
}