// This file is auto-generated by @hey-api/openapi-ts

export interface Body_v1_upload_file_v1_upload_post {
  file: (Blob | File)
  path: string
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

export interface HTTPValidationError {
  detail?: Array<ValidationError>
}

export interface Post {
  file_path: string
  extension: string
  width?: number
  height?: number
  aspect_ratio?: number
  score?: number
  rating?: number
  description?: string
  updated_at?: number
  created_at?: number
  meta?: string
  md5?: string
  size?: number
  id?: number
}

export interface PostCountResponse {
  count: number
}

export interface PostFilter {
  rating?: Array<(number)>
  score?: Array<(number)>
  tags?: Array<string>
  folder?: string
}

export interface PostHasTagPublic {
  is_auto: boolean
  tag_info: TagPublic
}

export interface PostPublic {
  file_path: string
  extension: string
  width?: number
  height?: number
  aspect_ratio?: number
  score?: number
  rating?: number
  description?: string
  updated_at?: number
  created_at?: number
  meta?: string
  md5?: string
  size?: number
  id: number
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

export interface TagGroup {
  id?: number
  name: string
  color?: string
}

export interface TagPublic {
  count?: number
  name: string
  group_id?: number
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
    limit?: number
    offset?: number
  }
}

export type V1GetPostsResponse = Array<Post>

export type V1GetPostsError = HTTPValidationError

export type V1GetPostsCountResponse = CountResponse

export type V1GetPostsCountError = unknown

export interface V1CountGroupByRatingData {
  body: PostFilter
}

export type V1CountGroupByRatingResponse = Array<RatingCountResponse>

export type V1CountGroupByRatingError = HTTPValidationError

export interface V1CountGroupByScoreData {
  body: PostFilter
}

export type V1CountGroupByScoreResponse = Array<ScoreCountResponse>

export type V1CountGroupByScoreError = HTTPValidationError

export interface V1UpdatePostScoreData {
  body: ScoreUpdate
  path: {
    post_id: number
  }
}

export type V1UpdatePostScoreResponse = unknown

export type V1UpdatePostScoreError = HTTPValidationError

export interface V1UpdatePostRatingData {
  body: RatingUpdate
  path: {
    post_id: number
  }
}

export type V1UpdatePostRatingResponse = unknown

export type V1UpdatePostRatingError = HTTPValidationError

export interface V1GetPostData {
  path: {
    post_id: number
  }
}

export type V1GetPostResponse = PostPublic

export type V1GetPostError = HTTPValidationError

export interface V1GetPostByPathData {
  path: {
    post_path: string
  }
}

export type V1GetPostByPathResponse = unknown

export type V1GetPostByPathError = HTTPValidationError

export interface V1GetThumbnailData {
  path: {
    post_path: string
  }
}

export type V1GetThumbnailResponse = unknown

export type V1GetThumbnailError = HTTPValidationError

export type V1GetTagsResponse = Array<TagResponse>

export type V1GetTagsError = unknown

export interface V1CreateTagData {
  path: {
    tag_name: string
  }
}

export type V1CreateTagResponse = unknown

export type V1CreateTagError = HTTPValidationError

export interface V1DeleteTagData {
  path: {
    tag_name: string
  }
}

export type V1DeleteTagResponse = unknown

export type V1DeleteTagError = HTTPValidationError

export interface V1GetTagData {
  path: {
    tag_name: string
  }
}

export type V1GetTagResponse = unknown

export type V1GetTagError = HTTPValidationError

export interface V1UpdateTagData {
  path: {
    tag_name: string
  }
  query: {
    new_tag_name: string
  }
}

export type V1UpdateTagResponse = unknown

export type V1UpdateTagError = HTTPValidationError

export interface V1AddTagToPostData {
  path: {
    post_id: number
    tag_name: string
  }
}

export type V1AddTagToPostResponse = unknown

export type V1AddTagToPostError = HTTPValidationError

export interface V1RemoveTagFromPostData {
  path: {
    post_id: number
    tag_name: string
  }
}

export type V1RemoveTagFromPostResponse = unknown

export type V1RemoveTagFromPostError = HTTPValidationError

export type V1GetTagGroupsResponse = Array<TagGroup>

export type V1GetTagGroupsError = unknown

export type V1CmdProcessPostsResponse = unknown

export type V1CmdProcessPostsError = unknown

export interface V1CmdAutoTagsData {
  path: {
    post_id: number
  }
}

export type V1CmdAutoTagsResponse = unknown

export type V1CmdAutoTagsError = HTTPValidationError

export type V1GetTagsCountResponse = CountResponse

export type V1GetTagsCountError = unknown

export type V1GetFoldersResponse = DirectorySummary

export type V1GetFoldersError = unknown

export interface V1UploadFileData {
  body: Body_v1_upload_file_v1_upload_post
}

export type V1UploadFileResponse = unknown

export type V1UploadFileError = HTTPValidationError

export type RootResponse = unknown

export type RootError = unknown

export interface $OpenApiTs {
  '/v1/posts': {
    post: {
      req: V1GetPostsData
      res: {
        /**
         * Successful Response
         */
        200: Array<Post>
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/count': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: CountResponse
      }
    }
  }
  '/v1/posts/count/rating': {
    post: {
      req: V1CountGroupByRatingData
      res: {
        /**
         * Successful Response
         */
        200: Array<RatingCountResponse>
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/count/score': {
    post: {
      req: V1CountGroupByScoreData
      res: {
        /**
         * Successful Response
         */
        200: Array<ScoreCountResponse>
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/{post_id}/score': {
    put: {
      req: V1UpdatePostScoreData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/{post_id}/rating': {
    put: {
      req: V1UpdatePostRatingData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/{post_id}': {
    get: {
      req: V1GetPostData
      res: {
        /**
         * Successful Response
         */
        200: PostPublic
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/images/{post_path}': {
    get: {
      req: V1GetPostByPathData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/thumbnails/{post_path}': {
    get: {
      req: V1GetThumbnailData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/tags': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: Array<TagResponse>
      }
    }
  }
  '/v1/tag/{tag_name}': {
    post: {
      req: V1CreateTagData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
    delete: {
      req: V1DeleteTagData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/tags/{tag_name}': {
    get: {
      req: V1GetTagData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
    put: {
      req: V1UpdateTagData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/posts/{post_id}/tags/{tag_name}': {
    post: {
      req: V1AddTagToPostData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
    delete: {
      req: V1RemoveTagFromPostData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/tag-groups': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: Array<TagGroup>
      }
    }
  }
  '/v1/cmd/process-posts': {
    post: {
      res: {
        /**
         * Successful Response
         */
        200: unknown
      }
    }
  }
  '/v1/cmd/auto-tags/{post_id}': {
    get: {
      req: V1CmdAutoTagsData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/v1/tags/count': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: CountResponse
      }
    }
  }
  '/v1/folders': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: DirectorySummary
      }
    }
  }
  '/v1/upload': {
    post: {
      req: V1UploadFileData
      res: {
        /**
         * Successful Response
         */
        200: unknown
        /**
         * Validation Error
         */
        422: HTTPValidationError
      }
    }
  }
  '/': {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: unknown
      }
    }
  }
}
