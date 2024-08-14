// This file is auto-generated by @hey-api/openapi-ts

import { type Options, createClient, createConfig, formDataBodySerializer } from '@hey-api/client-fetch'
import type { RootError, RootResponse, V1AddTagToPostData, V1AddTagToPostError, V1AddTagToPostResponse, V1CmdAutoCaptionData, V1CmdAutoCaptionError, V1CmdAutoCaptionResponse, V1CmdAutoTagsAllError, V1CmdAutoTagsAllResponse, V1CmdAutoTagsData, V1CmdAutoTagsError, V1CmdAutoTagsResponse, V1CmdProcessPostsError, V1CmdProcessPostsResponse, V1CountGroupByExtensionData, V1CountGroupByExtensionError, V1CountGroupByExtensionResponse, V1CountGroupByRatingData, V1CountGroupByRatingError, V1CountGroupByRatingResponse, V1CountGroupByScoreData, V1CountGroupByScoreError, V1CountGroupByScoreResponse, V1CreateTagData, V1CreateTagError, V1CreateTagResponse, V1DeletePostData, V1DeletePostError, V1DeletePostResponse, V1DeleteTagData, V1DeleteTagError, V1DeleteTagResponse, V1GetFoldersError, V1GetFoldersResponse, V1GetPostByPathData, V1GetPostByPathError, V1GetPostByPathResponse, V1GetPostData, V1GetPostError, V1GetPostResponse, V1GetPostsCountError, V1GetPostsCountResponse, V1GetPostsData, V1GetPostsError, V1GetPostsResponse, V1GetTagData, V1GetTagError, V1GetTagGroupsError, V1GetTagGroupsResponse, V1GetTagResponse, V1GetTagsCountError, V1GetTagsCountResponse, V1GetTagsError, V1GetTagsResponse, V1GetThumbnailData, V1GetThumbnailError, V1GetThumbnailResponse, V1RemoveTagFromPostData, V1RemoveTagFromPostError, V1RemoveTagFromPostResponse, V1UpdateOpenaiKeyData, V1UpdateOpenaiKeyError, V1UpdateOpenaiKeyResponse, V1UpdatePostCaptionData, V1UpdatePostCaptionError, V1UpdatePostCaptionResponse, V1UpdatePostRatingData, V1UpdatePostRatingError, V1UpdatePostRatingResponse, V1UpdatePostScoreData, V1UpdatePostScoreError, V1UpdatePostScoreResponse, V1UpdatePostSourceData, V1UpdatePostSourceError, V1UpdatePostSourceResponse, V1UpdateTagData, V1UpdateTagError, V1UpdateTagResponse, V1UploadFileData, V1UploadFileError, V1UploadFileResponse } from './types.gen'

export const client = createClient(createConfig())

/**
 * V1 Get Posts
 */
export function v1GetPosts<ThrowOnError extends boolean = false>(options?: Options<V1GetPostsData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1GetPostsResponse, V1GetPostsError>({
    ...options,
    url: '/v1/posts',
  })
}

/**
 * V1 Get Post
 */
export function v1GetPost<ThrowOnError extends boolean = false>(options: Options<V1GetPostData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetPostResponse, V1GetPostError>({
    ...options,
    url: '/v1/posts/{post_id}',
  })
}

/**
 * V1 Delete Post
 */
export function v1DeletePost<ThrowOnError extends boolean = false>(options: Options<V1DeletePostData, ThrowOnError>) {
  return (options?.client ?? client).delete<ThrowOnError, V1DeletePostResponse, V1DeletePostError>({
    ...options,
    url: '/v1/posts/{post_id}',
  })
}

/**
 * V1 Get Posts Count
 */
export function v1GetPostsCount<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetPostsCountResponse, V1GetPostsCountError>({
    ...options,
    url: '/v1/posts/count',
  })
}

/**
 * V1 Count Group By Rating
 */
export function v1CountGroupByRating<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByRatingData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1CountGroupByRatingResponse, V1CountGroupByRatingError>({
    ...options,
    url: '/v1/posts/count/rating',
  })
}

/**
 * V1 Count Group By Score
 */
export function v1CountGroupByScore<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByScoreData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1CountGroupByScoreResponse, V1CountGroupByScoreError>({
    ...options,
    url: '/v1/posts/count/score',
  })
}

/**
 * V1 Count Group By Extension
 */
export function v1CountGroupByExtension<ThrowOnError extends boolean = false>(options: Options<V1CountGroupByExtensionData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1CountGroupByExtensionResponse, V1CountGroupByExtensionError>({
    ...options,
    url: '/v1/posts/count/extension',
  })
}

/**
 * V1 Update Post Score
 */
export function v1UpdatePostScore<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostScoreData, ThrowOnError>) {
  return (options?.client ?? client).put<ThrowOnError, V1UpdatePostScoreResponse, V1UpdatePostScoreError>({
    ...options,
    url: '/v1/posts/{post_id}/score',
  })
}

/**
 * V1 Update Post Rating
 */
export function v1UpdatePostRating<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostRatingData, ThrowOnError>) {
  return (options?.client ?? client).put<ThrowOnError, V1UpdatePostRatingResponse, V1UpdatePostRatingError>({
    ...options,
    url: '/v1/posts/{post_id}/rating',
  })
}

/**
 * V1 Update Post Source
 */
export function v1UpdatePostSource<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostSourceData, ThrowOnError>) {
  return (options?.client ?? client).put<ThrowOnError, V1UpdatePostSourceResponse, V1UpdatePostSourceError>({
    ...options,
    url: '/v1/posts/{post_id}/source',
  })
}

/**
 * V1 Update Post Caption
 */
export function v1UpdatePostCaption<ThrowOnError extends boolean = false>(options: Options<V1UpdatePostCaptionData, ThrowOnError>) {
  return (options?.client ?? client).put<ThrowOnError, V1UpdatePostCaptionResponse, V1UpdatePostCaptionError>({
    ...options,
    url: '/v1/posts/{post_id}/caption',
  })
}

/**
 * V1 Get Post By Path
 */
export function v1GetPostByPath<ThrowOnError extends boolean = false>(options: Options<V1GetPostByPathData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetPostByPathResponse, V1GetPostByPathError>({
    ...options,
    url: '/v1/images/{post_path}',
  })
}

/**
 * V1 Get Thumbnail
 */
export function v1GetThumbnail<ThrowOnError extends boolean = false>(options: Options<V1GetThumbnailData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetThumbnailResponse, V1GetThumbnailError>({
    ...options,
    url: '/v1/thumbnails/{post_path}',
  })
}

/**
 * V1 Get Tags
 */
export function v1GetTags<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetTagsResponse, V1GetTagsError>({
    ...options,
    url: '/v1/tags',
  })
}

/**
 * V1 Create Tag
 */
export function v1CreateTag<ThrowOnError extends boolean = false>(options: Options<V1CreateTagData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1CreateTagResponse, V1CreateTagError>({
    ...options,
    url: '/v1/tag/{tag_name}',
  })
}

/**
 * V1 Delete Tag
 */
export function v1DeleteTag<ThrowOnError extends boolean = false>(options: Options<V1DeleteTagData, ThrowOnError>) {
  return (options?.client ?? client).delete<ThrowOnError, V1DeleteTagResponse, V1DeleteTagError>({
    ...options,
    url: '/v1/tag/{tag_name}',
  })
}

/**
 * V1 Get Tag
 */
export function v1GetTag<ThrowOnError extends boolean = false>(options: Options<V1GetTagData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetTagResponse, V1GetTagError>({
    ...options,
    url: '/v1/tags/{tag_name}',
  })
}

/**
 * V1 Update Tag
 */
export function v1UpdateTag<ThrowOnError extends boolean = false>(options: Options<V1UpdateTagData, ThrowOnError>) {
  return (options?.client ?? client).put<ThrowOnError, V1UpdateTagResponse, V1UpdateTagError>({
    ...options,
    url: '/v1/tags/{tag_name}',
  })
}

/**
 * V1 Add Tag To Post
 */
export function v1AddTagToPost<ThrowOnError extends boolean = false>(options: Options<V1AddTagToPostData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1AddTagToPostResponse, V1AddTagToPostError>({
    ...options,
    url: '/v1/posts/{post_id}/tags/{tag_name}',
  })
}

/**
 * V1 Remove Tag From Post
 */
export function v1RemoveTagFromPost<ThrowOnError extends boolean = false>(options: Options<V1RemoveTagFromPostData, ThrowOnError>) {
  return (options?.client ?? client).delete<ThrowOnError, V1RemoveTagFromPostResponse, V1RemoveTagFromPostError>({
    ...options,
    url: '/v1/posts/{post_id}/tags/{tag_name}',
  })
}

/**
 * V1 Get Tag Groups
 */
export function v1GetTagGroups<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetTagGroupsResponse, V1GetTagGroupsError>({
    ...options,
    url: '/v1/tag-groups',
  })
}

/**
 * V1 Cmd Process Posts
 */
export function v1CmdProcessPosts<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1CmdProcessPostsResponse, V1CmdProcessPostsError>({
    ...options,
    url: '/v1/cmd/process-posts',
  })
}

/**
 * V1 Cmd Auto Tags
 */
export function v1CmdAutoTags<ThrowOnError extends boolean = false>(options: Options<V1CmdAutoTagsData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1CmdAutoTagsResponse, V1CmdAutoTagsError>({
    ...options,
    url: '/v1/cmd/auto-tags/{post_id}',
  })
}

/**
 * V1 Cmd Auto Tags All
 */
export function v1CmdAutoTagsAll<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1CmdAutoTagsAllResponse, V1CmdAutoTagsAllError>({
    ...options,
    url: '/v1/cmd/auto-tags',
  })
}

/**
 * V1 Cmd Auto Caption
 */
export function v1CmdAutoCaption<ThrowOnError extends boolean = false>(options: Options<V1CmdAutoCaptionData, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1CmdAutoCaptionResponse, V1CmdAutoCaptionError>({
    ...options,
    url: '/v1/cmd/auto-caption/{post_id}',
  })
}

/**
 * V1 Get Tags Count
 */
export function v1GetTagsCount<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetTagsCountResponse, V1GetTagsCountError>({
    ...options,
    url: '/v1/tags/count',
  })
}

/**
 * V1 Get Folders
 */
export function v1GetFolders<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, V1GetFoldersResponse, V1GetFoldersError>({
    ...options,
    url: '/v1/folders',
  })
}

/**
 * V1 Upload File
 */
export function v1UploadFile<ThrowOnError extends boolean = false>(options?: Options<V1UploadFileData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1UploadFileResponse, V1UploadFileError>({
    ...options,
    ...formDataBodySerializer,
    headers: {
      'Content-Type': null,
    },
    url: '/v1/upload',
  })
}

/**
 * V1 Update Openai Key
 */
export function v1UpdateOpenaiKey<ThrowOnError extends boolean = false>(options: Options<V1UpdateOpenaiKeyData, ThrowOnError>) {
  return (options?.client ?? client).post<ThrowOnError, V1UpdateOpenaiKeyResponse, V1UpdateOpenaiKeyError>({
    ...options,
    url: '/v1/cmd/update-openai-key',
  })
}

/**
 * Root
 */
export function root<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<ThrowOnError, RootResponse, RootError>({
    ...options,
    url: '/',
  })
}
