export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (meta)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author (meta)',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'description',
      title: 'Description (meta)',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'Main image (meta)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectType',
      title: 'Project type (meta)',
      type: 'string',
      options: {
        list: [
          {
            value: 'Personal',
            title: 'Personal',
          },
          {
            value: 'Client',
            title: 'Client',
          },
          {
            value: 'School',
            title: 'School',
          }
        ]
      }
    },
    {
      name: 'releaseDate',
      title: 'Release date (meta)',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
