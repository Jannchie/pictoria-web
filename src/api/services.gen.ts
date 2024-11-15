// This file is auto-generated by @hey-api/openapi-ts

import type { RootError, RootResponse, V1AddTagToPostData, V1AddTagToPostError, V1AddTagToPostResponse, V1CmdAutoCaptionData, V1CmdAutoCaptionError, V1CmdAutoCaptionResponse, V1CmdAutoTagsAllError, V1CmdAutoTagsAllResponse, V1CmdAutoTagsData, V1CmdAutoTagsError, V1CmdAutoTagsResponse, V1CmdProcessPostsError, V1CmdProcessPostsResponse, V1CmdRotateImageData, V1CmdRotateImageError, V1CmdRotateImageResponse, V1CountGroupByExtensionData, V1CountGroupByExtensionError, V1CountGroupByExtensionResponse, V1CountGroupByRatingData, V1CountGroupByRatingError, V1CountGroupByRatingResponse, V1CountGroupByScoreData, V1CountGroupByScoreError, V1CountGroupByScoreResponse, V1CreateTagData, V1CreateTagError, V1CreateTagResponse, V1DeletePostData, V1DeletePostError, V1DeletePostResponse, V1DeleteTagData, V1DeleteTagError, V1DeleteTagResponse, V1GetFoldersError, V1GetFoldersResponse, V1GetPostByPathData, V1GetPostByPathError, V1GetPostByPathResponse, V1GetPostData, V1GetPostError, V1GetPostResponse, V1GetPostsCountError, V1GetPostsCountResponse, V1GetPostsData, V1GetPostsError, V1GetPostsResponse, V1GetTagData, V1GetTagError, V1GetTagGroupsError, V1GetTagGroupsResponse, V1GetTagResponse, V1GetTagsCountError, V1GetTagsCountResponse, V1GetTagsError, V1GetTagsResponse, V1GetThumbnailData, V1GetThumbnailError, V1GetThumbnailResponse, V1RemoveTagFromPostData, V1RemoveTagFromPostError, V1RemoveTagFromPostResponse, V1UpdateOpenaiKeyData, V1UpdateOpenaiKeyError, V1UpdateOpenaiKeyResponse, V1UpdatePostCaptionData, V1UpdatePostCaptionError, V1UpdatePostCaptionResponse, V1UpdatePostRatingData, V1UpdatePostRatingError, V1UpdatePostRatingResponse, V1UpdatePostScoreData, V1UpdatePostScoreError, V1UpdatePostScoreResponse, V1UpdatePostSourceData, V1UpdatePostSourceError, V1UpdatePostSourceResponse, V1UpdateTagData, V1UpdateTagError, V1UpdateTagResponse, V1UploadFileData, V1UploadFileError, V1UploadFileResponse } from './types.gen'
import { createClient, createConfig, formDataBodySerializer, type Options } from '@hey-api/client-axios'

export const client = createClient(createConfig())

/**
 * V1 Get Posts
 */
export function v1GetPosts<ThrowOnError extends boolean = false>(options?: Options<V1GetPostsData, ThrowOnError>) {
  return (options?.client ?? client).post<V1GetPostsResponse, V1GetPostsError, ThrowOnError>({
    ...options,
    url: '/v1/posts',
  })
}

/**
 * V1 Delete Post
 */
export function v1DeletePost<ThrowOnError extends boolean = false>(options: Options<V1DeletePostData, ThrowOnError>) {
  return (options?.client ?? client).delete<V1DeletePostResponse, V1DeletePostError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}',
  })
}

/**
 * V1 Get Post
 */
export function v1GetPost<ThrowOnError extends boolean = false>(options: Options<V1GetPostData, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetPostResponse, V1GetPostError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}',
  })
}

/**
 * V1 Get Posts Count
 */
export function v1GetPostsCount<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetPostsCountResponse, V1GetPostsCountError, ThrowOnError>({
    ...options,
    url: '/v1/posts/count',
  })
}

/**
 * V1 Count Group By Rating
 */
export function v1CountGroupByRating<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByRatingData, ThrowOnError>) {
  return (options?.client ?? client).post<V1CountGroupByRatingResponse, V1CountGroupByRatingError, ThrowOnError>({
    ...options,
    url: '/v1/posts/count/rating',
  })
}

/**
 * V1 Count Group By Score
 */
export function v1CountGroupByScore<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByScoreData, ThrowOnError>) {
  return (options?.client ?? client).post<V1CountGroupByScoreResponse, V1CountGroupByScoreError, ThrowOnError>({
    ...options,
    url: '/v1/posts/count/score',
  })
}

/**
 * V1 Count Group By Extension
 */
export function v1CountGroupByExtension<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByExtensionData, ThrowOnError>) {
  return (options?.client ?? client).post<V1CountGroupByExtensionResponse, V1CountGroupByExtensionError, ThrowOnError>({
    ...options,
    url: '/v1/posts/count/extension',
  })
}

/**
 * V1 Update Post Score
 */
export function v1UpdatePostScore<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostScoreData, ThrowOnError>) {
  return (options?.client ?? client).put<V1UpdatePostScoreResponse, V1UpdatePostScoreError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/score',
  })
}

/**
 * V1 Update Post Rating
 */
export function v1UpdatePostRating<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostRatingData, ThrowOnError>) {
  return (options?.client ?? client).put<V1UpdatePostRatingResponse, V1UpdatePostRatingError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/rating',
  })
}

/**
 * V1 Update Post Source
 */
export function v1UpdatePostSource<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostSourceData, ThrowOnError>) {
  return (options?.client ?? client).put<V1UpdatePostSourceResponse, V1UpdatePostSourceError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/source',
  })
}

/**
 * V1 Update Post Caption
 */
export function v1UpdatePostCaption<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostCaptionData, ThrowOnError>) {
  return (options?.client ?? client).put<V1UpdatePostCaptionResponse, V1UpdatePostCaptionError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/caption',
  })
}

/**
 * V1 Get Post By Path
 */
export function v1GetPostByPath<ThrowOnError extends boolean = false>(options: Options<V1GetPostByPathData, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetPostByPathResponse, V1GetPostByPathError, ThrowOnError>({
    ...options,
    url: '/v1/images/{post_path}',
  })
}

/**
 * V1 Get Thumbnail
 */
export function v1GetThumbnail<ThrowOnError extends boolean = false>(options: Options<V1GetThumbnailData, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetThumbnailResponse, V1GetThumbnailError, ThrowOnError>({
    ...options,
    url: '/v1/thumbnails/{post_path}',
  })
}

/**
 * V1 Cmd Rotate Image
 */
export function v1CmdRotateImage<ThrowOnError extends boolean = false>(options: Options<V1CmdRotateImageData, ThrowOnError>) {
  return (options?.client ?? client).put<V1CmdRotateImageResponse, V1CmdRotateImageError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/posts/{post_id}/rotate',
  })
}

/**
 * V1 Get Tags
 */
export function v1GetTags<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetTagsResponse, V1GetTagsError, ThrowOnError>({
    ...options,
    url: '/v1/tags',
  })
}

/**
 * V1 Create Tag
 */
export function v1CreateTag<ThrowOnError extends boolean = false>(options: Options<V1CreateTagData, ThrowOnError>) {
  return (options?.client ?? client).post<V1CreateTagResponse, V1CreateTagError, ThrowOnError>({
    ...options,
    url: '/v1/tag/{tag_name}',
  })
}

/**
 * V1 Delete Tag
 */
export function v1DeleteTag<ThrowOnError extends boolean = false>(options: Options<V1DeleteTagData, ThrowOnError>) {
  return (options?.client ?? client).delete<V1DeleteTagResponse, V1DeleteTagError, ThrowOnError>({
    ...options,
    url: '/v1/tag/{tag_name}',
  })
}

/**
 * V1 Get Tag
 */
export function v1GetTag<ThrowOnError extends boolean = false>(options: Options<V1GetTagData, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetTagResponse, V1GetTagError, ThrowOnError>({
    ...options,
    url: '/v1/tags/{tag_name}',
  })
}

/**
 * V1 Update Tag
 */
export function v1UpdateTag<ThrowOnError extends boolean = false>(options: Options<V1UpdateTagData, ThrowOnError>) {
  return (options?.client ?? client).put<V1UpdateTagResponse, V1UpdateTagError, ThrowOnError>({
    ...options,
    url: '/v1/tags/{tag_name}',
  })
}

/**
 * V1 Add Tag To Post
 */
export function v1AddTagToPost<ThrowOnError extends boolean = false>(options: Options<V1AddTagToPostData, ThrowOnError>) {
  return (options?.client ?? client).post<V1AddTagToPostResponse, V1AddTagToPostError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/tags/{tag_name}',
  })
}

/**
 * V1 Remove Tag From Post
 */
export function v1RemoveTagFromPost<ThrowOnError extends boolean = false>(options: Options<V1RemoveTagFromPostData, ThrowOnError>) {
  return (options?.client ?? client).delete<V1RemoveTagFromPostResponse, V1RemoveTagFromPostError, ThrowOnError>({
    ...options,
    url: '/v1/posts/{post_id}/tags/{tag_name}',
  })
}

/**
 * V1 Get Tag Groups
 */
export function v1GetTagGroups<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetTagGroupsResponse, V1GetTagGroupsError, ThrowOnError>({
    ...options,
    url: '/v1/tag-groups',
  })
}

/**
 * V1 Cmd Process Posts
 */
export function v1CmdProcessPosts<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).post<V1CmdProcessPostsResponse, V1CmdProcessPostsError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/process-posts',
  })
}

/**
 * V1 Cmd Auto Tags
 */
export function v1CmdAutoTags<ThrowOnError extends boolean = false>(options: Options<V1CmdAutoTagsData, ThrowOnError>) {
  return (options?.client ?? client).get<V1CmdAutoTagsResponse, V1CmdAutoTagsError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/auto-tags/{post_id}',
  })
}

/**
 * V1 Cmd Auto Tags All
 */
export function v1CmdAutoTagsAll<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1CmdAutoTagsAllResponse, V1CmdAutoTagsAllError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/auto-tags',
  })
}

/**
 * V1 Cmd Auto Caption
 */
export function v1CmdAutoCaption<ThrowOnError extends boolean = false>(options: Options<V1CmdAutoCaptionData, ThrowOnError>) {
  return (options?.client ?? client).get<V1CmdAutoCaptionResponse, V1CmdAutoCaptionError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/auto-caption/{post_id}',
  })
}

/**
 * V1 Get Tags Count
 */
export function v1GetTagsCount<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetTagsCountResponse, V1GetTagsCountError, ThrowOnError>({
    ...options,
    url: '/v1/tags/count',
  })
}

/**
 * V1 Get Folders
 */
export function v1GetFolders<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<V1GetFoldersResponse, V1GetFoldersError, ThrowOnError>({
    ...options,
    url: '/v1/folders',
  })
}

/**
 * V1 Upload File
 */
export function v1UploadFile<ThrowOnError extends boolean = false>(options?: Options<V1UploadFileData, ThrowOnError>) {
  return (options?.client ?? client).post<V1UploadFileResponse, V1UploadFileError, ThrowOnError>({
    ...options,
    ...formDataBodySerializer,
    headers: {
      'Content-Type': null,
      ...options?.headers,
    },
    url: '/v1/upload',
  })
}

/**
 * V1 Update Openai Key
 */
export function v1UpdateOpenaiKey<ThrowOnError extends boolean = false>(options: Options<V1UpdateOpenaiKeyData, ThrowOnError>) {
  return (options?.client ?? client).post<V1UpdateOpenaiKeyResponse, V1UpdateOpenaiKeyError, ThrowOnError>({
    ...options,
    url: '/v1/cmd/update-openai-key',
  })
}

/**
 * Root
 */
export function root<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<RootResponse, RootError, ThrowOnError>({
    ...options,
    url: '/',
  })
}
