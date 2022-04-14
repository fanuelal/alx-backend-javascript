namespace Subjects {
  export interface Teacher {
   experienceTeachingReact?: number;
  export clas Java extends Subjects {
   getRequirements(): string {
     return `Here is the list of requirements for Java`;
     }
   getAvailableTeacher(): string {
     return this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
   }
}
}
}