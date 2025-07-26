 import React ,{useState}from "react"
 import Modal from "./Modal"
 import {exerciseDescriptions} from '../utils'

 export default function WorkoutCard(props) {
   const{trainingPlan,workoutIndex,type,dayNum,icon,savedWeights,handleSave,handleComplete}=props
// // we used ||{} because in case destructoring of  traingPlan gets an error
// //  for some reason the atrribute rendering will transfer to empty object {} which will also give 
// // undefined but code code will not stop 
    const {warmup,workout}=trainingPlan ||{}
    const[showExceriseDescription,setShowExerciseDescription]=useState(null);
    const [weights,setWeights]=useState(savedWeights || {})

    function handleAddWeight(title,weight){
     const newObj={
         ...weights,
         [title]:weight
    }
    setWeights(newObj)
  }

   return (
       <div className="workout-container">
            {showExceriseDescription &&(
           <Modal showExceriseDescription={showExceriseDescription}
            handleCloseModal={()=>{
               setShowExerciseDescription(null)
             }}/>
               )}
           <div className="workout-card card">
               <div className="plan-card-header">
                     {/* we used attribute dayNum and icon that we got from grid.jsx after making it a constover there */}
                     <p>
                         Day{dayNum}
                  </p>
                   {icon}
                </div>
                <div className="plan-card-header">
                 <h2><b>{type} Workout</b></h2> 
               </div>
           </div>

           <div className="workout-grid">
               <div className="exercise-name">
                   <h4>Warmup</h4>
               </div>
           <h6>Sets</h6>
           <h6>Reps</h6>
           <h6 className="weight-input">Max Weight</h6>
           {/* we map over the warmup and workout attribute that we destructed from trainPlan and
            because we are mapping we need to provide a unique key,hence warmupIndex and workoutIndex */}
           {warmup.map((warmupExcercise,warmupIndex)=>{
               return(
                  <React.Fragment key={warmupIndex}>
                   <div className="exercise-name">
                       {/* inthe paragraph we say to go to (warmupIndex +1 )because in day starts with 1 and index with 0 and in warmup look for name */}
                       <p>{warmupIndex+1}.{warmupExcercise.name} </p>
                        <button onClick={()=>{
                           setShowExerciseDescription({
                               name:warmupExcercise.name,
                              description:exerciseDescriptions[warmupExcercise.name]

                          })
                            
                        }} className="help-icon">
                           <i className="fa-regular fa-circle-question"/>
                       </button>
                    </div>
                    <p className="exercise-info">{warmupExcercise.sets}</p>
                    <p className="exercise-info">{warmupExcercise.reps} </p>
                    <input className="weight-input" placeholder="N/A" disabled/>
                   </React.Fragment>
                )
            })}

            </div>

{/* same as warmup but input is valid here  */}
           <div className="workout-grid">
               <div className="exercise-name">
                   <h4>Workout</h4>
               </div>
           <h6>Sets</h6>
           <h6>Reps</h6>
           <h6 className="weight-input">Max Weight</h6>
           {workout.map((workoutExcercise,workoutIndex)=>{
               return(
                  <React.Fragment key={workoutIndex}>
                   <div className="exercise-name">
                       <p>{workoutIndex+1}.{workoutExcercise.name} </p>
                       <button onClick={()=>{
                           setShowExerciseDescription({
                               name:workoutExcercise.name,
                                 description:exerciseDescriptions[workoutExcercise.name]

                             })
                            
                          }} 
                         className="help-icon">
                             <i className="fa-regular fa-circle-question"/>
                       </button>
                     </div>
                     <p className="exercise-info">{workoutExcercise.sets}</p>
                     <p className="exercise-info">{workoutExcercise.reps} </p>
                     <input value={weights[workoutExcercise.name] ||''} 
                    onChange={(e)=>{
                       handleAddWeight(workoutExcercise.name, e.target.value)
                   }} 
                   className="weight-input" placeholder="10"/>
                 </React.Fragment>
               )
           })}

            </div>
            <div className="workout-buttons">
                <button onClick={() => {
                    handleSave(workoutIndex, { weights })
                }}>Save & Exit</button>
                <button onClick={() => {
                    handleComplete(workoutIndex, { weights })
                }} disabled={Object.keys(weights).length !== workout.length}>Complete</button>
            </div>
        </div>
    )
}


  