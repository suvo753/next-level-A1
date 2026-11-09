


const multiplyValue = (value: number , multiplier?: number) : number  => {

    if(multiplier === undefined){

        return value * 2 

    }else {
        return value * multiplier ;
    }


}




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
















const formatCoordinate =( coordinate: readonly [number, number, string]) : string =>{
    const [latitude, longitude, locationName] = coordinate ;  
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}







const concatenateArrays=<T>(...arrays: T[][]): T[]=> {
    let result: T[] = [];

    for (const array of arrays) {
        result = result.concat(array);
    }

    return result;
}






interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}



const getPopularCourses =(courses: Course[], minStudents: number) :  Course[]  => {

    const result: Course[] = [];

    for (const course of courses) {

        if (course.isPublished === true && course.students >= minStudents) {
            result.push(course);
        }

    }

    return result;
}


 
















const pluckValues = <T, K extends keyof T> (items: T[], key: K) : T[K][]  => {

    const result: T[K][] = [];

    for (const item of items) {
        result.push(item[key]);
    }

    return result;
}














class Employee {
    
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const manager = new Manager("Alice", 50000, "Engineering");







 const validateAgeAsync = async ( age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}