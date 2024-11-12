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

export interface Post {
  id: number
  file_path: string
  file_name: string
  extension: string
  width?: (number | null)
  height?: (number | null)
  aspect_ratio: number
  score?: number
  rating?: number
  description?: (string | null)
  updated_at?: number
  created_at?: number
  meta: (string | null)
  md5: (string | null)
  size: (number | null)
  source: (string | null)
  caption: string
}

export interface PostBase {
  id: number
  file_path: string
  file_name: string
  extension: string
  width?: (number | null)
  height?: (number | null)
  aspect_ratio: number
  score?: number
  rating?: number
  description?: (string | null)
  updated_at?: number
  created_at?: number
  meta: (string | null)
  md5: (string | null)
  size: (number | null)
  source: (string | null)
  caption: string
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

export interface PostHasTagPublic {
  is_auto: boolean
  tag_info: TagPublic
}

export interface PostWithTag {
  id: number
  file_path: string
  file_name: string
  extension: string
  width?: (number | null)
  height?: (number | null)
  aspect_ratio: number
  score?: number
  rating?: number
  description?: (string | null)
  updated_at?: number
  created_at?: number
  meta: (string | null)
  md5: (string | null)
  size: (number | null)
  source: (string | null)
  caption: string
  tags?: Array<PostHasTagPublic>
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
  count?: number
  name: string
  group_id?: (number | null)
}

export interface TagGroup {
  id?: number
  name: string
  color?: string
}

export interface TagPublic {
  count?: number
  name: string
  group_id: (number | null)
}

export interface TagResponse {
  count: number
  tag_info: TagPublic
}

export interface ValidationError {
  loc: Array<(string | number)>
  msg: string
  type: string
}

export interface V1GetPostsData {
  body?: PostFilter
  query?: {
    limit?: (number | null)
    offset?: number
  }
}

export type V1GetPostsResponse = (Array<PostBase>)

export type V1GetPostsError = (HTTPValidationError)

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

export type V1GetPostResponse = (PostWithTag)

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

export type V1UpdatePostScoreResponse = (Post)

export type V1UpdatePostScoreError = (HTTPValidationError)

export interface V1UpdatePostRatingData {
  body: RatingUpdate
  path: {
    post_id: number
  }
}

export type V1UpdatePostRatingResponse = (Post)

export type V1UpdatePostRatingError = (HTTPValidationError)

export interface V1UpdatePostSourceData {
  path: {
    post_id: number
  }
  query: {
    source: string
  }
}

export type V1UpdatePostSourceResponse = (Post)

export type V1UpdatePostSourceError = (HTTPValidationError)

export interface V1UpdatePostCaptionData {
  path: {
    post_id: number
  }
  query: {
    caption: string
  }
}

export type V1UpdatePostCaptionResponse = (Post)

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

export type V1AddTagToPostResponse = (PostWithTag)

export type V1AddTagToPostError = (HTTPValidationError)

export interface V1RemoveTagFromPostData {
  path: {
    post_id: number
    tag_name: string
  }
}

export type V1RemoveTagFromPostResponse = (PostWithTag)

export type V1RemoveTagFromPostError = (HTTPValidationError)

export type V1GetTagGroupsResponse = (Array<TagGroup>)

export type V1GetTagGroupsError = unknown

export type V1CmdProcessPostsResponse = (unknown)

export type V1CmdProcessPostsError = unknown

export interface V1CmdAutoTagsData {
  path: {
    post_id: number
  }
}

export type V1CmdAutoTagsResponse = (Post)

export type V1CmdAutoTagsError = (HTTPValidationError)

export type V1CmdAutoTagsAllResponse = (unknown)

export type V1CmdAutoTagsAllError = unknown

export interface V1CmdAutoCaptionData {
  path: {
    post_id: number
  }
}

export type V1CmdAutoCaptionResponse = (Post)

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
