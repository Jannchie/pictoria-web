// This file is auto-generated by @hey-api/openapi-ts

export const Body_v1_upload_file_v1_upload_postSchema = {
  properties: {
    file: {
      anyOf: [
        {
          type: 'string',
          format: 'binary',
        },
        {
          type: 'null',
        },
      ],
      title: 'File',
    },
    url: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Url',
    },
    path: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Path',
    },
    source: {
      type: 'string',
      title: 'Source',
    },
  },
  type: 'object',
  title: 'Body_v1_upload_file_v1_upload_post',
} as const

export const CountResponseSchema = {
  properties: {
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['count'],
  title: 'CountResponse',
} as const

export const DirectorySummarySchema = {
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
    path: {
      type: 'string',
      title: 'Path',
    },
    file_count: {
      type: 'integer',
      title: 'File Count',
    },
    children: {
      items: {
        $ref: '#/components/schemas/DirectorySummary',
      },
      type: 'array',
      title: 'Children',
    },
  },
  type: 'object',
  required: ['name', 'path', 'file_count'],
  title: 'DirectorySummary',
} as const

export const ExtensionCountResponseSchema = {
  properties: {
    extension: {
      type: 'string',
      title: 'Extension',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['extension', 'count'],
  title: 'ExtensionCountResponse',
} as const

export const HTTPValidationErrorSchema = {
  properties: {
    detail: {
      items: {
        $ref: '#/components/schemas/ValidationError',
      },
      type: 'array',
      title: 'Detail',
    },
  },
  type: 'object',
  title: 'HTTPValidationError',
} as const

export const PostCountResponseSchema = {
  properties: {
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['count'],
  title: 'PostCountResponse',
} as const

export const PostFilterSchema = {
  properties: {
    rating: {
      anyOf: [
        {
          items: {
            type: 'integer',
          },
          type: 'array',
        },
        {
          type: 'null',
        },
      ],
      title: 'Rating',
      default: [],
    },
    score: {
      anyOf: [
        {
          items: {
            type: 'integer',
          },
          type: 'array',
        },
        {
          type: 'null',
        },
      ],
      title: 'Score',
      default: [],
    },
    tags: {
      anyOf: [
        {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        {
          type: 'null',
        },
      ],
      title: 'Tags',
      default: [],
    },
    extension: {
      anyOf: [
        {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        {
          type: 'null',
        },
      ],
      title: 'Extension',
      default: [],
    },
    folder: {
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
      title: 'Folder',
    },
  },
  type: 'object',
  title: 'PostFilter',
} as const

export const PostHasColorPublicSchema = {
  properties: {
    order: {
      type: 'integer',
      title: 'Order',
    },
    color: {
      type: 'integer',
      title: 'Color',
    },
  },
  type: 'object',
  required: ['order', 'color'],
  title: 'PostHasColorPublic',
} as const

export const PostHasTagSchema = {
  properties: {
    post_id: {
      type: 'integer',
      title: 'Post Id',
    },
    tag_name: {
      type: 'string',
      title: 'Tag Name',
    },
    is_auto: {
      type: 'boolean',
      title: 'Is Auto',
      default: false,
    },
  },
  type: 'object',
  required: ['post_id', 'tag_name'],
  title: 'PostHasTag',
} as const

export const PostHasTagPublicSchema = {
  properties: {
    is_auto: {
      type: 'boolean',
      title: 'Is Auto',
    },
    tag_info: {
      $ref: '#/components/schemas/TagWithGroupPublic',
    },
  },
  type: 'object',
  required: ['is_auto', 'tag_info'],
  title: 'PostHasTagPublic',
} as const

export const PostPublicSchema = {
  properties: {
    id: {
      type: 'integer',
      title: 'Id',
    },
    file_path: {
      type: 'string',
      title: 'File Path',
    },
    file_name: {
      type: 'string',
      title: 'File Name',
    },
    extension: {
      type: 'string',
      title: 'Extension',
    },
    full_path: {
      type: 'string',
      title: 'Full Path',
    },
    width: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Width',
    },
    height: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Height',
    },
    aspect_ratio: {
      anyOf: [
        {
          type: 'number',
        },
        {
          type: 'null',
        },
      ],
      title: 'Aspect Ratio',
    },
    updated_at: {
      type: 'integer',
      title: 'Updated At',
    },
    created_at: {
      type: 'integer',
      title: 'Created At',
    },
    score: {
      type: 'integer',
      title: 'Score',
    },
    rating: {
      type: 'integer',
      title: 'Rating',
    },
    description: {
      type: 'string',
      title: 'Description',
    },
    meta: {
      type: 'string',
      title: 'Meta',
    },
    md5: {
      type: 'string',
      title: 'Md5',
    },
    size: {
      type: 'integer',
      title: 'Size',
    },
    source: {
      type: 'string',
      title: 'Source',
    },
    caption: {
      type: 'string',
      title: 'Caption',
    },
    colors: {
      items: {
        $ref: '#/components/schemas/PostHasColorPublic',
      },
      type: 'array',
      title: 'Colors',
    },
  },
  type: 'object',
  required: ['id', 'file_path', 'file_name', 'extension', 'full_path', 'width', 'height', 'aspect_ratio', 'updated_at', 'created_at', 'score', 'rating', 'description', 'meta', 'md5', 'size', 'source', 'caption', 'colors'],
  title: 'PostPublic',
} as const

export const PostWithTagPublicSchema = {
  properties: {
    id: {
      type: 'integer',
      title: 'Id',
    },
    file_path: {
      type: 'string',
      title: 'File Path',
    },
    file_name: {
      type: 'string',
      title: 'File Name',
    },
    extension: {
      type: 'string',
      title: 'Extension',
    },
    full_path: {
      type: 'string',
      title: 'Full Path',
    },
    width: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Width',
    },
    height: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Height',
    },
    aspect_ratio: {
      anyOf: [
        {
          type: 'number',
        },
        {
          type: 'null',
        },
      ],
      title: 'Aspect Ratio',
    },
    updated_at: {
      type: 'integer',
      title: 'Updated At',
    },
    created_at: {
      type: 'integer',
      title: 'Created At',
    },
    score: {
      type: 'integer',
      title: 'Score',
    },
    rating: {
      type: 'integer',
      title: 'Rating',
    },
    description: {
      type: 'string',
      title: 'Description',
    },
    meta: {
      type: 'string',
      title: 'Meta',
    },
    md5: {
      type: 'string',
      title: 'Md5',
    },
    size: {
      type: 'integer',
      title: 'Size',
    },
    source: {
      type: 'string',
      title: 'Source',
    },
    caption: {
      type: 'string',
      title: 'Caption',
    },
    colors: {
      items: {
        $ref: '#/components/schemas/PostHasColorPublic',
      },
      type: 'array',
      title: 'Colors',
    },
    tags: {
      items: {
        $ref: '#/components/schemas/PostHasTagPublic',
      },
      type: 'array',
      title: 'Tags',
    },
  },
  type: 'object',
  required: ['id', 'file_path', 'file_name', 'extension', 'full_path', 'width', 'height', 'aspect_ratio', 'updated_at', 'created_at', 'score', 'rating', 'description', 'meta', 'md5', 'size', 'source', 'caption', 'colors', 'tags'],
  title: 'PostWithTagPublic',
} as const

export const RatingCountResponseSchema = {
  properties: {
    rating: {
      type: 'integer',
      title: 'Rating',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['rating', 'count'],
  title: 'RatingCountResponse',
} as const

export const RatingUpdateSchema = {
  properties: {
    rating: {
      type: 'integer',
      maximum: 5,
      minimum: 0,
      title: 'Rating',
    },
  },
  type: 'object',
  required: ['rating'],
  title: 'RatingUpdate',
} as const

export const ScoreCountResponseSchema = {
  properties: {
    score: {
      type: 'integer',
      title: 'Score',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['score', 'count'],
  title: 'ScoreCountResponse',
} as const

export const ScoreUpdateSchema = {
  properties: {
    score: {
      type: 'integer',
      maximum: 5,
      minimum: 0,
      title: 'Score',
    },
  },
  type: 'object',
  required: ['score'],
  title: 'ScoreUpdate',
} as const

export const TagSchema = {
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
    group_id: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Group Id',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
    posts: {
      items: {
        $ref: '#/components/schemas/PostHasTag',
      },
      type: 'array',
      title: 'Posts',
    },
  },
  type: 'object',
  required: ['name'],
  title: 'Tag',
} as const

export const TagAndGroupIdPublicSchema = {
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
    group_id: {
      anyOf: [
        {
          type: 'integer',
        },
        {
          type: 'null',
        },
      ],
      title: 'Group Id',
    },
  },
  type: 'object',
  required: ['name', 'group_id'],
  title: 'TagAndGroupIdPublic',
} as const

export const TagGroupPublicSchema = {
  properties: {
    id: {
      type: 'integer',
      title: 'Id',
    },
    name: {
      type: 'string',
      title: 'Name',
    },
    color: {
      type: 'string',
      title: 'Color',
    },
  },
  type: 'object',
  required: ['id', 'name', 'color'],
  title: 'TagGroupPublic',
} as const

export const TagGroupWithTagsPublicSchema = {
  properties: {
    id: {
      type: 'integer',
      title: 'Id',
    },
    name: {
      type: 'string',
      title: 'Name',
    },
    color: {
      type: 'string',
      title: 'Color',
    },
    tags: {
      items: {
        $ref: '#/components/schemas/TagPublic',
      },
      type: 'array',
      title: 'Tags',
    },
  },
  type: 'object',
  required: ['id', 'name', 'color', 'tags'],
  title: 'TagGroupWithTagsPublic',
} as const

export const TagPublicSchema = {
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
  },
  type: 'object',
  required: ['name', 'count'],
  title: 'TagPublic',
} as const

export const TagResponseSchema = {
  properties: {
    count: {
      type: 'integer',
      title: 'Count',
    },
    tag_info: {
      $ref: '#/components/schemas/TagAndGroupIdPublic',
    },
  },
  type: 'object',
  required: ['count', 'tag_info'],
  title: 'TagResponse',
} as const

export const TagWithGroupPublicSchema = {
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
    count: {
      type: 'integer',
      title: 'Count',
    },
    group: {
      anyOf: [
        {
          $ref: '#/components/schemas/TagGroupPublic',
        },
        {
          type: 'null',
        },
      ],
    },
  },
  type: 'object',
  required: ['name', 'count', 'group'],
  title: 'TagWithGroupPublic',
} as const

export const ValidationErrorSchema = {
  properties: {
    loc: {
      items: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'integer',
          },
        ],
      },
      type: 'array',
      title: 'Location',
    },
    msg: {
      type: 'string',
      title: 'Message',
    },
    type: {
      type: 'string',
      title: 'Error Type',
    },
  },
  type: 'object',
  required: ['loc', 'msg', 'type'],
  title: 'ValidationError',
} as const
