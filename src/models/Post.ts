import PostItem from "./PostItem";

export default class Post {
  constructor(
    public id: string,
    public views: number,
    public title: string,
    public body: string,
    public userName: string,
    public userId: string,
    public points: number,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public postItems: Array<PostItem>
  ) {}
}
