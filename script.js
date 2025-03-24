const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,     //the ID of the course the assignment group belongs to
  group_weight: 25,   //the percentage weight of the entire assignment group
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",       //the due date
      points_possible: 150        //max amount of points possible
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];





// final result stored in 2 objects each with keys id:, avg:, 1:, 2:

const results = []
try {
  if (AssignmentGroup.course_id !== CourseInfo.id) throw `Invalid Course ID`;
}
catch (err) {
  console.log(err)
}
        if (results.includes({id: 125})){           //109 - 117 are making objects for each student
            console.log(`Id exists`);
           } else {
            results.push({id: 125})
            } 
         if (results.includes({id: 132})){
            console.log(`Id exists`);
         }  else {
            results.push({id: 132})
         }  console.log(results)
      
      



        //  LearnerSubmissions.forEach(function(assignment_id, results) { ------------------------------------------- attempt 1 at using a .forEach add the assignment ids to the results array
        //   if (results.includes(assignment_id)){
        //     return `here`
        //   } else {
        //     results.push(assignment_id)
        //     console.log(results)
        //   }
          
        //});

      // 
      // LearnerSubmissions.forEach(assignmentIDs)        -------------------- attempt 2 at using a .forEach to add the assignment ids to the results array
      //    function assignmentIDs (assignment_id, results){
      //     if (results.includes(assignment_id)){
      //      return `yes`
      //     }   else {
      //       results.push(assignment_id)
      //       console.log(results)
      //     } 
      // }
         
         
      // function validateMatchingAssignID(assignment_id, id){
      //   if (assigment_id !== id){
      //     throw error (`no match`)
      //     console.log(validateMatchingAssignID(assignment_id, id))
      //   }

      //   
      // }
        //  for (let i = 0; i < LearnerSubmissions.length; i++){                                                              //basic for loop
        //     if (LearnerSubmissions[i].assignment_id > 0 && LearnerSubmissions[i].learner_id === results[1].id){             //failed to do this a better way so tried to make a conditional to retrieve only the assignment ids for the student in the object at index 1 in results array
        //         let assignmentlearner2 = ``
        //          assignmentlearner2 += LearnerSubmissions[i].assignment_id                           // now I have a string of assignment id's for the student at index 1 
        //                                                                                            
        //           results.splice(1. 0, assignmentlearner2)                                               //tried to add the assignment ids to the index of the student, but struggling to splice in a nested array (it keeps returning a results array with objects for each student and an object for assignment ids)
        //           console.log(results)
        //       }   function matchAssign (assignment_id, assignID){                                   //
        //           let assignmentinfo = AssignmentGroup.assignments
        //           if (assignmentinfo[i].id === LearnerSubmissions[i].assignment_id){
        //             console.log(`match`)
                    
        //            }
        //            }
                  //AssignmentGroup.assignments.includes ((id) => id.match == results[i].id); console.log(`yes`)
                                                                                                                  
        //              

         //    Attempt at the avg calculation: 
        //     if (AssignmentGroup.assignments[i].due_at > `2025-01-01`); continue; {
        //         } else if {
        //         }   if (LearnerSubmission[i].submission.submitted_at > AssignmentGroup.assignments[i].due_at){ 
        //                 function lateScore(score, percent_off = 0.1, points_possible) {
        //                 let newScore = score - (percent_off * points_possible);
        //                 } try {
        //                    if (points_possible == 0) throw `Not valid number`;
        //                } catch (error) {
                           
        //                }
        //             }    else (LearnerSubmission[i].submission.submitted_at <= AssignmentGroup[i].due_at){
                        
        //                    function avgScore(totalScore, points_possible){
        //                     let avg = (totalScore / points_possible)
        //                        return avg
        //                 }
        //             }   
        
                




//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];

//     return result;
//   }

//const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);


//console.log(result);





//1.) If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
// 2.) You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
// 3.) Use try/catch and other logic to handle these types of errors gracefully.
// 4.) If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
// 5.) Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
// 6.) You may use as many helper functions as you see fit.

