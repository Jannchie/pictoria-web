// This file is auto-generated by @hey-api/openapi-ts

export interface BodyV1UploadFileV1UploadPost {
  file?: (Blob | File) | null
  url?: string | null
  path?: string | null
  source?: string
}

export interface CountResponse {
  count: number
}

export interface DirectorySummary {
  name: string
  path: string
  file_count: number
  children?: Array<DirectorySummary>
}

export interface ExtensionCountResponse {
  extension: string
  count: number
}

export interface HttpValidationError {
  detail?: Array<ValidationError>
}

export interface Post {
  file_path?: string
  file_name?: string
  extension?: string
  width?: number | null
  height?: number | null
  updated_at?: string
  created_at?: string
  published_at?: string | null
  score?: number
  rating?: number
  description?: string
  meta?: string
  md5?: string
  size?: number
  source?: string
  caption?: string
  tags?: Array<PostHasTag>
  colors?: Array<PostHasColor>
}

export interface PostCountResponse {
  count: number
}

export interface PostFilter {
  rating?: Array<number> | null
  score?: Array<number> | null
  tags?: Array<string> | null
  extension?: Array<string> | null
  folder?: string | null
}

export interface PostHasColor {
  post_id: number
  order: number
  color: number
}

export interface PostHasColorPublic {
  order: number
  color: number
}

export interface PostHasTag {
  post: Post
  tag_info: Tag
  is_auto?: boolean
}

export interface PostHasTagPublic {
  is_auto: boolean
  tag_info: TagWithGroupPublic
}

export interface PostPublic {
  id: number
  file_path: string
  file_name: string
  extension: string
  full_path: string
  width: number | null
  height: number | null
  aspect_ratio: number | null
  updated_at: string
  created_at: string
  score: number
  rating: number
  description: string
  meta: string
  md5: string
  size: number
  source: string
  caption: string
  colors: Array<PostHasColorPublic>
  published_at: string | null
}

export interface PostWithTagPublic {
  id: number
  file_path: string
  file_name: string
  extension: string
  full_path: string
  width: number | null
  height: number | null
  aspect_ratio: number | null
  updated_at: string
  created_at: string
  score: number
  rating: number
  description: string
  meta: string
  md5: string
  size: number
  source: string
  caption: string
  colors: Array<PostHasColorPublic>
  published_at: string | null
  tags: Array<PostHasTagPublic>
}

export interface RatingCountResponse {
  rating: number
  count: number
}

export interface RatingUpdate {
  rating: number
}

export interface ScoreCountResponse {
  score: number
  count: number
}

export interface ScoreUpdate {
  score: number
}

export interface Tag {
  name: string
  group_id?: number | null
  posts?: Array<PostHasTag>
}

export interface TagGroupPublic {
  id: number
  name: string
  color: string
}

export interface TagGroupWithTagsPublic {
  id: number
  name: string
  color: string
  tags: Array<TagPublic>
}

export interface TagPublic {
  name: string
}

export interface TagWithCountPublic {
  count: number
  tag_info: TagWithGroupPublic
}

export interface TagWithGroupPublic {
  name: string
  group: TagGroupPublic | null
}

export interface ValidationError {
  loc: Array<string | number>
  msg: string
  type: string
}

export interface V1ListPostsData {
  body?: PostFilter
  path?: never
  query?: {
    limit?: number | null
    offset?: number
    ascending?: boolean
  }
  url: '/v1/posts'
}

export interface V1ListPostsErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1ListPostsError = V1ListPostsErrors[keyof V1ListPostsErrors]

export interface V1ListPostsResponses {
  /**
   * Successful Response
   */
  200: Array<PostPublic>
}

export type V1ListPostsResponse = V1ListPostsResponses[keyof V1ListPostsResponses]

export interface V1DeletePostData {
  body?: never
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/posts/{post_id}'
}

export interface V1DeletePostErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1DeletePostError = V1DeletePostErrors[keyof V1DeletePostErrors]

export interface V1DeletePostResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1GetPostData {
  body?: never
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/posts/{post_id}'
}

export interface V1GetPostErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetPostError = V1GetPostErrors[keyof V1GetPostErrors]

export interface V1GetPostResponses {
  /**
   * Successful Response
   */
  200: PostWithTagPublic
}

export type V1GetPostResponse = V1GetPostResponses[keyof V1GetPostResponses]

export interface V1GetPostsCountData {
  body?: never
  path?: never
  query?: never
  url: '/v1/posts/count'
}

export interface V1GetPostsCountResponses {
  /**
   * Successful Response
   */
  200: CountResponse
}

export type V1GetPostsCountResponse = V1GetPostsCountResponses[keyof V1GetPostsCountResponses]

export interface V1CountGroupByRatingData {
  body: PostFilter
  path?: never
  query?: never
  url: '/v1/posts/count/rating'
}

export interface V1CountGroupByRatingErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CountGroupByRatingError = V1CountGroupByRatingErrors[keyof V1CountGroupByRatingErrors]

export interface V1CountGroupByRatingResponses {
  /**
   * Successful Response
   */
  200: Array<RatingCountResponse>
}

export type V1CountGroupByRatingResponse = V1CountGroupByRatingResponses[keyof V1CountGroupByRatingResponses]

export interface V1CountGroupByScoreData {
  body: PostFilter
  path?: never
  query?: never
  url: '/v1/posts/count/score'
}

export interface V1CountGroupByScoreErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CountGroupByScoreError = V1CountGroupByScoreErrors[keyof V1CountGroupByScoreErrors]

export interface V1CountGroupByScoreResponses {
  /**
   * Successful Response
   */
  200: Array<ScoreCountResponse>
}

export type V1CountGroupByScoreResponse = V1CountGroupByScoreResponses[keyof V1CountGroupByScoreResponses]

export interface V1CountGroupByExtensionData {
  body: PostFilter
  path?: never
  query?: never
  url: '/v1/posts/count/extension'
}

export interface V1CountGroupByExtensionErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CountGroupByExtensionError = V1CountGroupByExtensionErrors[keyof V1CountGroupByExtensionErrors]

export interface V1CountGroupByExtensionResponses {
  /**
   * Successful Response
   */
  200: Array<ExtensionCountResponse>
}

export type V1CountGroupByExtensionResponse = V1CountGroupByExtensionResponses[keyof V1CountGroupByExtensionResponses]

export interface V1UpdatePostScoreData {
  body: ScoreUpdate
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/posts/{post_id}/score'
}

export interface V1UpdatePostScoreErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdatePostScoreError = V1UpdatePostScoreErrors[keyof V1UpdatePostScoreErrors]

export interface V1UpdatePostScoreResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1UpdatePostScoreResponse = V1UpdatePostScoreResponses[keyof V1UpdatePostScoreResponses]

export interface V1UpdatePostRatingData {
  body: RatingUpdate
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/posts/{post_id}/rating'
}

export interface V1UpdatePostRatingErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdatePostRatingError = V1UpdatePostRatingErrors[keyof V1UpdatePostRatingErrors]

export interface V1UpdatePostRatingResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1UpdatePostRatingResponse = V1UpdatePostRatingResponses[keyof V1UpdatePostRatingResponses]

export interface V1UpdatePostSourceData {
  body?: never
  path: {
    post_id: number
  }
  query: {
    source: string
  }
  url: '/v1/posts/{post_id}/source'
}

export interface V1UpdatePostSourceErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdatePostSourceError = V1UpdatePostSourceErrors[keyof V1UpdatePostSourceErrors]

export interface V1UpdatePostSourceResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1UpdatePostSourceResponse = V1UpdatePostSourceResponses[keyof V1UpdatePostSourceResponses]

export interface V1UpdatePostCaptionData {
  body?: never
  path: {
    post_id: number
  }
  query: {
    caption: string
  }
  url: '/v1/posts/{post_id}/caption'
}

export interface V1UpdatePostCaptionErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdatePostCaptionError = V1UpdatePostCaptionErrors[keyof V1UpdatePostCaptionErrors]

export interface V1UpdatePostCaptionResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1UpdatePostCaptionResponse = V1UpdatePostCaptionResponses[keyof V1UpdatePostCaptionResponses]

export interface V1GetSimilarPostsData {
  body?: never
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/posts/{post_id}/similar'
}

export interface V1GetSimilarPostsErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetSimilarPostsError = V1GetSimilarPostsErrors[keyof V1GetSimilarPostsErrors]

export interface V1GetSimilarPostsResponses {
  /**
   * Successful Response
   */
  200: Array<PostPublic>
}

export type V1GetSimilarPostsResponse = V1GetSimilarPostsResponses[keyof V1GetSimilarPostsResponses]

export interface V1CmdCalculateFeaturesData {
  body?: never
  path?: never
  query?: never
  url: '/v1/cmd/posts/features'
}

export interface V1CmdCalculateFeaturesResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1GetPostByPathData {
  body?: never
  path: {
    post_path: string
  }
  query?: never
  url: '/v1/images/{post_path}'
}

export interface V1GetPostByPathErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetPostByPathError = V1GetPostByPathErrors[keyof V1GetPostByPathErrors]

export interface V1GetPostByPathResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1GetThumbnailData {
  body?: never
  path: {
    post_path: string
  }
  query?: never
  url: '/v1/thumbnails/{post_path}'
}

export interface V1GetThumbnailErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetThumbnailError = V1GetThumbnailErrors[keyof V1GetThumbnailErrors]

export interface V1GetThumbnailResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1CmdRotateImageData {
  body?: never
  path: {
    post_id: number
  }
  query?: {
    clockwise?: boolean
  }
  url: '/v1/cmd/posts/{post_id}/rotate'
}

export interface V1CmdRotateImageErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CmdRotateImageError = V1CmdRotateImageErrors[keyof V1CmdRotateImageErrors]

export interface V1CmdRotateImageResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1CmdRotateImageResponse = V1CmdRotateImageResponses[keyof V1CmdRotateImageResponses]

export interface V1GetTagsData {
  body?: never
  path?: never
  query?: {
    language?: string
  }
  url: '/v1/tags'
}

export interface V1GetTagsErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetTagsError = V1GetTagsErrors[keyof V1GetTagsErrors]

export interface V1GetTagsResponses {
  /**
   * Successful Response
   */
  200: Array<TagWithCountPublic>
}

export type V1GetTagsResponse = V1GetTagsResponses[keyof V1GetTagsResponses]

export interface V1DeleteTagData {
  body?: never
  path: {
    tag_name: string
  }
  query?: never
  url: '/v1/tag/{tag_name}'
}

export interface V1DeleteTagErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1DeleteTagError = V1DeleteTagErrors[keyof V1DeleteTagErrors]

export interface V1DeleteTagResponses {
  /**
   * Successful Response
   */
  200: Tag
}

export type V1DeleteTagResponse = V1DeleteTagResponses[keyof V1DeleteTagResponses]

export interface V1CreateTagData {
  body?: never
  path: {
    tag_name: string
  }
  query?: never
  url: '/v1/tag/{tag_name}'
}

export interface V1CreateTagErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CreateTagError = V1CreateTagErrors[keyof V1CreateTagErrors]

export interface V1CreateTagResponses {
  /**
   * Successful Response
   */
  200: Tag
}

export type V1CreateTagResponse = V1CreateTagResponses[keyof V1CreateTagResponses]

export interface V1GetTagData {
  body?: never
  path: {
    tag_name: string
  }
  query?: never
  url: '/v1/tags/{tag_name}'
}

export interface V1GetTagErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1GetTagError = V1GetTagErrors[keyof V1GetTagErrors]

export interface V1GetTagResponses {
  /**
   * Successful Response
   */
  200: Tag
}

export type V1GetTagResponse = V1GetTagResponses[keyof V1GetTagResponses]

export interface V1UpdateTagData {
  body?: never
  path: {
    tag_name: string
  }
  query: {
    new_tag_name: string
  }
  url: '/v1/tags/{tag_name}'
}

export interface V1UpdateTagErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdateTagError = V1UpdateTagErrors[keyof V1UpdateTagErrors]

export interface V1UpdateTagResponses {
  /**
   * Successful Response
   */
  200: Tag
}

export type V1UpdateTagResponse = V1UpdateTagResponses[keyof V1UpdateTagResponses]

export interface V1RemoveTagFromPostData {
  body?: never
  path: {
    post_id: number
    tag_name: string
  }
  query?: never
  url: '/v1/posts/{post_id}/tags/{tag_name}'
}

export interface V1RemoveTagFromPostErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1RemoveTagFromPostError = V1RemoveTagFromPostErrors[keyof V1RemoveTagFromPostErrors]

export interface V1RemoveTagFromPostResponses {
  /**
   * Successful Response
   */
  200: PostWithTagPublic
}

export type V1RemoveTagFromPostResponse = V1RemoveTagFromPostResponses[keyof V1RemoveTagFromPostResponses]

export interface V1AddTagToPostData {
  body?: never
  path: {
    post_id: number
    tag_name: string
  }
  query?: never
  url: '/v1/posts/{post_id}/tags/{tag_name}'
}

export interface V1AddTagToPostErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1AddTagToPostError = V1AddTagToPostErrors[keyof V1AddTagToPostErrors]

export interface V1AddTagToPostResponses {
  /**
   * Successful Response
   */
  200: PostWithTagPublic
}

export type V1AddTagToPostResponse = V1AddTagToPostResponses[keyof V1AddTagToPostResponses]

export interface V1GetTagGroupsData {
  body?: never
  path?: never
  query?: never
  url: '/v1/tag-groups'
}

export interface V1GetTagGroupsResponses {
  /**
   * Successful Response
   */
  200: Array<TagGroupWithTagsPublic>
}

export type V1GetTagGroupsResponse = V1GetTagGroupsResponses[keyof V1GetTagGroupsResponses]

export interface V1MovePostsData {
  body: Array<number>
  path?: never
  query: {
    new_path: string
  }
  url: '/v1/posts/move'
}

export interface V1MovePostsErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1MovePostsError = V1MovePostsErrors[keyof V1MovePostsErrors]

export interface V1MovePostsResponses {
  /**
   * Successful Response
   */
  200: PostWithTagPublic
}

export type V1MovePostsResponse = V1MovePostsResponses[keyof V1MovePostsResponses]

export interface V1CmdProcessPostsData {
  body?: never
  path?: never
  query?: never
  url: '/v1/cmd/process-posts'
}

export interface V1CmdProcessPostsResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1CmdAutoTagsData {
  body?: never
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/cmd/auto-tags/{post_id}'
}

export interface V1CmdAutoTagsErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CmdAutoTagsError = V1CmdAutoTagsErrors[keyof V1CmdAutoTagsErrors]

export interface V1CmdAutoTagsResponses {
  /**
   * Successful Response
   */
  200: PostWithTagPublic
}

export type V1CmdAutoTagsResponse = V1CmdAutoTagsResponses[keyof V1CmdAutoTagsResponses]

export interface V1CmdAutoTagsAllData {
  body?: never
  path?: never
  query?: never
  url: '/v1/cmd/auto-tags'
}

export interface V1CmdAutoTagsAllResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1CmdAutoCaptionData {
  body?: never
  path: {
    post_id: number
  }
  query?: never
  url: '/v1/cmd/auto-caption/{post_id}'
}

export interface V1CmdAutoCaptionErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CmdAutoCaptionError = V1CmdAutoCaptionErrors[keyof V1CmdAutoCaptionErrors]

export interface V1CmdAutoCaptionResponses {
  /**
   * Successful Response
   */
  200: PostPublic
}

export type V1CmdAutoCaptionResponse = V1CmdAutoCaptionResponses[keyof V1CmdAutoCaptionResponses]

export interface V1GetTagsCountData {
  body?: never
  path?: never
  query?: never
  url: '/v1/tags/count'
}

export interface V1GetTagsCountResponses {
  /**
   * Successful Response
   */
  200: CountResponse
}

export type V1GetTagsCountResponse = V1GetTagsCountResponses[keyof V1GetTagsCountResponses]

export interface V1GetFoldersData {
  body?: never
  path?: never
  query?: never
  url: '/v1/folders'
}

export interface V1GetFoldersResponses {
  /**
   * Successful Response
   */
  200: DirectorySummary
}

export type V1GetFoldersResponse = V1GetFoldersResponses[keyof V1GetFoldersResponses]

export interface V1UploadFileData {
  body?: BodyV1UploadFileV1UploadPost
  path?: never
  query?: never
  url: '/v1/upload'
}

export interface V1UploadFileErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UploadFileError = V1UploadFileErrors[keyof V1UploadFileErrors]

export interface V1UploadFileResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1UpdateOpenaiKeyData {
  body?: never
  path?: never
  query: {
    key: string
  }
  url: '/v1/cmd/update-openai-key'
}

export interface V1UpdateOpenaiKeyErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1UpdateOpenaiKeyError = V1UpdateOpenaiKeyErrors[keyof V1UpdateOpenaiKeyErrors]

export interface V1UpdateOpenaiKeyResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1CmdApplyDanbooruTagsData {
  body?: never
  path?: never
  query?: never
  url: '/v1/cmd/apply-danbooru-tags'
}

export interface V1CmdApplyDanbooruTagsResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface V1CmdDownloadFromDanbooruData {
  body?: never
  path?: never
  query: {
    tags: string
  }
  url: '/v1/cmd/download-from-danbooru'
}

export interface V1CmdDownloadFromDanbooruErrors {
  /**
   * Validation Error
   */
  422: HttpValidationError
}

export type V1CmdDownloadFromDanbooruError = V1CmdDownloadFromDanbooruErrors[keyof V1CmdDownloadFromDanbooruErrors]

export interface V1CmdDownloadFromDanbooruResponses {
  /**
   * Successful Response
   */
  200: unknown
}

export interface RootData {
  body?: never
  path?: never
  query?: never
  url: '/'
}

export interface RootResponses {
  /**
   * Successful Response
   */
  200: unknown
}
