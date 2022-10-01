export class Message {
  messageText: string;
  timestamp: number;
  textStyle: "normal" | "italic" | "bold" | "linethrough" | "code" = 'normal';

  constructor(obj?: any) {
    this.messageText = obj ? obj.messageText : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.textStyle = obj ? obj.textStyle : '';
  }

  public toJson(): any {
    return {
      messageText: this.messageText,
      timestamp: this.timestamp,
      textStyle: this.textStyle,
    }
  }
}
