export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'string',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
				},
				{
					type: 'figure',
				},
				{
					type: 'youtube',
				},
				{
					type: 'twitter',
				},
			],
		},
		{
			name: 'tweetEmbed',
			title: 'Tweet Link',
			type: 'string',
			description:
				'Paste the link to the tweet here. Example: "https://twitter.com/herenowbody/status/1265632297388138497?s=20"',
		},
		{
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
		},
		{
			name: 'date',
			title: 'Date',
			type: 'datetime',
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'author' }],
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
		},
	],
};
