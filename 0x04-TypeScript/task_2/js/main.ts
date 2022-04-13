export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
export class Director implements DirectorInterface {
    workFromHome() { return 'Working from home'; }
    getCoffeeBreak() { return 'Getting a coffee break'; }
    workDirectorTasks() { return 'Getting to director tasks'; }
}

export class Teacher implements TeacherInterface {
    workFromHome() { return 'Cannot work from home'; }
    getCoffeeBreak() { return 'Cannot have a break';}
    workTeacherTasks() {return 'Getting to work';}
}

export const createEmployee = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) return new Teacher();
    else return new Director();
}

export const isDirector = (employee: Director | Teacher): employe is Director => {
  return employee instanceof Director;
}

export const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) return employee.workDirectorTasks();
  else return employee.workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string => {
  if (todayClass == 'Math') return 'Teaching Math';
  else if (todayClass == 'History') return 'Teaching History'; 
}