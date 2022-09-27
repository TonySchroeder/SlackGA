export class Thread {
  firstMessage: string;
  timestamp: number;
  usersId: string; // is the firebase document ID from the user who sent the message, for example user 3C651LYhk1HaB8Y0Vsbf
  textStyle: "normal" | "italic" | "bold" | "linethrough" | "code" = 'normal';


  constructor(obj?: any) {
    this.firstMessage = obj ? obj.firstMessage : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.usersId = obj ? obj.usersId : ''
    this.textStyle = obj ? obj.textStyle : '';
  }


  public toJson(): any {
    return {
      firstMessage: this.firstMessage,
      timestamp: this.timestamp,
      usersId: this.usersId,
      textStyle: this.textStyle,
    }
  }
}
