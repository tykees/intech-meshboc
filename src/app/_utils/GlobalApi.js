import { gql, request } from 'graphql-request'

const MASTER_URL ="https://eu-west-2.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master"


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

const createSubMail = async (email) =>{
  const query = gql`
  mutation MyMutation {
  createEmailSubscription(data: {subscribedMail: "`+email+`"}) {
    subscribedMail
  }
}
  `
  const result = await request(MASTER_URL,query)
  return result
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

const getAllBlogs = async()=> {
  const query = gql`
 query MyQuery {
  blogs(where: {}) {
    blogTitle
    blogContent
    imageOne {
      url
    }
    slug
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}


const getBlogBySlug = async (blogId) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: {slug: $slug}) {
        blogTitle
        blogContent
        imageOne {
          url
        }
        slug
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query, { slug: blogId });
    return result.blog;  // ✅ Returning the actual blog data
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};


export default {
  createCourse,
  getCourses,
  getAttendance,
  getGrade,
  getAllBlogs,
  getBlogBySlug,
  createSubMail
}


