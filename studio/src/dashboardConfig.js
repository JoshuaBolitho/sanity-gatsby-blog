export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8c95ba19df8a01e2ebb727',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ojhtqfcn',
                  apiId: 'fabdc45a-62ad-4bb6-b68f-3c9e1b7f06a2'
                },
                {
                  buildHookId: '5e8c95b0a8d20e46ad757ca2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-54znac3u',
                  apiId: '460f29f7-c9ec-4755-a2fe-b1cb6e37cf82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoshuaBolitho/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-54znac3u.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
