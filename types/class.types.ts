export interface IClass {
  _id: string;

  classname: string;
  section: string;
  room_no: number;
  teacher: {
    _id: string;
    user: {
      _id: string;
      name: string;
    };
  };
}
