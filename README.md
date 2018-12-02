# gtfs.org
Source code for the [General Transit Feed Specification Site](https://gtfs.org). This site was built using [GatsbyJS](https://github.com/gatsbyjs/gatsby), a static-site generator which uses React and GraphQL.

## Editing site content
The content for this site is grouped into three primary categories: Core Reference, Realtime Reference and Best Practices. These categories are housed in separate repositories. To edit information in those documents, see the corresponding repository:

* [GTFS Core Reference](https://github.com/google/transit/tree/master/gtfs)
* [GTFS Realtime Reference](https://github.com/google/transit/tree/master/gtfs-realtime)
* [GTFS Best Practices](https://github.com/MobilityData/gtfs-best-practices)

## Building the site locally:
1. Clone this repository:
  `git clone https://github.com/MobilityData/gtfs.org`
2. Ensure you have up-to-date versions of node and npm installed locally.
3. Install dependencies:
  `npm install`
4. Run this command to clone all necessary data from the content repos:
  `npm run fetchdata`
5. To run the site locally in development mode:
  `gatsby develop`
6. To build the production version and run it locally:
  `gatsby build && gatsby serve`

## Updating site structure:
The individual pages of the site are programmatically generated from the markdown files in the `src/pages` directory. The files in `best-practices` and `reference` were cloned in step 4 above, the rest live in this repository. To update the content of the site simply update those files and commit them in their respective repository, this will automatically trigger a new build of the site.

The pages to be built and their respective source files are specified in `page-config.yaml` in the project root. If you'd like to add/remove pages, or update a reference page's navigation menu you can do so by making changes to this file.

If adding new pages, you must first create a new directory in `src/pages` containing the markdown files which will populate the page. Then register that directory to be queried into Gatsby's GraphQL data layer by appending an object of the following structure to the plugins array of `gatsby-config.js`:
```
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/about`,
        name: "About"
      }
    },
```
 Replacing 'about' in path and name with the name of your directory and page, respectively. Then add a new section to `page-config.yaml` ensuring that the Title field matches the name field of the above object. Because of differences in formatting between the existing source files there are a number of caveats to this config setup:

* There are currently two page templates to use:
  1. `doc-page` is used for any documentation pages such as 'Best Practices' and 'Realtime Reference', requires a sidemenu and may be populated from numerous markdown files.
  2. `basic-page` is used for all other pages, can only be compiled from one markdown file, and doesn't have a sidemenu


* Depending on the formatting of headers in your markdown files, the anchor links for the sidemenu may or may not be automatically generated when parsing the files. (i.e. the sidemenu config for Static Reference autogenerates, and thus only requires the 'name' field, which is what will be displayed in the sidemenu. However Realtime does not, so the anchors must be manually included in the config)

* Sidemenu items must correspond to headings in the markdown source files. They may each represent a separate file with that heading, or multiple headings from a single file.

* The sidemenu can only be nested to three levels of children, as in the Realtime Reference config.

* The slug field is used to specify source markdown files for a given page, and must be included for any sidemenu item that has a corresponding file. (i.e. Static and Realtime Reference are both compiled from one markdown file each, so they have only one slug at the root of the menu, whereas Best Practices has a file for each menu item and thus a slug is required for each)



## License

Except as otherwise noted, the content of this repository is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/), and code samples are licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).
