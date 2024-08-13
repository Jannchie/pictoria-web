// This file is auto-generated by @hey-api/openapi-ts

export const $Body_v1_upload_file_v1_upload_post = {
  properties: {
    file: {
      type: 'string',
      format: 'binary',
      title: 'File',
    },
    url: {
      type: 'string',
      title: 'Url',
    },
    path: {
      type: 'string',
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

export const $CountResponse = {
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

export const $DirectorySummary = {
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

export const $ExtensionCountResponse = {
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

export const $HTTPValidationError = {
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

export const $PostBase = {
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
    width: {
      type: 'integer',
      title: 'Width',
    },
    height: {
      type: 'integer',
      title: 'Height',
    },
    aspect_ratio: {
      type: 'number',
      title: 'Aspect Ratio',
    },
    score: {
      type: 'integer',
      title: 'Score',
      default: 0,
    },
    rating: {
      type: 'integer',
      title: 'Rating',
      default: 0,
    },
    description: {
      type: 'string',
      title: 'Description',
    },
    updated_at: {
      type: 'integer',
      title: 'Updated At',
    },
    created_at: {
      type: 'integer',
      title: 'Created At',
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
  },
  type: 'object',
  required: ['id', 'file_path', 'file_name', 'extension'],
  title: 'PostBase',
} as const

export const $PostCountResponse = {
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

export const $PostFilter = {
  properties: {
    rating: {
      items: {
        type: 'integer',
      },
      type: 'array',
      title: 'Rating',
      default: [],
    },
    score: {
      items: {
        type: 'integer',
      },
      type: 'array',
      title: 'Score',
      default: [],
    },
    tags: {
      items: {
        type: 'string',
      },
      type: 'array',
      title: 'Tags',
      default: [],
    },
    extension: {
      items: {
        type: 'string',
      },
      type: 'array',
      title: 'Extension',
      default: [],
    },
    folder: {
      type: 'string',
      title: 'Folder',
    },
  },
  type: 'object',
  title: 'PostFilter',
} as const

export const $PostHasTagPublic = {
  properties: {
    is_auto: {
      type: 'boolean',
      title: 'Is Auto',
    },
    tag_info: {
      $ref: '#/components/schemas/TagPublic',
    },
  },
  type: 'object',
  required: ['is_auto', 'tag_info'],
  title: 'PostHasTagPublic',
} as const

export const $PostWithTag = {
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
    width: {
      type: 'integer',
      title: 'Width',
    },
    height: {
      type: 'integer',
      title: 'Height',
    },
    aspect_ratio: {
      type: 'number',
      title: 'Aspect Ratio',
    },
    score: {
      type: 'integer',
      title: 'Score',
      default: 0,
    },
    rating: {
      type: 'integer',
      title: 'Rating',
      default: 0,
    },
    description: {
      type: 'string',
      title: 'Description',
    },
    updated_at: {
      type: 'integer',
      title: 'Updated At',
    },
    created_at: {
      type: 'integer',
      title: 'Created At',
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
    tags: {
      items: {
        $ref: '#/components/schemas/PostHasTagPublic',
      },
      type: 'array',
      title: 'Tags',
      default: [],
    },
  },
  type: 'object',
  required: ['id', 'file_path', 'file_name', 'extension'],
  title: 'PostWithTag',
} as const

export const $RatingCountResponse = {
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

export const $RatingUpdate = {
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

export const $ScoreCountResponse = {
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

export const $ScoreUpdate = {
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

export const $TagGroup = {
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
  required: ['name'],
  title: 'TagGroup',
} as const

export const $TagPublic = {
  properties: {
    count: {
      type: 'integer',
      title: 'Count',
      default: 0,
    },
    name: {
      type: 'string',
      title: 'Name',
    },
    group_id: {
      type: 'integer',
      title: 'Group Id',
    },
  },
  type: 'object',
  required: ['name'],
  title: 'TagPublic',
} as const

export const $TagResponse = {
  properties: {
    count: {
      type: 'integer',
      title: 'Count',
    },
    tag_info: {
      $ref: '#/components/schemas/TagPublic',
    },
  },
  type: 'object',
  required: ['count', 'tag_info'],
  title: 'TagResponse',
} as const

export const $ValidationError = {
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
