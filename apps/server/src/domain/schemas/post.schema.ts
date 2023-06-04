export const CreatePostSchema = {
  body: {
    type: 'object',
    required: ['title', 'creatorId', 'description'],
    properties: {
      title: {
        type: 'string',
        minLength: 4
      },
      creatorId: {
        type: 'string',
        format: 'uuid'
      },
      description: {
        type: 'string',
        minLength: 4
      },
      price: {
        type: 'number'
      },
      picture: {
        type: 'string'
      },
      isArchived: {
        type: 'boolean'
      }
    }
  }
}

export const GetPostsSchema = {
  querystring: {
    cursor: { type: 'string' },
    results: { type: 'number' }
  }
}

export const GetPostByIdSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  }
}
