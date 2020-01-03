# Firecrest Responsive theme for Hugo #

This is a general purpose default theme from Chyrp CMS ported to Hugo. It was designed to replace feather functionality from Chyrp, so different sections represent different feathers. Archetypes define the nessessary front matter for the corresponging "feather".

## Sidebar Biobox ##

Sidebar's biobox uses `content/about.html` file for content. Set the following front matter:

* `title = "About"` is mandatory.
* `unsafe = true` is needed if you want to use HTML.

## Proper homepage ##

Create `content/_index.md` with the following front matter: `type = "home"`.

## How to use different sections ##

`title`, `date` and `tags` are mandatory. `tags` can be empty (default). Other front matter depends on the section.

### Text ###

Create a new post with `hugo new text/<post>.md` or `hugo new text/<post>/index.md`. The most basic section, nothing extra is required.

### Photo ###

Create a new post with `hugo new photo/<post>/index.md`. You can post one or multiple images.

#### One image ####

* `image_title` sets the caption under the image.
* `image_source` makes `image_title` a link to that source.
* `author` adds the image's author name to the caption. 
* No need to touch `[[resources]]`. Just drop the image you want to post in the `content/photo/<post>` directory, it'll be picked up automatically and a thumbnail will be generated. `image*` resource name is expected, you can keep it `image:count`.

#### Multiple images ####

* `image_title` is not used.
* `image_source` sets a link to the source.
* `author` is not used.
* It's not necessary to touch `[[resources]]`. Just drop the images you want to post in the `content/photo/<post>` directory, they'll be picked up automatically and thumbnails will be generated. To change the order rename image files or set resources yourself. `image*` resource names are expected, you can keep them `image:count`.

### File ###

Create a new post with `hugo new file/<post>/index.md`. You can post any number of files.

Place the files you want to post into `content/file/<post>` directory. Everything besides `index.md` will be picked up. `file*` resource names are expected, you can keep them `file:count`. If you want something not to be posted, adjust resource's `src` mask or specify multiple `[[resources]]`.

### Video ###

Create a new post with `hugo new video/<post>/index.md`. You can only post one video. It can be either a YouTube video or a video file.

#### YouTube video ####

Set `video_source` to a YouTube link. If you have anything but `index.md` in the post's directory, you should remove `[[resources]]` front matter.

#### Video file ####

Place the video you want to post in the `content/video/<post>` directory. The video must have `.mp4`, `.webm` or `.ogv` extension and be of corresponding format. If you place several video files, only the first one found will be posted. `video` resource name is expected, you should leave it. `video_source` is not used.

### Audio ###

Create a new post with `hugo new audio/<post>/index.md`. You can only post one audio.

Place the audio you want to post in the `content/audio/<post>` directory. The audio must have `.mp3`, `.m4a` or `.ogg` extension and be of corresponding format. If you place several audio files, only the first one found will be posted. `audio` resource name is expected, you should leave it.

### Code ###

Create a new post with `hugo new code/<post>/index.md`. You can post multiple source files, they will be embedded into the post. It is preferred that the source files use the same programming language.

`lang` sets the programming language of source files. If you have files in multiple languages, edit `[[resources]]` to exclude the files that don't use `lang` language. It is recommended to keep your code snippets in separate files with one language per post. If you need to post a snippet in a different programming language, use `[highlight](https://gohugo.io/content-management/shortcodes/#highlight)` shortcode.

`snippet*` resource names is expected, you should keep them `snippet:count`.

### Link ###

Create a new post with `hugo new link/<post>.md` or `hugo new link/<post>/index.md`

`featured_link` is a link you want to promote in the post.

### Pages ###

Pages is a special section. Pages are not listed on the homepage, not counted as posts in archive and are displayed as is (like text posts, except with all HTML allowed).

* `type = "pages"` is mandatory.
* `categories = ["pages"]` is mandatory.
* `omit_header_text = true` is preferred.
* `unsafe = true` is used in order to lift all restrictions when posting in HTML.
* `menu = "pages"` is used to display a link to the page in the sidebar. Remove this if you don't want a link to the page do be in the menu.
* `summary` is recommended to set for a more comprehendable summary in pages' list.
