export class Message {
  messageText: string;
  timestamp: number;
  usersId: string;
  textStyle: "normal" | "italic" | "bold" | "underline" | "strike" | "code" = 'normal';

  constructor(obj?: any) {
    this.messageText = obj ? obj.messageText : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.usersId = obj ? obj.usersId : ''
    this.textStyle = obj ? obj.textStyle : '';
  }

  public toJson(): any {
    return {
      messageText: this.messageText,
      timestamp: this.timestamp,
      usersId: this.usersId,
      textStyle: this.textStyle,
    }
  }
}
