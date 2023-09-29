import {Base} from "./Base";


export class Pokemon extends Base{

  // @ts-ignore
  name: string;

  setName(name:string){
    this.name = name ;
  }

  // @ts-ignore
  type : string ;

  setType(type:string){
    this.type = type ;
  }

  // @ts-ignore
  photo : string ;

  // @ts-ignore
  date : string ;

  setDate(date:string){
    this.date = date ;
  }

  getValue(): String {
    return this.name;
  }

}
