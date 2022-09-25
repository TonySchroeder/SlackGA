export class User {
  userName: string;
  userLastName: string;
  email: string;
  password: string;
  openSideBar: boolean;
  currentChannelId: string;
  currentChannelIdForThread: string;
  currentThreadId: string;
  description: string;

  constructor(obj?: any) {
    this.userName = obj ? obj.userName : '';
    this.userLastName = obj ? obj.userLastName : '';
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
    this.currentChannelId = obj ? obj.currentChannelId : '';
    this.currentChannelIdForThread = obj ? obj.currentChannelIdForThread : '';
    this.currentThreadId = obj ? obj.currentThreadId : '';
    this.description = obj ? obj.description : '';
    this.openSideBar = obj ? obj.openSideBar : false;
  }

  public toJson() {
    return {
      userName: this.userName,
      userLastName: this.userLastName,
      email: this.email,
      password: this.password,
      currentChannelId: this.currentChannelId,
      currentChannelIdForThread: this.currentChannelIdForThread,
      currentThreadId: this.currentThreadId,
      description: this.description,
      openSideBar: this.openSideBar
    }
  }
}
