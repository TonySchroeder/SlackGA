
export class Channel {
  channelName: string;
  ChannelDescription: string;
  channelId? : string;
  usersId: string[];

  constructor (obj? : any) {
    this.channelName = obj ? obj.channelName : '';
    this.ChannelDescription = obj ? obj.channChannelDescriptionlName : '';
    this.channelId = obj ? obj.channelId : '';
    this.usersId = obj ? obj.usersId : [];
  }

  public toJson() : any {
    return {
      channelName: this.channelName,
      ChannelDescription: this.ChannelDescription,
      channelId : this.channelId,
      usersId: this.usersId,
    }
  }
}
