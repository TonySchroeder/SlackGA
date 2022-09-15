
export class Channel {
  channelName: string;
  ChannelDescription: string;
  creatorUser: string;
  creationDate: number;
  usersId: string[];

  constructor(obj?: any) {
    this.channelName = obj ? obj.channelName : '';
    this.ChannelDescription = obj ? obj.channChannelDescriptionlName : '';
    this.creatorUser = obj ? obj.creatorUser : '';
    this.creationDate = obj ? obj.creationDate : new Date().getTime();
    this.usersId = obj ? obj.usersId : [];
  }

  public toJson(): any {
    return {
      channelName: this.channelName,
      ChannelDescription: this.ChannelDescription,
      creatorUser: this.creatorUser,
      creationDate: this.creationDate,
      usersId: this.usersId,
    }
  }
}
