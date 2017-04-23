

export interface Query extends Node {
  node: Node | null;
  allCaptchas: CaptchasConnection | null;
  captcha: Captcha | null;
  captchaByRowId: Captcha | null;
  allComments: CommentsConnection | null;
  comment: Comment | null;
  commentByRowId: Comment | null;
  allPosts: PostsConnection | null;
  post: Post | null;
  postByRowId: Post | null;
  allStatics: StaticsConnection | null;
  static: Static | null;
  staticByRowId: Static | null;
  allUsers: UsersConnection | null;
  user: User | null;
  userByRowId: User | null;
  query: Query;
  id: string;
}

export interface NodeQueryArgs {
  id: string;
}

export interface AllCaptchasQueryArgs {
  orderBy: CaptchasOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CaptchaCondition | null;
}

export interface CaptchaQueryArgs {
  id: string;
}

export interface CaptchaByRowIdQueryArgs {
  rowId: number;
}

export interface AllCommentsQueryArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface CommentQueryArgs {
  id: string;
}

export interface CommentByRowIdQueryArgs {
  rowId: number;
}

export interface AllPostsQueryArgs {
  orderBy: PostsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: PostCondition | null;
}

export interface PostQueryArgs {
  id: string;
}

export interface PostByRowIdQueryArgs {
  rowId: number;
}

export interface AllStaticsQueryArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export interface StaticQueryArgs {
  id: string;
}

export interface StaticByRowIdQueryArgs {
  rowId: number;
}

export interface AllUsersQueryArgs {
  orderBy: UsersOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: UserCondition | null;
}

export interface UserQueryArgs {
  id: string;
}

export interface UserByRowIdQueryArgs {
  rowId: number;
}

export interface Node {
  id: string;
}

export type CaptchasOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "BASE64_ASC" | "BASE64_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC";

export type Cursor = any;

export interface CaptchaCondition {
  rowId: number | null;
  base64: string | null;
  createdAt: Datetime | null;
}

export type Datetime = any;

export interface CaptchasConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<CaptchasEdge> | null;
  nodes: Array<Captcha>;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: Cursor | null;
  endCursor: Cursor | null;
}

export interface CaptchasEdge {
  cursor: Cursor | null;
  node: Captcha;
}

export interface Captcha extends Node {
  id: string;
  rowId: number;
  base64: string;
  createdAt: Datetime | null;
}

export type CommentsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "COMMENT_ID_ASC" | "COMMENT_ID_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "LOCKED_ASC" | "LOCKED_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export interface CommentCondition {
  rowId: number | null;
  postId: number | null;
  userId: number | null;
  commentId: number | null;
  content: string | null;
  locked: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CommentsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<CommentsEdge> | null;
  nodes: Array<Comment>;
}

export interface CommentsEdge {
  cursor: Cursor | null;
  node: Comment;
}

export interface Comment extends Node {
  id: string;
  rowId: number;
  postId: number;
  userId: number;
  commentId: number;
  content: string;
  locked: boolean;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  commentsByCommentId: CommentsConnection | null;
}

export interface CommentsByCommentIdCommentArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface Post extends Node {
  id: string;
  rowId: number;
  userId: number;
  title: string;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  userByUserId: User | null;
  commentsByPostId: CommentsConnection | null;
  staticsByPostId: StaticsConnection | null;
}

export interface CommentsByPostIdPostArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface StaticsByPostIdPostArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export type PostTopic = "DISCUSSION" | "INSPIRATION" | "HELP" | "SHOWCASE";

export interface User extends Node {
  id: string;
  rowId: number;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string;
  firstName: string;
  lastName: string;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  postsByUserId: PostsConnection | null;
  commentsByUserId: CommentsConnection | null;
  staticsByUserId: StaticsConnection | null;
}

export interface PostsByUserIdUserArgs {
  orderBy: PostsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: PostCondition | null;
}

export interface CommentsByUserIdUserArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface StaticsByUserIdUserArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export type PostsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "TITLE_ASC" | "TITLE_DESC" | "URL_ASC" | "URL_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "TOPIC_ASC" | "TOPIC_DESC" | "VISIT_ASC" | "VISIT_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export interface PostCondition {
  rowId: number | null;
  userId: number | null;
  title: string | null;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface PostsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<PostsEdge> | null;
  nodes: Array<Post>;
}

export interface PostsEdge {
  cursor: Cursor | null;
  node: Post;
}

export type StaticsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "LONG_ASC" | "LONG_DESC";

export interface StaticCondition {
  rowId: number | null;
  userId: number | null;
  postId: number | null;
  long: number | null;
}

export interface StaticsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<StaticsEdge> | null;
  nodes: Array<Static>;
}

export interface StaticsEdge {
  cursor: Cursor | null;
  node: Static;
}

export interface Static extends Node {
  id: string;
  rowId: number;
  userId: number;
  postId: number;
  long: number;
  userByUserId: User | null;
  postByPostId: Post | null;
}

export type UsersOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "QQ_ID_ASC" | "QQ_ID_DESC" | "WEIBO_ID_ASC" | "WEIBO_ID_DESC" | "FACEBOOK_ID_ASC" | "FACEBOOK_ID_DESC" | "TWITTER_ID_ASC" | "TWITTER_ID_DESC" | "GITHUB_ID_ASC" | "GITHUB_ID_DESC" | "AVATAR_ASC" | "AVATAR_DESC" | "NICKNAME_ASC" | "NICKNAME_DESC" | "FIRST_NAME_ASC" | "FIRST_NAME_DESC" | "LAST_NAME_ASC" | "LAST_NAME_DESC" | "PUBLISHER_ASC" | "PUBLISHER_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export interface UserCondition {
  rowId: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string | null;
  firstName: string | null;
  lastName: string | null;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UsersConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<UsersEdge> | null;
  nodes: Array<User>;
}

export interface UsersEdge {
  cursor: Cursor | null;
  node: User;
}

export interface Mutation {
  createCaptcha: CreateCaptchaPayload | null;
  updateCaptcha: UpdateCaptchaPayload | null;
  updateCaptchaByRowId: UpdateCaptchaPayload | null;
  deleteCaptcha: DeleteCaptchaPayload | null;
  deleteCaptchaByRowId: DeleteCaptchaPayload | null;
  createComment: CreateCommentPayload | null;
  updateComment: UpdateCommentPayload | null;
  updateCommentByRowId: UpdateCommentPayload | null;
  deleteComment: DeleteCommentPayload | null;
  deleteCommentByRowId: DeleteCommentPayload | null;
  createPost: CreatePostPayload | null;
  updatePost: UpdatePostPayload | null;
  updatePostByRowId: UpdatePostPayload | null;
  deletePost: DeletePostPayload | null;
  deletePostByRowId: DeletePostPayload | null;
  createStatic: CreateStaticPayload | null;
  updateStatic: UpdateStaticPayload | null;
  updateStaticByRowId: UpdateStaticPayload | null;
  deleteStatic: DeleteStaticPayload | null;
  deleteStaticByRowId: DeleteStaticPayload | null;
  createUser: CreateUserPayload | null;
  updateUser: UpdateUserPayload | null;
  updateUserByRowId: UpdateUserPayload | null;
  deleteUser: DeleteUserPayload | null;
  deleteUserByRowId: DeleteUserPayload | null;
}

export interface CreateCaptchaMutationArgs {
  input: CreateCaptchaInput;
}

export interface UpdateCaptchaMutationArgs {
  input: UpdateCaptchaInput;
}

export interface UpdateCaptchaByRowIdMutationArgs {
  input: UpdateCaptchaByRowIdInput;
}

export interface DeleteCaptchaMutationArgs {
  input: DeleteCaptchaInput;
}

export interface DeleteCaptchaByRowIdMutationArgs {
  input: DeleteCaptchaByRowIdInput;
}

export interface CreateCommentMutationArgs {
  input: CreateCommentInput;
}

export interface UpdateCommentMutationArgs {
  input: UpdateCommentInput;
}

export interface UpdateCommentByRowIdMutationArgs {
  input: UpdateCommentByRowIdInput;
}

export interface DeleteCommentMutationArgs {
  input: DeleteCommentInput;
}

export interface DeleteCommentByRowIdMutationArgs {
  input: DeleteCommentByRowIdInput;
}

export interface CreatePostMutationArgs {
  input: CreatePostInput;
}

export interface UpdatePostMutationArgs {
  input: UpdatePostInput;
}

export interface UpdatePostByRowIdMutationArgs {
  input: UpdatePostByRowIdInput;
}

export interface DeletePostMutationArgs {
  input: DeletePostInput;
}

export interface DeletePostByRowIdMutationArgs {
  input: DeletePostByRowIdInput;
}

export interface CreateStaticMutationArgs {
  input: CreateStaticInput;
}

export interface UpdateStaticMutationArgs {
  input: UpdateStaticInput;
}

export interface UpdateStaticByRowIdMutationArgs {
  input: UpdateStaticByRowIdInput;
}

export interface DeleteStaticMutationArgs {
  input: DeleteStaticInput;
}

export interface DeleteStaticByRowIdMutationArgs {
  input: DeleteStaticByRowIdInput;
}

export interface CreateUserMutationArgs {
  input: CreateUserInput;
}

export interface UpdateUserMutationArgs {
  input: UpdateUserInput;
}

export interface UpdateUserByRowIdMutationArgs {
  input: UpdateUserByRowIdInput;
}

export interface DeleteUserMutationArgs {
  input: DeleteUserInput;
}

export interface DeleteUserByRowIdMutationArgs {
  input: DeleteUserByRowIdInput;
}

export interface CreateCaptchaInput {
  clientMutationId: string | null;
  captcha: CaptchaInput;
}

export interface CaptchaInput {
  rowId: number | null;
  base64: string;
  createdAt: Datetime | null;
}

export interface CreateCaptchaPayload {
  clientMutationId: string | null;
  captcha: Captcha | null;
  captchaEdge: CaptchasEdge | null;
  query: Query | null;
}

export interface CaptchaEdgeCreateCaptchaPayloadArgs {
  orderBy: CaptchasOrderBy | null;
}

export interface UpdateCaptchaInput {
  clientMutationId: string | null;
  id: string;
  captchaPatch: CaptchaPatch;
}

export interface CaptchaPatch {
  rowId: number | null;
  base64: string | null;
  createdAt: Datetime | null;
}

export interface UpdateCaptchaPayload {
  clientMutationId: string | null;
  captcha: Captcha | null;
  query: Query | null;
}

export interface UpdateCaptchaByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
  captchaPatch: CaptchaPatch;
}

export interface DeleteCaptchaInput {
  clientMutationId: string | null;
  id: string;
}

export interface DeleteCaptchaPayload {
  clientMutationId: string | null;
  captcha: Captcha | null;
  deletedCaptchaId: string | null;
  query: Query | null;
}

export interface DeleteCaptchaByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
}

export interface CreateCommentInput {
  clientMutationId: string | null;
  comment: CommentInput;
}

export interface CommentInput {
  rowId: number | null;
  postId: number;
  userId: number;
  commentId: number;
  content: string;
  locked: boolean;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreateCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  commentEdge: CommentsEdge | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface CommentEdgeCreateCommentPayloadArgs {
  orderBy: CommentsOrderBy | null;
}

export interface UpdateCommentInput {
  clientMutationId: string | null;
  id: string;
  commentPatch: CommentPatch;
}

export interface CommentPatch {
  rowId: number | null;
  postId: number | null;
  userId: number | null;
  commentId: number | null;
  content: string | null;
  locked: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdateCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface UpdateCommentByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
  commentPatch: CommentPatch;
}

export interface DeleteCommentInput {
  clientMutationId: string | null;
  id: string;
}

export interface DeleteCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  deletedCommentId: string | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface DeleteCommentByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
}

export interface CreatePostInput {
  clientMutationId: string | null;
  post: PostInput;
}

export interface PostInput {
  rowId: number | null;
  userId: number;
  title: string;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreatePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  postEdge: PostsEdge | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface PostEdgeCreatePostPayloadArgs {
  orderBy: PostsOrderBy | null;
}

export interface UpdatePostInput {
  clientMutationId: string | null;
  id: string;
  postPatch: PostPatch;
}

export interface PostPatch {
  rowId: number | null;
  userId: number | null;
  title: string | null;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdatePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface UpdatePostByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
  postPatch: PostPatch;
}

export interface DeletePostInput {
  clientMutationId: string | null;
  id: string;
}

export interface DeletePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  deletedPostId: string | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface DeletePostByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
}

export interface CreateStaticInput {
  clientMutationId: string | null;
  static: StaticInput;
}

export interface StaticInput {
  rowId: number | null;
  userId: number;
  postId: number;
  long: number;
}

export interface CreateStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  staticEdge: StaticsEdge | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface StaticEdgeCreateStaticPayloadArgs {
  orderBy: StaticsOrderBy | null;
}

export interface UpdateStaticInput {
  clientMutationId: string | null;
  id: string;
  staticPatch: StaticPatch;
}

export interface StaticPatch {
  rowId: number | null;
  userId: number | null;
  postId: number | null;
  long: number | null;
}

export interface UpdateStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface UpdateStaticByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
  staticPatch: StaticPatch;
}

export interface DeleteStaticInput {
  clientMutationId: string | null;
  id: string;
}

export interface DeleteStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  deletedStaticId: string | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface DeleteStaticByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
}

export interface CreateUserInput {
  clientMutationId: string | null;
  user: UserInput;
}

export interface UserInput {
  rowId: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string;
  firstName: string;
  lastName: string;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreateUserPayload {
  clientMutationId: string | null;
  user: User | null;
  userEdge: UsersEdge | null;
  query: Query | null;
}

export interface UserEdgeCreateUserPayloadArgs {
  orderBy: UsersOrderBy | null;
}

export interface UpdateUserInput {
  clientMutationId: string | null;
  id: string;
  userPatch: UserPatch;
}

export interface UserPatch {
  rowId: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string | null;
  firstName: string | null;
  lastName: string | null;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdateUserPayload {
  clientMutationId: string | null;
  user: User | null;
  query: Query | null;
}

export interface UpdateUserByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
  userPatch: UserPatch;
}

export interface DeleteUserInput {
  clientMutationId: string | null;
  id: string;
}

export interface DeleteUserPayload {
  clientMutationId: string | null;
  user: User | null;
  deletedUserId: string | null;
  query: Query | null;
}

export interface DeleteUserByRowIdInput {
  clientMutationId: string | null;
  rowId: number;
}
