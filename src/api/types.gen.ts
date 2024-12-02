// This file is auto-generated by @hey-api/openapi-ts

export interface Body_v1_upload_file_v1_upload_post {
  file?: ((Blob | File) | null)
  url?: (string | null)
  path?: (string | null)
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

export interface HTTPValidationError {
  detail?: Array<ValidationError>
}

export interface PostCountResponse {
  count: number
}

export interface PostFilter {
  rating?: (Array<(number)> | null)
  score?: (Array<(number)> | null)
  tags?: (Array<string> | null)
  extension?: (Array<string> | null)
  folder?: (string | null)
}

export interface PostHasTag {
  post_id: number
  tag_name: string
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
  width: (number | null)
  height: (number | null)
  aspect_ratio: (number | null)
  updated_at: number
  created_at: number
  score: number
  rating: number
  description: string
  meta: string
  md5: string
  size: number
  source: string
  caption: string
}

export interface PostWithTagPublic {
  id: number
  file_path: string
  file_name: string
  extension: string
  full_path: string
  width: (number | null)
  height: (number | null)
  aspect_ratio: (number | null)
  updated_at: number
  created_at: number
  score: number
  rating: number
  description: string
  meta: string
  md5: string
  size: number
  source: string
  caption: string
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
  group_id?: (number | null)
  count?: number
  posts?: Array<PostHasTag>
}

export interface TagAndGroupIdPublic {
  name: string
  group_id: (number | null)
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
  count: number
}

export interface TagResponse {
  count: number
  tag_info: TagAndGroupIdPublic
}

export interface TagWithGroupPublic {
  name: string
  count: number
  group: (TagGroupPublic | null)
}

export interface ValidationError {
  loc: Array<(string | number)>
  msg: string
  type: string
}

export interface V1ListPostsData {
  body?: PostFilter
  query?: {
    ascending?: boolean
    limit?: (number | null)
    offset?: number
  }
}

export type V1ListPostsResponse = (Array<PostPublic>)

export type V1ListPostsError = (HTTPValidationError)

export interface V1DeletePostData {
  path: {
    post_id: number
  }
}

export type V1DeletePostResponse = (unknown)

export type V1DeletePostError = (HTTPValidationError)

export interface V1GetPostData {
  path: {
    post_id: number
  }
}

export type V1GetPostResponse = (PostWithTagPublic)

export type V1GetPostError = (HTTPValidationError)

export type V1GetPostsCountResponse = (CountResponse)

export type V1GetPostsCountError = unknown

export interface V1CountGroupByRatingData {
  body: PostFilter
}

export type V1CountGroupByRatingResponse = (Array<RatingCountResponse>)

export type V1CountGroupByRatingError = (HTTPValidationError)

export interface V1CountGroupByScoreData {
  body: PostFilter
}

export type V1CountGroupByScoreResponse = (Array<ScoreCountResponse>)

export type V1CountGroupByScoreError = (HTTPValidationError)

export interface V1CountGroupByExtensionData {
  body: PostFilter
}

export type V1CountGroupByExtensionResponse = (Array<ExtensionCountResponse>)

export type V1CountGroupByExtensionError = (HTTPValidationError)

export interface V1UpdatePostScoreData {
  body: ScoreUpdate
  path: {
    post_id: number
  }
}

export type V1UpdatePostScoreResponse = (PostPublic)

export type V1UpdatePostScoreError = (HTTPValidationError)

export interface V1UpdatePostRatingData {
  body: RatingUpdate
  path: {
    post_id: number
  }
}

export type V1UpdatePostRatingResponse = (PostPublic)

export type V1UpdatePostRatingError = (HTTPValidationError)

export interface V1UpdatePostSourceData {
  path: {
    post_id: number
  }
  query: {
    source: string
  }
}

export type V1UpdatePostSourceResponse = (PostPublic)

export type V1UpdatePostSourceError = (HTTPValidationError)

export interface V1UpdatePostCaptionData {
  path: {
    post_id: number
  }
  query: {
    caption: string
  }
}

export type V1UpdatePostCaptionResponse = (PostPublic)

export type V1UpdatePostCaptionError = (HTTPValidationError)

export interface V1GetPostByPathData {
  path: {
    post_path: string
  }
}

export type V1GetPostByPathResponse = (unknown)

export type V1GetPostByPathError = (HTTPValidationError)

export interface V1GetThumbnailData {
  path: {
    post_path: string
  }
}

export type V1GetThumbnailResponse = (unknown)

export type V1GetThumbnailError = (HTTPValidationError)

export interface V1CmdRotateImageData {
  path: {
    post_id: number
  }
  query?: {
    clockwise?: boolean
  }
}

export type V1CmdRotateImageResponse = (PostPublic)

export type V1CmdRotateImageError = (HTTPValidationError)

export type V1GetTagsResponse = (Array<TagResponse>)

export type V1GetTagsError = unknown

export interface V1CreateTagData {
  path: {
    tag_name: string
  }
}

export type V1CreateTagResponse = (Tag)

export type V1CreateTagError = (HTTPValidationError)

export interface V1DeleteTagData {
  path: {
    tag_name: string
  }
}

export type V1DeleteTagResponse = (Tag)

export type V1DeleteTagError = (HTTPValidationError)

export interface V1GetTagData {
  path: {
    tag_name: string
  }
}

export type V1GetTagResponse = (Tag)

export type V1GetTagError = (HTTPValidationError)

export interface V1UpdateTagData {
  path: {
    tag_name: string
  }
  query: {
    new_tag_name: string
  }
}

export type V1UpdateTagResponse = (Tag)

export type V1UpdateTagError = (HTTPValidationError)

export interface V1AddTagToPostData {
  path: {
    post_id: number
    tag_name: string
  }
}

export type V1AddTagToPostResponse = (PostWithTagPublic)

export type V1AddTagToPostError = (HTTPValidationError)

export interface V1RemoveTagFromPostData {
  path: {
    post_id: number
    tag_name: string
  }
}

export type V1RemoveTagFromPostResponse = (PostWithTagPublic)

export type V1RemoveTagFromPostError = (HTTPValidationError)

export type V1GetTagGroupsResponse = (Array<TagGroupWithTagsPublic>)

export type V1GetTagGroupsError = unknown

export interface V1MovePostsData {
  body: Array<(number)>
  query: {
    new_path: string
  }
}

export type V1MovePostsResponse = (PostWithTagPublic)

export type V1MovePostsError = (HTTPValidationError)

export type V1CmdProcessPostsResponse = (unknown)

export type V1CmdProcessPostsError = unknown

export interface V1CmdAutoTagsData {
  path: {
    post_id: number
  }
}

export type V1CmdAutoTagsResponse = (PostWithTagPublic)

export type V1CmdAutoTagsError = (HTTPValidationError)

export type V1CmdAutoTagsAllResponse = (unknown)

export type V1CmdAutoTagsAllError = unknown

export interface V1CmdAutoCaptionData {
  path: {
    post_id: number
  }
}

export type V1CmdAutoCaptionResponse = (PostPublic)

export type V1CmdAutoCaptionError = (HTTPValidationError)

export type V1GetTagsCountResponse = (CountResponse)

export type V1GetTagsCountError = unknown

export type V1GetFoldersResponse = (DirectorySummary)

export type V1GetFoldersError = unknown

export interface V1UploadFileData {
  body?: Body_v1_upload_file_v1_upload_post
}

export type V1UploadFileResponse = (unknown)

export type V1UploadFileError = (HTTPValidationError)

export interface V1UpdateOpenaiKeyData {
  query: {
    key: string
  }
}

export type V1UpdateOpenaiKeyResponse = (unknown)

export type V1UpdateOpenaiKeyError = (HTTPValidationError)

export type RootResponse = (unknown)

export type RootError = unknown
