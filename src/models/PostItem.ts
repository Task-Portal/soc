export default class PostItem {
  constructor(
    public id: string,
    public views: number,
    public points: number,
    public body: string,
    public userName: string,
    public userId: string,
    public createdOn: Date,
    public postId: string
  ) {}
}
