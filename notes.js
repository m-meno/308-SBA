//1.) If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
// 2.) You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
// 3.) Use try/catch and other logic to handle these types of errors gracefully.
// 4.) If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
// 5.) Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
// 6.) You may use as many helper functions as you see fit.



//if (AssignmentGroup.course_id !== CourseInfo.id){
//      console.log(`Error-Invalid Input`)
//}

// if (AssignmentGroup.assignments[i].due_at <)




const studentsubmission = []
studentsubmission.push(LearnerSubmissions)
function assignmentID(assignment_id) {

}



if (LearnerSubmission[i].submission.submitted_at > AssignmentGroup.assignments[i].due_at)
    function lateScore(score, dec_percent_off = 0.1, points_possible) {
        let newScore = score - (dec_percent_off * points_possible)
    }



if (LearnerSubmissions[i].learner_id !== LearnerSubmissions[i].learner_id); continue; {
}  else {
    } if (AssignmentGroup.assignments[i].due_at > `2025-01-01`); continue; {
        } else if {
        }   if (LearnerSubmission[i].submission.submitted_at > AssignmentGroup.assignments[i].due_at){ 
                function lateScore(score, percent_off = 0.1, points_possible) {
                let newScore = score - (percent_off * points_possible);
                } try {
                   if (points_possible == 0) throw `Not valid number`;
               } catch (error) {
                   
               }
            }    else (LearnerSubmission[i].submission.submitted_at <= AssignmentGroup[i].due_at){
                
                function avgScore(totalScore, points_possible){
                    let avg = (totalScore / points_possible)
                }
            }   



        //  const assignmentInfo = AssignmentGroup.assignments;
        //  if (assignmentInfo.includes(`id:`)){
          
        //   console.log(`yes`)
        //  }
         

function validateMatchingAssignID(assignment_id, id){
    if (assigment_id !== id){
      throw error (`no match`)
      console.log(validateMatchingAssignID(assignment_id, id))
    }
  }
  
  


// will have an object called keys called  "avg": number
//      <assignment_id>: number,

try {
    if (AssignmentGroup.course_id == CourseInfo.id) throw `Match`;
                                          catch (err)
                                          console.log(err)
}



                                            let sum = 0;
//   for (let i = 0; i < LearnerSubmissions.length; i++){
//     if (LearnerSubmissions[i].learner_id !== LearnerSubmissions[i].learner_id) continue; // trying to say skip if it's not the same student but not working
//         else { 

//          sum += LearnerSubmissions[i].submission.score
//         } console.log(sum)
//         }

if (LearnerSubmissions[i].assignment_id == AssignmentGroup.assignments[i].id) {
    console.log(`Match`)




    if (LearnerSubmissions[i].learner_id == results[0].id) {
        console.log(`Yes`)
    } if () {
        console.log(`Oh`)
        // }    if (AssignmentGroup.assignments[i].due_at > ){

    }




    //        //let i = 0;
    // for (let i = 0; i < LearnerSubmissions.length; i++){
    //     Number.LearnerSubmissions[i].submission.submitted_at = []                //this gets a reference error
    //     console.log(Number.submitted_at)
    //     }


    for (let i = 0; i < LearnerSubmissions.length; i++) {         //created a for loop
        if (LearnerSubmissions[i].assignment_id > 0) {             //&& LearnerSubmissions[i].learner_id      //---trying to do a conditional?
            let sumAssignmentIDs = ``
            sumAssignmentIDs += LearnerSubmissions[i].assignment_id
            console.log(sumAssignmentIDs)                                        // now I have a string of assignment id's and the first three are for student id 125 and the last two for student id 
        }
        //if (sumAssignmentIDs[1] = AssignmentGroup.assignments[1].id)           //can;t iterate in the same loop because diff length arrrays
        //    console.log(`Match`)
    }


    //if (sumAssignmentIDs[1] = AssignmentGroup.assignments[1].id)           //can;t iterate in the same loop because diff length arrrays
    //    console.log(`Match`)





    if (LearnerSubmissions[i].assignment_id > 0 && LearnerSubmissions[i].learner_id === results[1].id) {             //conditional to retrieve only the assignment ids for the student in the object at index 1 in results array
        let assignment = ``
        assignment += LearnerSubmissions[i].assignment_id
        // now I have a string of assignment id's for the student at index 1 
        //results.push(assignment)                                               //trying to add the assignment ids to the index of the student, but struggling to splice in a nested array (it keeps returning a results array with objects for each student and an object for assignment ids)
        console.log(assignment)
    }   //function matchAssign (assignment_id, assignID){
    // let assignmentinfo = AssignmentGroup.assignments
    // if (assignmentinfo[i].id === LearnerSubmissions[i].assignment_id){
    //   console.log(`match`)

    // }
    // }
    AssignmentGroup.assignments.includes((id) => id.match == results[i].id); console.log(`yes`)
    //Array.includes ((el, index) => el.match == ``)
}


//if (sumAssignmentIDs[1] = AssignmentGroup.assignments[1].id)           //can;t iterate in the same loop because diff length arrrays
//    console.log(`Match`)



let i = 0;
const keys = Object.keys(AssignmentGroup.assignments[i]); //learning things! This returns the keys of AssignmentGroup ex: [ 'id', 'name', 'due_at', 'points_possible' ]
console.log(keys)



//  array of objects with student id is the primary key 
//  weighted average 
//  score for assignment 1
//  score for assignment 2

// givens: 

// const results = []

// const students = [];

// LearnerSubmissions.forEach(studentsResults)                         
//  function studentsResults(learner_id, results){
//  if (results.include(learner_id)){
//   return `Found`
//  } else {
//    results.push(learner_id)
//     console.log(results)
//   } 
// }



// function compareArrays(submissions, assignment_info, id){
//   return submissions.filter(`id:` => assignment_info.includes(`id:`));

// }

for (let i = 0; i < LearnerSubmissions.length; i++){   
    //       function getAssignID (arr, key){
    //       // let arr = LearnerSubmissions;
    //       // let key = assignment_id;
    //       let assignmentIDS = [];
    //       if (arr[i] && arr[i].includes(assignment_id)) {
    //       assignmentIDS.push(arr[i][assignment_id]);
    //       console.log(assignmentIDS)
    //     }
    //  }


    //Array.includes ((el, index) => el.match == ``)



    unction validateMatchingAssignID(assignment_id, id){
        if (assigment_id !== id){
          throw error (`no match`)
          console.log(validateMatchingAssignID(assignment_id, id))
        }
      }