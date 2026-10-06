export interface ISubjects {
  _id: string;
  subjectname: string;
  credithour: string;
  teacher: {
    _id: string;
    user: {
      _id: string;
      name: string;
    };
  };
  program: {
    _id: string;
    name: string;
  };
  class: {
    _id: string;
    classname: string;
  };
}
