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

  const results = []

  const students = []

  LearnerSubmissions.forEach(studentsResults)
    function studentsResults(learner_id, results){
          if (results.include(learner_id)){
            return `Found`
        } else {
            results.push(learner_id)
             console.log(results)
          } 
        }




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