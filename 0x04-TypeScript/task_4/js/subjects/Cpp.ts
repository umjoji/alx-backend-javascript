namespace Subjects {
  export interface Teacher {
    firstName: any;
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects {
    teacher: any;
    getRequirements(): string {
      return `Here is the list of requirements for Cpp`;
    }
    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}
