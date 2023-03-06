# Faust Gutenberg Bridge DE{CODE} 2023 Demo

This repo is an example project to show how you can use [WPGraphQL Content Blocks](https://github.com/wpengine/wp-graphql-content-blocks) and our new [`@faustwp/blocks`](https://www.npmjs.com/package/@faustwp/blocks) package to fetch Gutenberg block data from WPGraphQL and represent those blocks as React components in your Faust site.

## Setup

### Create a WP site

Create a WordPress site. I recommend using [Local](https://localwp.com) for this.

### Install Plugins

This example project requires the following plugins:

- [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
- [Faust](https://wordpress.org/plugins/faustwp/)
- [WPGraphQL Content Blocks](https://github.com/wpengine/wp-graphql-content-blocks)

### Install NPM Dependencies

Run the following command from the project root:

```
npm install
```

### Create a `.env.local` file

Copy the contents of the `.env.local.sample` file and paste the contents into a newly created file, named `.env.local`:

It should look like this:

```
# Your WordPress site URL
NEXT_PUBLIC_WORDPRESS_URL=https://faustexample.wpengine.com

# Plugin secret found in WordPress Settings->Headless
# FAUST_SECRET_KEY=YOUR_PLUGIN_SECRET
```

Copy andy paste the URL to your WordPress site and replace `https://faustexample.wpengine.com` with it.

### Run the dev server

```
npm run dev
```

Your Faust site will be available at http://localhost:3000.

### Set the Frontend site URL in Faust Settings

In the "Front-end site URL" input box, enter `http://localhost:3000` and hit "save changes"

### Create a Page with Blocks

Now, create a page with block content. This example project has only implemented the following blocks:

- Core Column
- Core Columns
- Core Paragraph
- Core Image

So please stick to these blocks when editing.

Once you are finished, click "Publish" or "Update" then "View Page"/"View Post" in the bottom left corner.

This will take you to the proper page on the Faust site. Notice your Gutenberg blocks properly styled on the frontend!
