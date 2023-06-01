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
