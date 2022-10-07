export class Message {
  messageText: string;
  timestamp: number;
  textStyle: "normal" | "italic" | "bold" | "underline" | "strike" | "code" = 'normal';
  image?: string[] ;

  constructor(obj?: any) {
    this.messageText = obj ? obj.messageText : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.textStyle = obj ? obj.textStyle : '';
    this.image = obj ? obj.image : ''
  }

  public toJson(): any {
    return {
      messageText: this.messageText,
      timestamp: this.timestamp,
      textStyle: this.textStyle,
      image: this.image,
    }
  }
}
