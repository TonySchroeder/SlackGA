export class Message {
  messageText: string;
  timestamp: number;
  usersId: string; // is the firebase document ID from the user who sent the message, for example user 3C651LYhk1HaB8Y0Vsbf
  channelId: string; // is the firebase document ID from the channel, in which message was posted, for example channel 8liMczKcm1Paer7sJbAX
  threadId: string; // is the firebase document ID from the thread, in which message was posted, for example channel 8liMczKcm1Paer7sJbAX
  textStyle: "normal" | "italic" | "bold" | "linethrough" | "code" = 'normal';
  // imageUrl?

  constructor(obj?: any) {
    this.messageText = obj ? obj.messageText : '';
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.usersId = obj ? obj.usersId : ''
    this.channelId = obj ? obj.channelId : ''
    this.threadId = obj ? obj.threadId : ''
    this.textStyle = obj ? obj.textStyle : '';
  }

  public toJson(): any {
    return {
      messageText: this.messageText,
      timestamp: this.timestamp,
      usersId: this.usersId,
      channelId: this.channelId,
      threadId: this.threadId,
      textStyle: this.textStyle,
    }
  }
}
