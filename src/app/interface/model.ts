import {Base} from "./Base";


export class Pokemon extends Base{

  // @ts-ignore
  name: string;

  // @ts-ignore
  type : string ;

  // @ts-ignore
  photo : string ;

  // @ts-ignore
  date : string ;

  getValue(): String {
    return this.name;
  }

}
