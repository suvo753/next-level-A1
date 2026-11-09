


const multiplyValue = (value: number , multiplier?: number)=> {

    if(multiplier === undefined){

        return value * 2 

    }else {
        return value * multiplier ;
    }


}

// console.log(multiplyValue(0));



const processInput =(value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } 
    else if (typeof value === "number") {
        return value * 10;
    } 
    else {
        return value === true ? "Active" : "Inactive";
    }
}



// console.log(processInput(" TypeScript "));












const formatCoordinate =( coordinate: readonly [number, number, string]) =>{
    const [latitude, longitude, locationName] = coordinate ;  
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));




const concatenateArrays=<T>(...arrays: T[][]): T[]=> {
    let result: T[] = [];

    for (const array of arrays) {
        result = result.concat(array);
    }

    return result;
}


// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));




interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}



function getPopularCourses(courses: Course[], minStudents: number) {

    const result: Course[] = [];

    for (const course of courses) {

        if (course.isPublished === true && course.students >= minStudents) {
            result.push(course);
        }

    }

    return result;
}


 
const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];



console.log(getPopularCourses(courses, 80));











const pluckValues = <T, K extends keyof T> (items: T[], key: K) => {

    const result: T[K][] = [];

    for (const item of items) {
        result.push(item[key]);
    }

    return result;
}


const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];


console.log(pluckValues(users, "role"));

