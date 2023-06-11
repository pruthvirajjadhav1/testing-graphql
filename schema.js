import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course{
        id: ID
        courseName: String
        category: String
        price: Number
        language: String
        email: String
        stack: Stack
        teachingAssistant: [TeachAssist]
    }

    type TeachAssist{
        firstName: String
        lastName: String
        experiance: Number
    }

    enum stack{
        WEB
        MOBILE
        OTHER
    }

    type Query{
        getCourse(id: ID): Course
    }

    input CourseInput{
        id: ID
        courseName: String!
        category: String
        price: Number!
        language: String
        email: String
        stack: Stack
        teachingAssistant: [TeachAssistInput]!
    }

    input TeachAssistInput{
        firstName: String
        lastName: String
        experiance: Number
    }

    type Mutation{
        createCourse(input: CourseInput): Course
    }
`);

// Here the query part is most important
// Whenever if I run query of getCourse it will send the data accordingly
// So in the input fieal if i put ' ! ' then it is a compulsory filed to enter

export default schema;
