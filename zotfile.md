# ZotFile

#### Advanced PDF management for Zotero



### [Download](https://github.com/jlegewie/zotfile/releases/download/v5.1.2/zotfile-5.1.2-fx.xpi)

[View the Project on GitHub](https://github.com/jlegewie/zotfile)
[Instructions to Install ZotFile](http://zotfile.com/index.html#how-to-install--set-up-zotfile)

### Content

[Features • ](http://zotfile.com/index.html#features)[Install Zotfile • ](http://zotfile.com/index.html#how-to-install--set-up-zotfile)[Renaming Rules • ](http://zotfile.com/index.html#renaming-rules)[User-Defined Wildcards • ](http://zotfile.com/index.html#user-defined-wildcards)[Extract PDF Annotations • ](http://zotfile.com/index.html#extract-pdf-annotations)[Hidden Options • ](http://zotfile.com/index.html#hidden-options)[Reporting a Bug • ](http://zotfile.com/index.html#reporting-a-bug)[Changelog](http://zotfile.com/index.html#changelog)



<iframe id="twitter-widget-0" scrolling="no" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="http://platform.twitter.com/widgets/tweet_button.bac917c749f65aefd5f37c272c7c3538.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Fzotfile.com%2F%23changelog&amp;size=m&amp;text=ZotFile%3A%20Advanced%20PDF%20management%20for%20Zotero&amp;time=1499865948955&amp;type=share&amp;url=http%3A%2F%2Fzotfile.com" data-url="http://zotfile.com" frameborder="0" style="position: static; visibility: visible; width: 61px; height: 20px;"></iframe>

### FEATURES

Zotfile is a Zotero plugin to manage your attachments: automatically rename, move, and attach PDFs (or other files) to Zotero items, sync PDFs from your Zotero library to your (mobile) PDF reader (e.g. an iPad, Android tablet, etc.) and extract annotations from PDF files.

#### ★ Attach New Files to Zotero Items

ZotFile can rename and add the most recently modified file from the Firefox download or a user specified folder as a new attachment to the currently selected Zotero item. It renames the file using metadata from the selected Zotero item (user configurable), and stores the file as a Zotero attachment to this item (or alternatively, moves it to a custom location).

#### ★ (Batch) Rename and Move Attachments based on Zotero Metadata

The user can also select any number of Zotero items and automatically rename and move all attachments of these items according to the user defined rules using metadata of the respective zotero item (batch processing).

#### ★ Sync PDFs with your iPad or Android tablet

To read and annotate PDF attachments on your mobile device, zotfile can sync PDFs from your Zotero library to your (mobile) PDF reader (e.g. an iPad, Android tablet, etc.). Zotfile sends files to a location on your PC or Mac that syncs with your PDF reader App (PDF Expert, iAnnotate, GoodReader etc.), allows you to configure custom subfolders for easy access, and even extracts the annotations and highlighted text to Zotero notes when you get the files back from your tablet. Instructions are below.

#### ★ Extract Annotations from PDF Files

After highlighting and annotating pdfs on your tablet (or with the PDF reader application on your computer), ZotFile can automatically extract the highlighted text and note annotations from the pdf. The extracted text is saved in a Zotero note. Thanks to Joe Devietti, this feature is now available on all platforms based on the pdf.js library.

![pdf annotation and highlight extraction](http://www.columbia.edu/~jpl2136/zotfile_files/pdf-annotation-full.png)

### HOW TO INSTALL & SET UP ZOTFILE

To start using zotfile, make sure that Zotero is installed and follow these simple steps:

1. Install ZotFile

   For *Zotero 5*, first download the extension file (follow the download link above, click on the .xpi file for the most recent release). Now start Zotero 5 and go to “Tool -> Add-ons -> Tools for all Add-ons (the small, drop-down wheel in the top right corner) -> Install Add-on From File” and select the downloaded .xpi file.

2. Change the Source Folder for Attaching new Files

   To attach new files to Zotero items, zotfile looks for the most recently modified (e.g. just downloaded) file in a user specified folder. For Zotero Firefox, this option is set to the Firefox download folder by default. For Zotero Standalone, this option has to be changed on the ‘General Settings’ tab in the preference window (Tools -> ZotFile Preferences). The source folder can be set to any location but I generally recommend setting it to your browser’s download folder such as ~/Downloads on the mac for most browsers.

3. Changing other Options (optional)

   ZotFile offers many other options that can be changed by the user. Most of them are located in the zotfile preference window under Tools -> ZotFile Preferences.

#### Syncing PDF attachments with your iPad or Android tablet

To read and annotate PDF attachments on your mobile device, zotfile can sync PDFs from your Zotero library to your (mobile) PDF reader (e.g. an iPad, Android tablet, etc.). For this purpose, Zotfile sends files to a location on your PC or Mac that syncs with your PDF reader App (PDF Expert, iAnnotate, GoodReader etc.), and gets them back when you have finished reading them.

1. Set up a folder on your PC or Mac that syncs with your tablet reader application. Files that are copied to this folder should automatically appear in your PDF reader application. One possibility is Dropbox, which is free for up to 2GB of space and works with most PDF reader apps. More detailed instructions as well as alternative options should be available on the website of your PDF reader App.
2. Open the ‘Tablet Settings’ tab in the zotfile preference window and enable the option ‘Use ZotFile to send and get files from tablet’.
3. Change the zotfile location for files on the tablet to the folder that syncs with your pdf reader app (‘Base Folder’ on the ‘Tablet Settings’ tab).
4. (optional) Set up subfolders that make it easy to sort your files in the tablet folder so that you can easily find them on your tablet.

You can now start sending pdfs (or other files) to your tablet. Simply right-click on a zotero item and select ‘Send to Tablet’ under ‘Manage Attachments’.

When you are done reading and annotating your pdf, just get the file back from the tablet by clicking on ‘Get from Tablet’ under ‘Manage Attachments’. ZotFile will automatically remove the file from your tablet folder and extract the annotations from the pdf file to a zotero note.

ZotFile adds a saved search for modified files on tablet which updates automatically and can be used to sync attachment files that have been changed.

### RENAMING RULES

![preference window](http://www.columbia.edu/~jpl2136/zotfile_files/zotfile-reader-rename.jpg)

ZotFile renames files based on bibliographic information from the currently selected Zotero item. You can change the renaming rules in the zotfile preference window under renaming rules (Zotero Actions -> ZotFile Preferences). The option ‘Renaming Format’ allows you to create custom renaming rules using wildcards, which are replaced by metadata from the selected Zotero item. Zotfile also supports optional and exclusive wild-cards. Optional wild-cards mean that `{-%y}` only includes the seperator - in the filename if `%y` is defined. Exclusive wild-cards such as `%s|%j` will generate the entry for `%s` if that exists and the entry for `%j` otherwise. Other characters between the wildcards and the bar are ignored (`%s | stuff %j | - more %p` is equivalent to `%s|%j|%p`). Some examples are below.

##### Wildcards

- `%a` last names of authors (not editors etc) or inventors. The maximum number of authors are changed under ‘Additional Settings’.

- `%b` citation key

- `%I` author initials.

- `%F` author’s last name with first letter of first name (e.g. EinsteinA).

- `%A` first letter of author (useful for subfolders)

- `%d`, `%D`, `%L`, `%l` wildcards for editors, same as for authors.

- `%y` year (extracted from Date field)

- `%t` title. Usually truncated after : . ? The maximal length of the remaining part of the title can be changed.

- `%T` item type (localized)

- `%j` name of the journal

- `%p` name of the publisher

- | `%w` name of the journal or publisher (same as “%j | %p”) |
  | -------------------------------------------------- | ---- |
  |                                                    |      |

- `%s` journal abbreviation

- `%v` journal volume

- `%e` journal issue

- `%f` pages

- `%c` collection path (only for sub-folders, not file names). When item is in multiple collections, user can choose between the different collections.

- `%n` patent number (patent items only)

- `%i` assignee (patent items only)

#### Examples

Abbott, Andrew, and Alexandra Hrycak (1990): Measuring Resemblance in Sequence Data: An Optimal Matching Analysis of Musicians’ Careers. American Journal of Sociology 96:144-185.

- `{%a}{-%y}{-%j (%s)}` - Abbott-1990-American Journal of Sociology (AJS)

  (if either “%j” or “%s” is empty, “Abbott-1990”)

- `{%a-}{%y-}{%s|%j}` - “Abbott-1990-AJS” or “Abbott-1990-American Journal of Sociology” if “%s” is empty

- `{%a_}{%y_}{%t}`: Abbott_Hrycak_1990_Measuring Resemblance in Sequence Data

- `%a-%y %t`: Abbott_Hrycak-1990 Measuring Resemblance in Sequence Data

- `{%w_}{%y_}{%a}`: American Journal of Sociology_1990_Abbott_Hrycak

  With ‘Maximum number of authors’ set to 1 and ‘Add suffix …’ set to ‘et al’

- `%a_%y_%t`: Abbott et al_1990_Measuring Resemblance in Sequence Data

  With ‘Maximum number of authors’ set to 1, ‘Add suffix …’ disabled, and ‘Maximum length of title’ set to 10

- `%a_%y_%t`: Abbott_1990_Measuring

### USER-DEFINED WILDCARDS

All wildcards are now defined in the hidden preference `zotfile.wildcards.default` and can be changed by the user. But I **strongly** suggest that you do not change this preference. Instead, there is a second hidden preference `zotfile.wildcards.user` that allows you to add and overwrite wildcards (hidden preference can be changed in `about:config`). This is a preference is for advanced user without any error checking so be careful what you do! By default, `zotfile.wildcards.user` is set to `{}` so that no user wildcards are defined. Below is an example JSON that defines wildcards for `%1`, `%2`, `%3`, `%4` illustrating all the possibilities:

1. String with the name of Zotero field (`%1`)

2. JSON with item type specific field names (`%2`)

   Always include a `default` value. Otherwise this is not going to work. A list of all item types is available [here](https://api.zotero.org/itemTypes?pprint=1).

3. JSON with `field` element and transformations based on regular expressions (`%3` and `%4`)

   ZotFile uses the specified `field` as an input string and then applies the transformations specified in `operations`. The value of `field` can either be the name of a Zotero field (see 1) or a javascript object with item type specific field names (see 2). `operations` is an array of javascript objects and supports three types of transformations that are identified by the `function` element:

   - `exec`: Search for matches using regular expressions (`%3`). Zotfile uses the [exec() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) based on the regular expression defined in `regex`, and returns the element specified in `group` so that `0` returns the matched text and higher values the corresponding capturing parenthesis. If the match fails, this operation returns the input data.

     Required parameters: `regex`

     Optional parameters: `group` (default `0`), `flags` (default `"g"`)

   - `replace`: Replaces matches of a pattern using regular expressions (`%4`). Zotfile uses the [replace() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) with the regular expression `regex` and replacement string `replacement`. The replacement string can include `$n` for the _n_th parenthesized sub-match string and other special replacement patterns (see [replace() documentationn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)). The wildcard `%4`, for example, takes the date when an item was added (format `2012-02-18 02:31:37`) and returns the reformatted date as `20120218`.

     Required parameters: `regex`, `replacement`

     Optional parameters: `flags` (default `"g"`)

   - `toLowerCase` etc: Simple string functions that that do not require any additional arguments(`%5`). Currently supported are `toLowerCase`, `toUpperCase`, and `trim`.

   `flags` is an optional parameter for both searching and replacing and corresponds to [flags for regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_Searching_With_Flags) in javascript (default: `"g"`).

4. Finally, the wildcard `%5` combines item type specific field names with regular expression.

##### Example for user-defined wildcards

```
{
    "1": "publicationTitle",
    "2": {
        "default": "publicationTitle",
        "book": "publisher",
        "bookSection": "publisher"
    },
    "3": {
        "field": "title",
        "regex": "([\\w ,-]{1,50})[:\\.?!]?",
        "group": 1
    },
    "4": {
        "default": {
            "field": "title",
            "regex": "([\\w ,-]{1,10})[:\\.?!]?",
            "group": 1,
            "transform": "upperCase"
        },
        "journalArticle": "publicationTitle"
    }
}
```

##### Item types and field names

A complete list of Zotero fields is available [here](https://api.zotero.org/itemFields?pprint=1) (`dateModified` and `dateAdded` seem to be missing from that list) and all the item types are [here](https://api.zotero.org/itemTypes?pprint=1). The fields for each item type are listed on [this page](http://aurimasv.github.io/z2csl/typeMap.xml). Zotfile defines a number of *additional fields* that can be used as part of wildcards: `itemType` is the language specific item type, `formatedTitle` is the title formatted using the options defined in the zofile preferences, `author` is the author string formatted using the zotfile preferences, `authorLastF` is the author string formatted as LastnameF, and `authorInitials` are the initial of the authors.

##### Formatting rules

There are a couple of formatting rules for the user-defined wildcards:

- Wildcards can only be one character
- Use double escape characters in regular expression so that a `\d` becomes `\\d`
- Always use `"` never `'`

Most importantly, [validate your json](http://pro.jsonlint.com/). Check out `zotfile.wildcards.default` for more examples (see below). Finally, the JSON has to be reformatted to one line that can be pasted into the preference field in `about:config`. Here is the example from above:

```
{"1": "publicationTitle", "2": {"default": "publicationTitle", "book": "publisher", "bookSection": "publisher"}, "3": {"field": "title", "regex": "([\\w ,-]{1,50})[:\\.?!]?", "group": 1 }, "4": {"default": {"field": "title", "regex": "([\\w ,-]{1,10})[:\\.?!]?", "group": 1, "transform": "upperCase"}, "journalArticle": "publicationTitle"} }
```

You can use a javascript console such as Firefox’s Scratchpad to test whether the JSON is properly

```
wildcard = '{"1": "publicationTitle", "2": {"default": "publicationTitle", "book": "publisher", "bookSection": "publisher"}, "3": {"field": "title", "regex": "([\\w ,-]{1,50})[:\\.?!]?", "group": 1 }, "4": {"default": {"field": "title", "regex": "([\\w ,-]{1,10})[:\\.?!]?", "group": 1, "transform": "upperCase"}, "journalArticle": "publicationTitle"} }';
JSON.parse(wildcard)
```

##### Default setting of `zotfile.wildcards.default`

The information in this file might not be up to date but you can look at the default wildcards and learn something about user-defined wildscards [here](http://zotfile.com/wildcards-default.json). The minified version in one line is [here](http://zotfile.com/wildcards-default-min.json) so that you can copy it to `zotfile.wildcards.default` if you screw up.

### EXTRACT PDF ANNOTATIONS

Zotfile can extracted annotations and highlighted text from many PDF files. The extracted annotations are saved in Zotero notes and you can go back to the annotation in the pdf by clicking on the link after the extracted text. PDFs are a very complex format and the extraction will never work for all files. If you can not copy & paste meaningful text from the file in your pdf viewer (open your pdf viewer (not the browser plugin), select text, copy and paste it somewhere), zotfile won’t be able to extract the highlighted text either. If you can, there is a chance that future versions of zotfile will solve the problem. When you have a pdf file that does not work or with clear spacing problems, feel free to share the file on the [zotfile thread](https://forums.zotero.org/discussion/5301/) in the Zotero forum or upload it to the [zotfile Zotero group](https://www.zotero.org/groups/zotfile) in the `PUT FILES HERE` folder. But only share files for which you can copy and paste text! Otherwise you are wasting everyone’s time. On Mac OS, you can also use poppler to extract pdf annotations (ZotFile Preferences -> Advanced Settings). Currently, pdf.js is more reliable and should be the default in most cases. The poppler-based tool, however, is faster and might handle certain pdf standards that are not yet supported by pdf.js.

#### Goto Annotation in PDF

Zotfile adds a link to extracted annotations that allows you to open the pdf file at the page with the annotation. Just click on the link after some extracted text and your pdf should open on the correct location. On Windows, zotfile detects the default pdf viewer and opens the pdf on the correct page (not tested for Windows 8). Adobe Reader, Foxit and PDF-XChange all work (other might as well but are untested). Adobe Reader, however, does not jump to the correct page when the file is already open (Foxit and PDF-XChange do). If zotfile is unable to detect the default viewer or you want to force zotfile to use a different viewer, simply change the hidden option `zotfile.pdfExtraction.openPdfWin` to the desired path (e.g. `C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe`). On Mac OS, zotfile works with Preview (the default) and Skim. Preview, however, does not support scripting very well and has certain limitations. Don’t press any keys while the pdf is opening, for example. [Skim](http://skim-app.sourceforge.net/), an alternative pdf viewer for Mac OS, works much better! Just set the hidden option `zotfile.pdfExtraction.openPdfMac_skim` to `true` and zotfile will open the pdf in Skim. For Linux, zotfile first tries okular and then evince but you can also set the `zotfile.pdfExtraction.openPdfLinux` option to change the default behavior. One example would be `/usr/bin/okular -p`, which tell zotfile the path and the argument for the page number.

### HIDDEN OPTIONS

Zotfile has a number of hidden options that allow you to further configure zotfile. You can access the hidden options through about:config. Open the preference window (Zotero -> Preferences), go to Advanced and click on ‘Open about:config’

Search for `extensions.zotfile` to see a list of the hidden zotfile options. Here is a list of the options that can be changed by the user (I strongly discourage to change any of the other options):

- `.allFiles`

  By default, zotfile’s ‘Attach New File’ function attaches the most recently modified file from the user defined folder. With this option set to true, zotfile attaches all files in the user defined folder to the currently selected zotero item. (Note: I haven’t tested this for a while but it should still work)

- `.disable_renaming`

  Disable any renaming of files - just moves them to the specified location.

- `.tablet.mode`

  In *background mode* (mode=1, default), zotfile leaves zotero attachments at their current location and moves a copy of the file to the tablet folder (set in the zotfile preference window) when they are send to the tablet. Getting the file back from the tablet replaces the zotero attachment file and removes it from the tablet folder. This mode is recommended when you sync attachment files in your zotero library across multiple computers or when you index your attachments.

  The *foreground mode* (mode=2) moves the attachment file to the tablet folder and links to this location from zotero. In this mode there is always only one copy of the file. You can not, however, sync linked attachments to the zotero server.

- `.confirmRepush`

  By default, zotfile asks the user whether an attachment should be send to the tablet that is already on the tablet, which can be useful to move it to a different subfolder. This user confirmation can be disabled with this option.

- `.tablet.tagParentPush.tablet.tagParentPush_tag.tablet.tagParentPull.tablet.tagParentPull_tag`

  These options allow the user to tag the parent item when sending (push) or getting back (pull) attachments to or from the tablet.

- `.pdfExtraction.NoteHtmlTagStart`, `.pdfExtraction.NoteHtmlTagEnd`, `.pdfExtraction.HighlightHtmlTagStart`, `.pdfExtraction.HighlightHtmlTagEnd`, `.pdfExtraction.UnderlineHtmlTagStart`, `.pdfExtraction.UnderlineHtmlTagEnd`

  These options allow the user to fine-tune the formatting of the extracted PDF annotations in the zotero note. They define the opening and closing html tag for different types of annotations. The default settings format highlighted text from the pdf normally, note text in italics (<i> for start and </i> for end), and underline underlined text (<u> for start and </u> for end). The end options for note, highlight and underline have to be the closing tag for the corresponding start option.

- `.pdfExtraction.NoteRemoveHyphens`

  By default, zotfile removes hyphens from extracted text. Setting NoteRemoveHyphens to false, disables this option.

- `.UsePDFJSandPoppler`

  With this option, zotfile extracts PDF annotations twice using both pdf.js and poppler. This option only works on Mac OS when the poppler based extraction script is installed.

- `info_window_duration`, `info_window_duration_clickable`

  Duration (in milliseconds) for which the info windows show up.

- `pdfExtraction.replacements`

  Custom, regular expression-based replacements in extracted annotations. This can be useful because some pdfs contain ‘broken’ characters. For example, [{“regex”:” ?\u00f0”, “replacement”: “ (“}] replaces the unicode character ð with ( to fix a problem in pdfs from a certain publisher. In this case, ð is a problem with the pdf and not with zotfile’s extraction. The hidden option can be used to fix it.