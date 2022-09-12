export class Message {
  messagetext: string;
  timestamp: number;
  usersId: string; // is the firebase document ID from the user who sent the message, for example user 3C651LYhk1HaB8Y0Vsbf
  channelId: string; // is the firebase document ID from the channel, in which message was posted, for example channel 8liMczKcm1Paer7sJbAX
  textStyle: "normal" | "italic" | "bold" | "linethrough" | "code" = 'normal';
  // imageUrl?

  constructor(obj?: any) {
    this.messagetext = obj ? obj.messagetext : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.usersId = obj ? obj.usersId : ''
    this.channelId = obj ? obj.channelId : ''
    this.textStyle = obj ? obj.textStyle : '';
  }

  public toJSON(): any {
    return {
      messagetext: this.messagetext,
      timestamp: this.timestamp,
      usersId: this.usersId,
      channelId: this.channelId,
      textStyle: this.textStyle,
    }
  }
}
