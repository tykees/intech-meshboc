import { gql, request } from 'graphql-request'
import { Qahiri } from 'next/font/google'

const MASTER_URL ="https://eu-west-2.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master"

// const getAllAdsPlan=async()=>{
//     const query=gql`
//     query MyQuery {
//       adsplans {
//         cost
//         id
//         name
//       }
//     }
//     `
//     const result=await request(MASTER_URL, query)
//     return result;
// }

// const createCourse = async (email, name) => {
//   const query = gql`
//     mutation CreateUserCourseRequest($email: String!, $name: String!) {
//       createUserCourseRequest(data: {name: $name, userEmail: $email}) {
//         id
//         name
//         userEmail
//       }
//     }
//   `;

//   const variables = {
//     email: email,
//     name: name
//   };

//   const result = await request(MASTER_URL, query, variables);
//   return result;
// };

const createCourse = async (email, name) => {
  const query = gql`
  mutation MyMutation2 {
  createCourse(data: {userEmail: "`+email+`", name: "`+name+`"}) {
    name
    id
    userEmail
  }
}
  `
  const result = await request(MASTER_URL, query)
   return result; 
}

const getCourses = async (email) => {
  const query = gql`
  query MyQuery {
  courses(where: {userEmail: "`+email+`"}) {
    name
    image { 
      url
    }
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result
}


const getAttendance = async (email) => {
  const query = gql`
  query MyQuery2 {
  yourAttendances(where: {userEmail: "`+email+`"}) {
    attendance
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}

const getGrade = async(email)=> {
  const query = gql`
  query MyQuery {
  yourGrades(where: {userEmail: "`+email+`"}) {
    grade
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}



// const getUserCourses=async(email)=>{
//   const query=gql`
//   query MyQuery {
//     userCourses(where: {userEmail: "`+email+`"}) {
//       userEmail
//       id
//       name
//     }
//   }
//   `
//   const result=await request(MASTER_URL, query)
//   return result;
// }



export default {
  createCourse,
  getCourses,
  getAttendance,
  getGrade
}


