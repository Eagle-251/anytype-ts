import { I, keyboard } from 'Lib';

const cmd = keyboard.ctrlSymbol();
const hl = (t: string) => `<span class="highlight">${t}</span>`;
const block = (style: I.TextStyle, text: string) => { return { style, text }; };
const title = (t: string) => block(I.TextStyle.Title, t);
const h1 = (t: string) => block(I.TextStyle.Header1, t);
const h2 = (t: string) => block(I.TextStyle.Header1, t);
const h3 = (t: string) => block(I.TextStyle.Header1, t);
const text = (t: string) => block(I.TextStyle.Paragraph, t);
const bullet = (t: string) => block(I.TextStyle.Bulleted, t);
const div = () => { return { type: I.BlockType.Div, style: I.DivStyle.Dot }; };
const video = (src: string) => text(`<video src="${src}" controls autoplay loop class="full" />`);
const img = (src: string, c: string) => text(`<img src="${src}" class="${c}" />`);

export default [
	{ type: I.BlockType.Cover, param: { type: I.CoverType.Gradient, id: 'pinkOrange' } },
	{ type: I.BlockType.IconPage, icon: '👋' },

	title(`2023: Ready, Set... Declutter 😎`),
	text(`Welcome to the first release of the new year! After some major refactoring work in the last quarter of 2022, we're pleased to deliver an update that we hope will allow you to clear the clutter from your account and start the new year with a clean, productive slate.`),

	h2(`💎 Highlights of this Release`),
	bullet(`<b>Type &amp; Relation Deletion &amp; Modification</b><br/>We've heard you loud &amp; clear - starting with this update, it's now possible to remove &amp; modify both pre-installed and custom-made Types &amp; Relations from the Library. Any modifications will be reflected in Objects which have already used these Types &amp; Relations.`),
	bullet(`<b>Introduction of Marketplace</b><br/>In case you're wondering where all of those pre-installed Types &amp; Relations have gone, they're now conveniently stored in the Marketplace for both existing &amp; new users to install to your account (and eventually add your own). Access the Marketplace from the new &quot; Marketplace' tab in the Library.`),
	bullet(`<b>Set by Relation</b><br/>Sets are no longer just limited to Types! You can now create Sets by filtering for Objects which share a certain Relation. Quick hack for anyone who wants an overview of all Objects in their account: Create a Set by Relation: Creation Date, and... ta-da!`),
	bullet(`<b>Everything as an Object</b><br/>...seriously, everything. Types &amp; Relations are now their own Objects, meaning that it's possible to create Relations and Sets of Types and…Relations. While you may already start experimenting with these features in the Library by opening each Type/Relation individually, this update also unblocks other highly-requested features such as grouping and tuning relation values.`),

	h2(`⚡ Quality-of-Life Improvements`),
	bullet(`<b>Multi-select, delete &amp; link from Graph</b><br/>Say goodbye to rogue Objects hanging around in your graph! It's now possible to right-click on Objects in the Graph to open a menu of operations, including Delete &amp; Link. Hit Shift + Click to multi-select and bulk-manage these Objects.`),
	bullet(`<b>Link-to Feature</b><br/>You now have an easy way to link Objects with each other, which doesn't require editor blocks. Use the &quot; Link to' option in the Object 3-dots menu or in Graph to create direct links and quicker association between Objects.`),
	bullet(`<b>Type creation on-the-fly (Desktop-only)</b><br/>It's now possible to create or install new Types in Editor without needing to visit the Library. Whether creating an Object for the first time or changing its Type, use the dropdown to turn your Objects into whatever's top of mind.`),
	bullet(`<b>Kanban groups syncing cross-device</b><br/>Groups in Kanban are now correctly updating when changed from another device. Furthermore, if you add or delete any tags your Kanban will receive real-time updates!`),
	bullet(`<b>Block navigation via arrow keys</b><br/>Speed through document editing and review by jumping between blocks using your left and right arrow keys.`),
	bullet(`<b>Copy button next to Anytype version</b><br/>Bug reports just got that much easier - now, you can copy the version in one click by opening the Anytype → About Anytype window from the application menu.`),
	bullet(`<b>Download button for image blocks</b><br/>Any image block in your editor now shows a download icon on hover, in case you would like to download and save images previously added to your Objects.`),
	bullet(`<b>Design update: Link &amp; Bookmark Blocks</b><br/>Link &amp; bookmark blocks for URLs pasted from the web got a little facelift with this update - expect to see a small difference in font weights &amp; favicons.`),
	bullet(`<b>Design update: Read-only Relations in Sets (Grid View)</b><br/>Relations which cannot be updated (for instance &quot; Created by' or &quot; Creation Date') now have a lock icon displayed to indicate that they cannot be edited.`),
	bullet(`<b>Toast notifications</b><br/>For greater clarity on actions you've taken in Anytype, we've introduced toast notifications for certain operations such as linking between Objects or installing new Types and Relations.`),
	bullet(`<b>Link blocks in text mode previews</b><br/>It's now possible to further customize how linked Objects in text mode appear in your editor. Click the orange handle next to the link block and choose Preview to play around with Description, Type, and/or Content in your Object preview.`),
	bullet(`<b>Set view is now updated when view settings menu is closed</b>`),

	h2(`🐛 Bug Fixes`),
	bullet(`Fixed: &quot;Edit URL Link&quot; modal window no longer jumps to top left corner. Thanks @gdbb!`),
	bullet(`Fixed: &quot;Create new Tag&quot; option now disappears once a Tag has been selected from dropdown. Thanks @sambouwer!`),
	bullet(`Fixed: Copy/paste in relation editing component is now working`),
	bullet(`Fixed: Drag'n'drop in Kanban is now updating to the correct position in the group`),
	bullet(`Fixed: ${hl(`${cmd} + Return`)} to navigate to homescreen now works correctly. Thanks @dzlg!`),
	bullet(`Fixed: Hitting Tab from a simple table cell no longer skips a column. Thanks @Flip!`),
	bullet(`Fixed: Time selector now handles timezones properly. Thanks @u74a8!`),
	bullet(`Fixed: App updates are no longer possible when pin-code is locked. Thanks @sambouwer!`),
	bullet(`Fixed: New selection marquee no longer draws in corner on click. Thanks @Erindale!`),
	bullet(`Fixed: Closing Anytype on Mac while in fullscreen mode no longer causes an error. Thanks @ShukantP!`),
	bullet(`Fixed: Menu no longer closes when clicking/hovering on &quot; Select Relation Type&quot;  while creating new Relations. Thanks @kerbless!`),
	bullet(`Fixed: Search is no longer accessible from the tray menu when pin-code is locked. Thanks @sambouwer!`),
	bullet(`Fixed: LaTex blocks now close correctly when clicking on another LaTex block. Thanks @Karthik!`),
	bullet(`Fixed: Forward navigation button is now working properly. Thanks @gdbb!`),
	bullet(`Fixed: Global search hotkey is now working correctly when search results are in focus. Thanks @Flip!`),
	bullet(`Fixed: Using the keyboard to create an Object, then typing without clicking somewhere no longer edits the title of the parent Object. Thanks @Flip!`),
	bullet(`Fixed: Search menu is now working correctly when coming back from another app using ${hl(`${cmd} + Tab`)}. Thanks @dzlg!`),
	bullet(`Fixed: Dividing grey line between columns no longer disappears on hover. Thanks @nikm07!`),
	bullet(`Fixed: Search bar now works when navigation window is open. Thanks @dzlg!`),
	bullet(`Fixed: Side mouse button now allows navigation in Settings window. Thanks @Poto!`),
	bullet(`Fixed: Exact date filters in Sets are now working properly`),
	bullet(`Fixed: Header no longer disappears when scrolling while an Object is opened in modal view. Thanks @gdbb!`),
	bullet(`Fixed: Using the Del key to merge content between blocks now works consistently. Thanks @Flip!`),

	div(),
	// --------------------------------------------//

	h1(`September: Preparation and Polish 💅`),

	text(`Throughout September, our backend and platform teams have been occupied with refactoring relations aka the &quot; Relations as an Object' project. This effort, though not visible in this month's release, is essential to unblocking long-awaited features such as Relations deletion/modification and in-line Sets (we promise, it's coming!).`),
	text(`Meanwhile, the improvements and bug fixes in this release are primarily geared towards editor polishing and responses to your feedback from our last release. Thanks to everyone who's tested new features, created bug reports, and let us know your concerns.`),

	h2(`💎 Highlights of this Release`),
	text(`We know that a clean interface is essential to productivity for many of you. In this release, we simplified our Type selection interface from + button Object creation flow to reduce friction in quickly capturing your thoughts &amp; ideas. Keyboard arrows or ${hl(`${cmd} + 1-4`)} will allow you to quickly navigate between the Types or jump directly to the search menu for your Types.`),

	h2(`⚡ Quality-of-Life Improvements`),
	bullet(`Relations now updating automatically using drag &amp; drop between columns from Kanban view`),
	video('./img/help/kanban-dnd.mp4'),
	bullet(`Selection frame when selecting block is now visible`),
	img('./img/help/selection.png', 'full screen'),
	bullet(`When scrolling content of page opened inside popups, menus positions are now correctly updated`),
	bullet(`Added page overscrolling for better readability, so content now ends in the middle of the screen rather than the bottom`),
	bullet(`Added multilingual spellcheck support`),
	img('./img/help/multi-lang.png', 'half screen'),
	bullet(`Updated in-page search design to include number of matching results and scrolling`),
	img('./img/help/search.png', 'half screen'),
	bullet(`Updated toggle block design so toggles are default open when applying block style changes`),
	bullet(`Added possibility to open new windows from search interface when pressing ${hl(`${cmd} + Enter`)}`),
	bullet(`Simplified type-selection interface from + button Object creation flow to reduce friction in quick capture of thoughts &amp; ideas`),
	video('./img/help/type-selection.mp4'),
	bullet(`Export settings are now saved from one export to another`),
	bullet(`In-app survey and logic was re-worked to reduce frequency and increase relevance towards new users, veteran users, and exiting users`),
	bullet(`New windows now open by default with a slight position shift so your windows aren't stacked on top of each other`),
	bullet(`File names created from the web are now more pretty`),
	bullet(`Added table support when exporting to markdown`),
	bullet(`Added document name to window title for better navigation between open windows`),
	bullet(`Removed automatic sidebar-hiding when window is too small`),

	h2(`💻 Tech`),
	bullet(`Electron was updated to 20.1.1`),

	h2(`🐛 Bug Fixes`),
	
	bullet(`Fixed: Set column width is now working again. Thanks, <a href="https://community.anytype.io/t/i-cant-adjust-the-width-of-the-graph/7327/5">@Konstantin</a>`),
	bullet(`Fixed: Bug that was causing two relations in one direction to overlay in graph view. Thanks, <a href="https://community.anytype.io/t/superimposing-the-text-of-two-relationship-names/7329">@Konstantin</a>`),
	bullet(`Fixed: Block focus loss after block link creation. Thanks, <a href="https://community.anytype.io/t/all-blocks-should-get-focus-after-creation/5776">@sambouwer</a>`),
	bullet(`Fixed: Top toolbar button was missing in fullscreen mode. Thanks, <a href="https://community.anytype.io/t/top-toolbar-button-missing-in-full-screen-mode-in-ubuntu">@Aleph1</a>`),
	bullet(`Fixed: Date selector was setting incorrect dates. Thanks, <a href="https://community.anytype.io/t/names-of-days-on-date-picker-incorrect-off-by-one-day/7289">@dannyg</a>`),
	bullet(`Fixed: Shortcuts to duplicate and delete blocks are now working. Thanks, <a href="https://community.anytype.io/t/shortcuts-dont-work-when-block-menu-is-open/4480">@david</a>`),
	bullet(`Fixed: Ability to open new windows with ${hl(`${cmd} + Click`)} is now restored in all cases`),
	bullet(`Fixed: Zoom-in window action hotkey was updated to ${hl(`${cmd} + =`)} to work correctly on Windows. Thanks, <a href="https://community.anytype.io/t/after-update-0-28-0-it-is-not-possible-to-enlarge-text-by-ctrl-also-contains-suggestions/7341/4">@akta</a>`),
	bullet(`Fixed: Relation creation flow for Relation-type: Object was not working after the previous release. Thanks, <a href="https://community.anytype.io/t/object-relation-is-broken-after-the-0-28-update/7381">@dzlg</a>`),
	bullet(`Fixed: Pasting images from clipboard is now working again`),
	bullet(`Fixed: Emojis are now correctly pasted when copied from outside of Anytype`),
	bullet(`Fixed: Underline paste support`),
	bullet(`Fixed: Link blocks are now correctly removed when using ${hl(`${cmd} + X`)} command`),
	bullet(`Updated: Markdown is now being parsed automatically on paste`),
	bullet(`Fixed: Export with ${hl(`Include Files`)} flag toggled on, no longer creates files directory`),
	bullet(`Removed: An ability to create new page title blocks in certain situations`),

	div(),
	// --------------------------------------------//

	h1(`Your Workflows Just Got a Major Upgrade!`),
	text(`Hey, Anytypers!`),
	text(`We just couldn't let August go by without another monster release. Hold on tight, 'cause this one's packed with updates that we hope will make your workflows all the more enjoyable`),

	text(`Here's what you can look forward to with this release:`),

	h2(`💎 Highlights of this Release`),

	text(`Kanban: Task management just got way easier with Kanban views for Sets. In this first iteration, you can group your Objects according to Relations: Status, Tag, or Checkbox. Dragging Objects between columns will automatically update the Relations`),
	video('./img/help/kanban.mp4'),
	text(`Multi-window display: By simply holding ${hl(`${cmd}`)} and clicking on any Object in your workspace, you can now open it in a new window. Even better, drag and drop blocks between windows for some seriously efficient workflows`),
	img('./img/help/multi-window.png', 'full'),
	text(`Spellcheck: Your dreams of typo-free note taking just came true. Choose your input language by heading to ${hl(`Settings > Personalization > Spellcheck language`)} and - depending on your typing accuracy - get ready to see some corrections`),
	img('./img/help/spellcheck.png', 'full'),

	h2(`🚀 Quality-of-life Improvements:`),
	bullet(`Previously-uploaded images now saved in Image Library: When selecting Object covers you can now choose from a library of any images you have uploaded to your workspace`),
	bullet(`Delete block shortcut added: Simply press Backspace with your block menu open (orange three-dots menu), and you'll delete the whole block`),
	bullet(`Copy Recovery Phrase button added to Settings: To reduce the number of lost recovery phrases, we introduced buttons in our Recovery Phrase and Logout screens to show and automatically copy your phrase`),
	bullet(`'What's New' window optimization: For faster performance, the 'Whats New' window was optimized and now shows the previous three releases. Older releases can be viewed by clicking the ${hl(`Older Releases`)} button at the bottom of the window`),
	bullet(`Settings keyboard navigation introduced: Navigate back in Settings using keystrokes ${hl(`${cmd} + \[`)} or ${hl(`Alt + arrow left`)}`),
	bullet(`Emoji group icons introduced: Search for emojis more quickly using the group icons at the bottom of the emoji picker`),
	bullet(`Emoji skin tones added: Right-click emojis from the picker to change the skin tone`),
	bullet(`Zoom-in/Zoom-out now possible: Not just for Object view, but any open window. ${hl(`${cmd} +`)} for zoom-in, ${hl(`${cmd} -`)} for zoom-out and ${hl(`${cmd}+0`)} to restore zoom`),
	bullet(`View creation process in Sets has been updated to include 'Duplicate' and 'Remove' views`),
	bullet(`Context menu when pasting URLs updated: A more user-friendly context menu includes options to ${hl(`Create bookmark`)}, ${hl(`Paste as Link`)}, or ${hl(`Paste as Text`)}`),
	bullet(`Button to create new Objects from Set view has an updated design clearer workflows`),
	bullet(`Bookmark Objects are now fully editable: Open bookmarks option to reload bookmark from source was moved in Object menu`),
	bullet(`Linking to bookmark Objects now creates Bookmark blocks rather than Link blocks`),
	bullet(`Application size is now 250MB less when unpacked`),
	bullet(`Image preview modal window has been re-introduced`),
	bullet(`History tab on dashboard and sidebar is now changed to 'Recent' and sorts Objects by last modified (rather than last opened) date`),
	bullet(`Pin-code prompt window now correctly restores focus when application window is focused`),
	bullet(`Shortcut added for underline markup: ${hl(`${cmd} + U`)}`),
	bullet(`Dragging blocks with pressed ${hl(`Alt`)} now duplicates them on drop`),

	h2(`🔐 Security`),
	bullet(`Electron part of the app was completely re-written, resulting in huge security improvements and Electron was updated to 20.0.2 from 19.0.7`),
	bullet(`Libp2p upgrade`),

	h2(`🐛 Bug Fixes`),
	bullet(`Fixed: Objects can no longer be glimpsed before entering pin-code`),
	bullet(`Fixed: Block links are now opening correctly from modal window`),
	bullet(`Removed: Onboarding video popup was causing application crashes for new users`),
	bullet(`Removed: Update progress bar from print version of Objects`),
	bullet(`Fixed: Bug that was preventing ${hl(`Shift + Space`)} combination from working`),
	bullet(`Removed: Temporary files that were saved in .tmp folder inside application data, when pasting media or exporting files in external applications`),
	bullet(`Fixed: Number-of-days filter in Sets no longer prevents value removal`),
	bullet(`Fixed: Simple tables within columns are now being resized correctly`),
	bullet(`Fixed: Tab key while editing simple tables is no longer causing the cursor to jump two cells`),

	div(),
	// --------------------------------------------//

	h1(`Happy August, Anytypers!`),
	text(`Over the past weeks our team has been busy with both process and product updates. From now on, you can expect a cross-platform release every four weeks.`),
	text(`We'll continue publishing Desktop release notes here; meanwhile, you'll be able to find the full release notes for every platform in the News &amp; Announcements section of our Community Forums.`),
	text(`Without further ado, here's what we've cooked up for you in this release:`),

	h2(`💎 Highlights of this Release`),
	text(`Simple tables are here! As one of our most popular feature requests, we're so excited to introduce simple tables across all platforms. From the editor, simply type ${hl(`/table`)} and customize the number of cells, column widths, and background colors to your liking. You can use shortcut ${hl(`/table{x}-{y}`)} to create table with ${hl(`X`)} rows and ${hl(`Y`)} columns as well.`),
	video('./img/help/table.mp4'),
	text(`Bookmarks as Objects: To help keep track of links you've bookmarked around the web, you can now create Sets with Type: Bookmark, so you can view and sort them all in one place. Say goodbye to lost links forever!`),
	img('./img/help/bookmark.png', 'full'),
	text(`New ${hl(`Getting Started`)} Objects (New Users only): Upon registration, new users will see an updated ${hl(`Get Started`)} page and ${hl(`Advanced`)} page, with concise explanations of core concepts and a set of bookmarked demo videos for typical use cases.`),
	text(`For everyone else who's interested in honing your Anytype superpowers, check out our demo videos and let us know what other kind of content or use cases you'd like to see!`),

	h2(`🚀 Features &amp; Enhancements`),
	bullet(`Text underline: The underline option is here. Underline away, friends!`),
	bullet(`Callout blocks: By using ${hl(`/callout`)} in our editor, you can now create Callout Blocks as a way to highlight specific bits of information, like this:`),
	img('./img/help/callout.png', 'full'),

	h2(`⚡ Quality-of-Life Improvements`),
	bullet(`Text letter spacings were corrected for improved readability`),
	bullet(`Link styles have been updated and the double squircle icons next to text links have been removed`),
	bullet(`Code blocks now have a ${hl(`copy`)} button in the interface`),
	bullet(`Sidebar and editor got a technical update, and now work a bit faster`),
	bullet(`Recovery phrase and QR code are now not only blurred, but replaced with a substitute for security purposes`),
	bullet(`The preload screen has a new Anytype icon and logo`),
	bullet(`Mentions and link menus were modified`),
	bullet(`Dates everywhere in the app were changed to work in local timezones, including filters in Sets`),
	bullet(`Menus like mention or search (which load a list of Objects) now load page-by-page, for performance optimization`),
	bullet(`Author was removed from featured Relations by default`),

	h2(`🐛 Bug Fixes`),
	bullet(`Fixed a bug that was causing Anytype to crash during startup with a Javascript error`),
	bullet(`Fixed a bug that was allowing the Type selection interface to reappear after the Type had been selected`),
	bullet(`Fixed a bug that was allowing pasting in locked Pages`),
	bullet(`Fixed a bug that was preventing Object restoration from Version History`),
	bullet(`Fixed a bug which prevented horizontal scroll in unwrapped code blocks`),
	bullet(`Alphabetical sort of Types in the Library has been corrected`),
	bullet(`Removed circular references in the sidebar`),
	bullet(`Dragging blocks to the sidebar is now working for normal Objects`),
	bullet(`Fixed ability to change source in Sets after creation`),
	bullet(`Fixed a scroll problem when navigating Objects with ${hl(`${cmd}+Arrow up/down`)}`),
	bullet(`Removed the ability to copy/paste the title of a page as a title block`),

	div(),
	// --------------------------------------------//

	h1(`13 June 2022 Desktop`),

	h2(`Highlights of this release include:`),
	bullet(`Users can now permanently delete their Anytype account, including objects stored on the backup node 🗑️`),
	bullet(`Relative values for date filters 📅`),
	bullet(`A shiny new app icon! 💅🏻`),

	h2(`Features`),
	bullet(`Permanently erase your Anytype account, recovery phrase, and objects stored on the backup node. This is irreversible, and we cannot help you recover your data. You will have 30 days to change your mind.`),
	bullet(`Highlight block now changes style to paragraph when pressing backspace in empty block, like lists`),
	bullet(`Objects in ${hl(`move to menu`)} are now being sorted by last edited date`),
	bullet(`Ability to drag-and-drop blocks directly to the sidebar`),
	bullet(`Date filters in Sets received support for relative values`),
	bullet(`Show featured relation star by default in the relations panel`),
	bullet(`An updated app icon`),

	h2(`Bugs`),
	bullet(`Drop into columns was reworked and now works more consistently`),
	bullet(`Sets sometimes were resizing incorrectly when making changes`),
	bullet(`Chinese input methods when editing title or description in pages like Object Type or Set was fixed`),
	bullet(`Incorrect search order of options when searching for some languages in code block`),
	bullet(`Inability to delete selected blocks that have nested children`),

	div(),
	// --------------------------------------------//

	h2(`27 April 2022 Desktop`),
	text(`Hello everyone! After a short Easter break, we're back with some exciting updates.`),
	text(`This version of Anytype doubles-down on productivity, making it easier for you to work with multiple objects at once. 🔑 Key to this update is the ability to now delete several objects from a Set. You can learn more about how this works below. 👇`),

	h2(`Multi-select in Sets`),
	{ text: `We've brought multi-object selection to Sets! You can now perform bulk actions such as ${hl(`Duplicate`)}, ${hl(`Add to Favorites`)}, or ${hl(`Move to Bin`)}. Previously, it was challenging to work with several objects within a Set; now, you can manage them all with a single click.` },
	text(`It also works with the keyboard. Selecting with Shift and then pressing Delete will move them all to the Bin.`),

	h2(`Ludicrous-mode for Relations`),
	text(`Organizing, filtering, and focusing on certain objects just became faster with our new Relations menu.`),
	text(`By clicking the column name in Grid View, you can now directly sort and filter your objects according to the chosen relation. Moreover, with the new menu you can create and insert relations anywhere within a Set, allowing for greater flexibility.`),
	video('./img/help/relation-menu.mp4'),
	text(`We hope these improvements unlock many new and novel use-cases for Anytype, and help our power-users all the more powerful. 🦸`),

	h2(`Other notable improvements`),
	bullet(`Anytype's dark and light mode can now sync with your OS. Check it out by navigating to Settings → Appearance → System.`),
	bullet(`New link appearance. Links have been re-designed with more balance between text content and images.`),
	bullet(`Sort your Sets by A - Z in the sidebar. Thanks, <a href="https://community.anytype.io/t/sidebar-sort-options/4999">hysci</a>`),
	bullet(`We've added an onboarding video for first-time users, check it out in our <a href="https://doc.anytype.io/d/">docs</a>.`),
	bullet(`Library now works in modal view. You can write a poem and change the template simultaneously.`),
	bullet(`Blocks will now be highlighted after drag'n'drop, allowing you to keep better track of content that's been moved.`),
	bullet(`We restructured our keyboard shortcuts pane for clarity.`),

	h2(`Bugs`),
	bullet(`App failed to add new options to status relation. Thanks, <a href="https://community.anytype.io/t/cant-define-options-for-status-type-relations/5857">Ragnen and Cernel1337</a>`),
	bullet(`Applying background colour to existing text resulted in duplicated letters. Thank you, <a href="https://community.anytype.io/t/applying-background-color-to-existing-text-results-in-duplicated-letters/5047">dddmggg</a>`),
	bullet(`Selected blocks had blurred text and icons`),
	bullet(`Choosing a random emoji closed the menu instantly`),
	bullet(`Long relation names broke the layout of Relation page`),

	div(),
	// --------------------------------------------//

	h1(`13 April 2022 Desktop`),
	h2(`An (un)splash of colour`),
	text(`Spring has sprung for the Anyteam, and it's only natural to want a fresh coat of paint on our objects. This update comes packed with fixes for many bugs first reported by our intrepid alpha testers. `),
	text(`We've also added some serious quality-of-life updates, allowing you to further customize your objects with the whole Unsplash library, faster ways to work with tags, and share individual objects as markdown files.`),
	text(`Thanks for your continued support and feedback. We could not build Anytype without you.`),

	h2(`New features`),

	h3(`Unsplash`),
	text(`A huge Unsplash library is now available for setting into cover images. You can take popular or search particular just inside Anytype. Thank you, wemiprog for the <a href="https://community.anytype.io/t/image-cover-normal-support-for-online-library-like-unsplash/990">suggestion</a>.`),

	h3(`Rework of tag and object relation interfaces`),
	text(`You can now create and search values inside the cell. It's much faster than the previously used filter. Thanks, flip, it works as you <a href="https://community.anytype.io/t/improve-process-of-adding-editing-removing-tags/1578">proposed</a>.`),

	h3(`Single object export`),
	{ text: `Certain objects' export is now available. For objects with many links, you can check ${hl(`include linked objects`)} and get them all into a Zip archive. This feature is accessible in the object's menu. All .md files have readable names, export respects list indentations, and has LaTeX links. Thank you, Dr_Clairvoyant for <a href="https://community.anytype.io/t/export-one-single-file-to-different-formats/4041">your proposal</a>, roncz, and hilawi for the <a href="https://community.anytype.io/t/readable-file-names-when-exporting/1378/4!">reports</a>.` },

	h3(`Other notable improvements and fixes`),
	bullet(`Major restructuring of the Settings menu. It now has panels for your account and data, personalization, and appearance. You can also set on / off to a new option ${hl(`automatically hide and show sidebar`)}.`),
	bullet(`${hl(`Object`)} relation type is now the first option in ${hl(`create from scratch`)} menu.`),

	h2(`Bugs`),
	bullet(`App did not allow some users to create new objects. Thanks for your help, alzibaba.`),
	bullet(`Search pop-up location glitch. The search pop-up lost its position after moving and scrolling on the page. Thanks, <a href="https://community.anytype.io/t/search-popup-location-glitch/4976">kEbZeCK</a>.`),
	bullet(`HTML tags were activating in search results. Thank you, <a href="https://community.anytype.io/t/html-tags-are-supported-in-search/4986">Evan</a>.`),
	bullet(`The sidebar resizing indicator appeared even when the Sidebar is hidden. Thanks, <a href="https://community.anytype.io/t/sidebar-resizing-indicator-appears-when-the-sidebar-is-collapsed/4983">Ayne Hancer</a>.`),
	bullet(`Sidebar shadow remained visible when collapsed. Other thanks go to <a href="https://community.anytype.io/t/sidebar-shadow-remains-visible-when-collapsed/5003">Ayne Hancer</a>.`),
	bullet(`Selecting some words in the emoji icon filter also selected the object title. Thank you, <a href="https://community.anytype.io/t/icon-search-selection-selects-the-object-title/5007">floseq</a>.`),
	bullet(`Pressing the Delete key in the first position of a block just "combined" blocks. It should delete the first char of the block. Thanks, <a href="https://community.anytype.io/t/pressing-del-key-in-first-position-of-block-is-combining-blocks/5019">kEbZeCK</a>.`),
	bullet(`Sometimes, automatically, ${hl(`hide and show`)} sidebar logic would get stuck on showing. It now works with more reliable logic.`),
	bullet(`Sidebar with 100% width content. When the object content has 100% width and using the sidebar, the content is temporarily set to another width after closing the sidebar. Thanks, <a href="https://community.anytype.io/t/sidebar-with-100-width-content/4980">kEbZeCK</a>.`),
	bullet(`I would appreciate it if the sidebar's hover animations could be consistent with similar animations throughout Anytype. We also think so! Thank you, <a href="https://community.anytype.io/t/sidebar-consistent-hover-animations/5023">Sahilstudio</a>.`),
	bullet(`App will show more concrete errors if something goes wrong during adding the invite code.`),
	bullet(`Applying background colour to existing text results in duplicated letters. When you use a backslash command to change the background colour of a line of text containing an object reference, the first letter of the object's name is duplicated. Thank you, <a href="https://community.anytype.io/t/applying-background-color-to-existing-text-results-in-duplicated-letters/5047">dddmggg</a>.`),
	bullet(`Cannot access menu when creating relation. On the relations page, when adding a new relation and the page is long, the menu runs off the screen, and I am unable to select "create". Thank you, <a href="https://community.anytype.io/t/cannot-access-menu-when-creating-relation/4852">dddmggg</a>.`),
	bullet(`Files dragged over Anytype result in endless scroll. When a file is dragged over Anytype (specifically one of the program's edges) but not let go, Anytype begins scrolling. Thanks, <a href="https://community.anytype.io/t/files-dragged-over-anytype-result-in-endless-scroll">sahilstudio</a>.`),
	bullet(`Clipboard. The insertion of blocks with style (checkbox, number, etc) did not work properly if one block was already selected.`),

	div(),
	// --------------------------------------------//

	h1(`23 February 2022 Desktop`),
	h2(`Sidebar, finally`),
	text(`Our #1 feature request since the beginning of the alpha program is here.`),
	text(`The tree-view sidebar shows outbound links and relations for each object, complementing the bi-directional navigation pane. It includes new icons to help you distinguish between Sets and regular objects, with toggles when deeper navigation is available. It can be fixed to the side or automatically hidden for distraction-free writing. The sidebar has the same sections (Sets, Favourites, Drafts etc.) as Home.`),
	text(`Here are some handy features that you might like:`),

	bullet(`You can resize the width of the sidebar.`),
	bullet(`Right-click on an object will trigger the action menu: favourite, duplicate, move to the bin.`),
	bullet(`You can move your sidebar to the right side of your screen by clicking and dragging it across.`),
	bullet(`You can disable auto-hide and show mode for sidebar in ${hl(`Settings`)} → ${hl(`Other`)}`),

	text(`This is our very first sidebar, but there's more to come! We are going to release new improved Sidebar versions soon!`),

	h2(`Search`),
	text(`The first rule of search is showing relevant results, and it's becoming an essential feature for many of you who have hundreds of objects inside. We've implemented many changes and updates, which we hope will radically improve your search experience.`),
	bullet(`Better matches. You can make one spelling mistake in the Title and zero in the object's blocks. Before, we had two and one, respectively, which resulted in messy and irrelevant results. As an example, we showed ${hl(`Space`)} for search for a ${hl(`Page`)}.`),
	bullet(`It will work by crossing results. Before we summed up the results and searching for ${hl(`word abracadabra`)} returned ${hl(`word`)} matches.`),
	bullet(`Search with a partially written title will always show a match. The ${hl(`In`)} will show ${hl(`The Infernal Device`)}. Thanks, <a href="https://community.anytype.io/t/global-search-does-find-content-only-when-word-is-nearly-fully-typed/1610/4">kEbZeCK</a>`),
	bullet(`You can also find objects with prepositions, definite articles like ${hl(`the`)}, ${hl(`in`)}, ${hl(`me`)}, ${hl(`our`)}... etc., in the Title. Anytype will ignore matches in the blocks.`),
	bullet(`Better indexing for Notes object-type. The document's first line is treated like the Title of another type.`),
	bullet(`Deleted objects are no longer in the search index. They were breaking results.`),
	bullet(`You can find modified objects' content immediately. Before, it could take a minute to re-index, and they weren't present in search results.`),
	bullet(`${hl(`C#`)} programming language and A*  search algorithm also can be found. The search was ignoring such symbols before. Thanks for finding this, <a href="https://community.anytype.io/t/certain-pages-are-impossible-to-search-for-or-link-to/1352">triangles</a> 🕵️`),

	h2(`New features`),
	bullet(`Anytype will instantly apply changes on iOS or Android for opened Set, Sidebar, and Home Tabs. There is no need to re-open them to see new objects; they will load on the fly.`),
	bullet(`We changed the interface for the object's cover. It now has a new tab to drop an image and will stop adding images randomly.`),
	bullet(`Table of contents block. Write ${hl(`/tc`)} to add generated links to all headers in the object.`),
	bullet(`Locked pages. You can lock your objects to prevent accidental editing and enable read-only mode for all devices.`),
	bullet(`Right-click on the row in Set will show the actions menu. Just like the sidebar!`),

	h2(`Other notable improvements and fixes`),
	bullet(`Set changed 'Object type' back from 'Task' to my type (self-created type) after restarting the app. And the Views for that Set were gone then. Thanks, <a href="https://community.anytype.io/t/set-changes-object-type-back-after-restart">turquiseblue</a>`),
	bullet(`Formatting issues could happen when pasting text into the Title of Toggle. Thanks, <a href="https://community.anytype.io/d/1007-formatting-issues-when-pasting-text-into-title-of-toggle/1">sahilstudio</a>`),
	bullet(`Low-Resolution Taskbar Icon in Windows. Thanks, <a href="https://community.anytype.io/d/762-low-resolution-taskbar-icon/1">Pretzel</a>`),
	bullet(`One more fix for Anytype re-opening after getting into the system tray in Windows. Closing the app may didn't end the process. Thanks, <a href="https://community.anytype.io/t/after-closing-anytype-not-open-again/4204 and sambouwer https://community.anytype.io/t/closing-the-app-only-hides-the-foreground-app/2889/6">asterixix</a>`),
	bullet(`Drag-n-drop. The nested structure cannot be moved just under a nested structure. There was a possibility to drop in under, but not inside.`),
	bullet(`Drag-n-drop. Drop into the block with nested block into the first place resulted with positioning latest.`),
	bullet(`Adding / as a symbol in text with URL link moved it further.`),
	bullet(`Changing the width of object layout could lead to inconsistent block's image resize`),
	bullet(`The Changelog window showed up before an update. Thanks, <a href="https://community.anytype.io/t/changelog-pops-up-before-update-but-not-after">kEbZeCK</a>`),
	bullet(`Pop-up window to select a cover stayed on the screen even after navigation to another page/object. Thanks, <a href="https://community.anytype.io/t/cover-selection-stays-on-screen/4373">edwin</a>`),
	bullet(`Pressing ${hl(`${cmd}+Z`)} after changing object type could lead it not to revert.`),
	bullet(`The description block in the featured relations section will only come if set in Template.`),
	bullet(`Print missed part of the text coming under page brakes.`),
	bullet(`The slash command completion sometimes sorts (and therefore completes when pressing enter) types that only contain the searched word in a description over types that have the searched word as their Title. Thanks, <a href="https://community.anytype.io/t/slash-command-completion-in-wrong-order">minion</a>`),
	bullet(`LaTeX jumped back to the start if you typed a command correctly. Thanks, <a href="https://community.anytype.io/t/latex-jumps-back-to-the-start-if-you-type-a-command-correctly">Skyler</a>`),
	bullet(`Loading spinner for new profile picture was misaligned. Thanks, <a href="https://community.anytype.io/t/loading-spinner-for-new-profile-picture-misaligned">Sam</a>`),
	bullet(`If you type ${hl(`\\`)} and press Enter, the carriage jumps to the beginning of the LaTeX Block. Thanks, <a href="https://community.anytype.io/t/isnt-recognized-as-a-symbol-and-pressing-enter">nopapi</a>`),
	bullet(`The ${hl(`\\`)} command in LaTeX makes a newline. This command wasn't included in the LaTeX autocomplete menu. Thanks, <a href="https://community.anytype.io/t/double-backslash-command-missing-from-latex-autocomplete">Skyler</a>`),
	bullet(`After creating a new block and using ${hl(`${cmd}+Shift+Arrow`)} to move it, the text just typed could become deleted. Thanks, <a href="https://community.anytype.io/t/moving-a-newly-created-block-deletes-text/4642">QuantumJump</a>`),
	bullet(`When hitting ${hl(`Ctrl+Alt+O`)} to open Graph view on Windows with a UK keyboard, with a textbox selected, Anytype typed a ó key. Thanks, <a href="https://community.anytype.io/t/opening-graph-view-types-o/4627">QuantumJump</a>`),
	bullet(`Sometimes two blocks weren't separated. Thanks, <a href="https://community.anytype.io/t/blocks-merge-together-bug">XxxBalCion</a>`),
	bullet(`${hl(`${cmd}+Click`)} on the empty part of the Link to object block open it instead of selecting.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 19 January, 2022`),
	h2(`Enhancements`),
	bullet(`Cache DNS requests on the application level. We decided to implement caching on our side because not all OS (like Linux Ubuntu for example) provide for such a thing. Thanks, <a href="https://community.anytype.io/t/excessive-network-activity-dns-requests/3374/13">_flo, kEbZeCK</a>`),
	bullet(`--> conversion to arrow → now works in description and title. Thanks, <a href="https://community.anytype.io/t/conversion-to-arrow-doesnt-work-in-description">kEbZeCK</a>`),
	bullet(`Double dash -- now converts to a long dash`),
	bullet(`Relation number is now separated with spaces by SI/ISO 31-0 standard`),
	h2(`Bugs`),
	bullet(`Images and files got broken and stopped showing in some cases. Thanks, <a href="https://community.anytype.io/t/images-got-broken-relation-value-lost">mkoechli, Tanzeel098, JGsource, GooRusa, lynxlove, edwards</a>, <a href="https://community.anytype.io/t/failed-to-load-pdf-file/4173">sebro, tempapy</a>`),
	bullet(`All orphaned objects were rendered too close to an opened object in Graph. Now they are next to the left`),
	bullet(`Backspace deleted all letters in spelling Chinese characters. Thanks, <a href="https://community.anytype.io/t/backspace-will-delete-all-letters-in-spelling-chinese-characters">simon shi</a>`),
	bullet(`After creating a non-text type block, pressing Enter didn't create a new empty block below`),
	bullet(`LaTeX command autofill inserted the wrong command. Thanks, <a href="https://community.anytype.io/t/latex-command-autofill-inserts-the-wrong-command">Skyler</a>`),
	bullet(`The autocomplete box sometimes appeared behind the popup box of the note. Thanks, <a href="https://community.anytype.io/t/inline-link-autocomplete-shows-behind-the-pop-up-page-on-empty-lines">utau0324</a>`),
	bullet(`Windows. After closing Anytype, it could not be opened again. Thanks, <a href="https://community.anytype.io/t/failed-to-load-pdf-file/4173">sebro</a>`),
	bullet(`The cell height could change and the document could "jump" after opening new PDF pages in embed mode`),
	bullet(`When embedded, a PDF file could cause significant lag in Anytype's UI and incorrectly render. Thanks, <a href="https://community.anytype.io/t/when-embedded-a-pdf-file-from-goodnotes-5-causes-significant-lag-in-anytypes-ui-and-is-incorrectly-rendered">edwards</a>`),
	bullet(`After setting the date, you needed to re-enter the cell and see the updated value`),
	bullet(`Ctrl+A in the search bar resulted in selecting all in the background. Thanks, <a href="https://community.anytype.io/t/ctrl-a-in-search-bar-results-in-select-all-in-background">kEbZeCK</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 13 January, 2021`),
	h2(`Happy New Year`),
	text(`In 2022 we will open Anytype to even more users, allowing everyone to experience our new metaphor for computing. This milestone is, in no small part, thanks to your incredible feedback. Thank you for a tremendous 2021, and we look forward to building Anytype with you in 2022.`),

	h2(`Tooltips`),
	text(`We've added some simple tooltips in the UI to help new users get started with Anytype, allowing for a more effortless onboarding experience. Click <img class="icon" src="./img/icon/help.svg" /> → "Show Hints" to go through onboarding at any time.`),

	h2(`Features`),
	bullet(`You can limit relation Object to certain object types. Create new relation from scratch -> Choose “Object” -> Select types from the list. Thanks, <a href="https://community.anytype.io/t/specify-which-objects-to-display-and-make-selectable-for-a-given-relation/1622">@daanl, @qualquertipo</a> and <a href="https://community.anytype.io/t/ability-to-limit-the-scope-of-a-relation/1553">@lynxlove</a>`),
	bullet(`Anytype now runs natively on Apple Silicon, providing better performance to our users with M1 processors. You'll need to download and install the app from scratch from <a href="https://download.anytype.io/">download.anytype.io</a> to start your 🔥🔥🔥Anytype experience.`),
	bullet(`You can now embed PDF files and see their content right on the canvas. You can write /PDF or open file block menu -> Appearance -> “Show as embed."`),
	bullet(`The new "Get Started" object appears for new users in Favourites by default.`),

	h2(`Bugs`),
	bullet(`Sometimes clicking from one view to another, the UI was cycling between the two views forever.`),
	bullet(`Improvements in object creating which sometimes took too much time`),
	bullet(`Export to markdown did not include files. Thanks, <a href="https://community.anytype.io/t/export-didnot-contatin-image-and-object-type/4000">@hasenrain</a>`),
	bullet(`When pressing close (x), the window went into the system tray instead of quitting. Thanks, <a href="https://community.anytype.io/t/minimize-to-system-tray/1383">@Fantail</a>`),
	bullet(`Tag relation in a Set doesn't update the name from tag sets.`),
	bullet(`Layout issues when no results are found in the search bar. Thanks, <a href="https://community.anytype.io/t/missing-spacing-when-no-results-in-search/3908">@kEbZeCK</a>`),
	bullet(`When using a relation with the relation type Status, the default colour of objects was invisible in dark mode. Thanks, <a href="https://community.anytype.io/t/default-color-on-statuses-in-dark-mode/4033">@Cernel1337</a>`),
	bullet(`When a page is open, and the cursor is in-line, opening the search modal and pressing enter to select a search result, a line break is inserted on the canvas. Thanks, <a href="https://community.anytype.io/t/selecting-search-result-inserts-new-line-in-currently-open-object/4051">@kEbZeCK</a>`),
	bullet(`While you open the object as a modal, the object's content behind the modal is selectable and removable. Thanks, <a href="https://community.anytype.io/t/typed-text-after-pasted-link-non-bookmark-becomes-part-of-link/4078">@sebro</a>`),
	bullet(`The text typed after pasted a link became part of the link. Thanks, <a href="https://community.anytype.io/t/typed-text-after-pasted-link-non-bookmark-becomes-part-of-link/4078">@Corbin</a>`),
	bullet(`If there is no navigation history inside the modal view, you can close it by pressing "back"`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 15 December, 2021`),
	text(`Happy holidays to everyone in our alpha program`),
	text(`We've had 17 incredible months of feedback from our brilliant community. You've voted more than 7,000 times on bugs and feature requests, and we are so happy to be building Anytype with you.`),
	text(`Thank you for being part of the alpha program. We can't wait to build 2022 with you.`),

	h2(`Features`),
	bullet(`You can now remove local media files from your current device. They can be downloaded again from the backup node or another device. `),
	bullet(`To remove local media files, you can select Clear cache in Settings → Other settings. `),
	bullet(`You can now drag and drop relations from the relations panel into the canvas. `),

	h2(`Performance`),
	bullet(`We fixed a few seconds delay when pressing Enter or Backspace inside text blocks. <a href="https://community.anytype.io/d/334-delay-to-start-a-new-block-after-hitting-enter/1">Thanks, HLucas, vincer, wemiprog, lynxlove, JGsource</a>`),
	bullet(`Optimisations to reduce the wait from starting Anytype to reaching the home screen.  <a href="https://community.anytype.io/t/anytype-taking-2-5-minutes-to-get-past-the-logging-in-screen/2859">Thanks, lynxlove, Srinath</a>`),

	h2(`Enhancements`),
	bullet(`New users will be shown their recovery phrase during their first session. ⚠️⚠️⚠️ Please write it down. Please keep it safe.`),
	bullet(`Change the view to non-popup when the window's width is smaller than the width of the pop-up. <a herf="https://community.anytype.io/d/969-default-to-non-popup-view-when-windows-width-is-popuppages-width/1">Thanks, triangles</a>`),
	bullet(`The ${hl(`Done`)} relation will be added to new Sets views by default. `),
	bullet(`${hl(`СTRL / CMD + N`)} now creates a new object inside a Set.`),
	bullet(`${hl(`Going back`)} in history now works within the object in a modal view. `),

	h2(`Bugs`),
	bullet(`Closing and re-opening the app could end with an error. <a href="https://community.anytype.io/t/closing-the-app-only-hides-the-foreground-app">Thanks, lynxlove</a>`),
	bullet(`The carriage would sometimes not follow the user from one text block to another on the canvas.`),
	bullet(`The relation object would not update as the information changed.`),
	bullet(`${hl(`Ctrl+X`)} would sometimes discard changes instead of cutting the selected content. <a href="https://community.anytype.io/t/ctrl-x-discards-editing/2276"> Thanks, thiago_nascimentodf</a>`),
	bullet(`Home screen wallpaper would return to default after logging out.`),
	bullet(`When you clicked on a Status, Tag, File, Object relation value twice times, the focus would remain. `),
	bullet(`After a URL has been inserted into the URL relation, the content couldn't be selected. <a href="https://community.anytype.io/t/can-t-select-url-relation-with-mouse-keyboard-after-url-has-been-added">Thanks, Sharky</a>`),
	bullet(`Column position change in dark mode remained with the default styles. `),
	bullet(`Formatting in code blocks was enabled.  ${hl(`a * b * (c + d)`)} became: ${hl(`a b (c + d)`)}. <a href="https://community.anytype.io/t/formatting-in-code-block-should-be-disabled">Thanks, nelatmani</a>`),
	bullet(`Multi-select checkbox overlapped object title`),
	bullet(`Multiple selection states got cleared after using Tab search in Home. <a href="https://community.anytype.io/t/search-clears-after-selecting-in-history-tab">Thanks, kEbZeCK</a>`),
	bullet(`Selection of a text while pressing down in a big text block might not be displayed. <a href="https://community.anytype.io/t/copy-ui-issue/1634">Thanks, Srinath</a>`),
	bullet(`When an inline link was clicked, it could open multiple times. <a href="https://community.anytype.io/d/943-clicking-inline-links-opening-multiple-times/1">Thanks, kEbZeCK</a>`),
	bullet(`The first time you select a date in the calendar, it could not be stored in the value. <a href="https://community.anytype.io/t/must-input-date-twice-in-a-relation-for-it-to-register">Thanks, Klemet</a>`),
	bullet(`Clicking the checkbox of an object from within a Set, didn't work.  <a href=" https://community.anytype.io/t/clicking-the-checkbox-of-an-object-from-within-a-set-doesnt-work">Thanks, CrossDrain</a>`),
	bullet(`Set's View creation and management flow was optimised. `),
	bullet(`Searching inside the object didn't find matches in the  ${hl(`link to the object`)} block`),
	bullet(`There was no ability to open Home from the navigation. `),
	bullet(`In filters, a crash might occur after changing the relation ${hl(`Done`)} to ${hl(`Date`)} hen it's been checked.`),
	bullet(`When creating a new ${hl(`Tag`)} or ${hl(`Status`)} value,value, a new one hasn't been added by hitting ${hl(`Enter`)}.`),
	bullet(`The application might not start due to an error "An attempt was made to access a socket in a way forbidden by its access permissions". <a href="https://community.anytype.io/t/startup-exception">Thanks, Patrick Mhiau</a>`),
	bullet(`An entire paragraph could be accidentally selected when using the keyboard. <a href="https://community.anytype.io/d/1175-better-text-selection-using-keyboard-accidentally-selecting-full-paragraph/1">Thanks, qualquertipo</a>`),
	bullet(`Line spacing could be different for the first heading compared to the other headers. <a href="https://community.anytype.io/t/weird-line-space-behavior-with-titles">Thanks, Liam8lu</a>`),

	div(),

	h1(`Updates for 17 November, 2021`),

	h2(`Enhancements`),
	bullet(`You can use ${hl(`Shift`)} to select a range of items on Dashboard tabs. Thanks, sahilstudio`),
	bullet(`Refactoring of the transition area in submenus. Menus with submenus should become more responsive.`),

	h2(`Bugs`),
	bullet(`A newly created template and relations belonging to a type could no longer be opened and edited. Thanks, Sharky`),
	bullet(`Object state might stop updating after re-opening from graph view. Thanks, WhereisJ9`),
	bullet(`Dark mode — Discoloured three dots menu background for file relation values. Thanks, sahilstudio`),
	bullet(`${hl(`Shift + Enter`)} to create a line break doesn't work. Thanks, Tim-Luca`),
	bullet(`Clear Search in Graph View on sidepanel close. Thanks, lynxlove`),
	bullet(`Sometimes PDF may not be rendered in the preview`),
	bullet(`App crashes when sync status is clicked in pages showing the status as Preparing. Thanks, lynxlove`),
	bullet(`Writing an exponential number to a number cell does not work`),
	bullet(`The time in Date relation is always transformed to 12.00`),
	bullet(`When you click on a cell with a date and the selected date format is mm.dd.yyyy, it switches to dd.mm.yyyy in edit mode`),
	bullet(`In the position close to the bottom of the screen, the preview links may not be shown`),
	bullet(`When you close a cell of the URL type by clicking under the cell in Set, the drop-down menu does not close`),
	bullet(`The relation list in the Set jumps up when clicking on the switcher.`),
	bullet(`In the types menu for the empty object, there was no returning to the top of the list after pressing down on the last element`),
	bullet(`The carriage shows at the beginning of a line in a Date relation with a non-empty value`),
	bullet(`Text set into relation with format Number gets set as zero`),
	bullet(`Deleted objects are no longer shown in navigation. Thanks, michaellw`),
	bullet(`Sorting of Object relation prevented relation from further editing`),

	div(),
	// --------------------------------------------//

	h1(`Deletion. Note type. Darkmode`),

	h2(`Deletion`),
	text(`Say hello to our most incredible innovation since object creation: object deletion. Anytype now supports the permanent deleting of objects! 🥳 🗑♻️. Moving objects to the bin will remove them from navigation. From the bin, you can choose to select, delete, and restore your objects. <b>This action is irrevocable, so please be careful.</b> `),
	img('./img/help/delete.png', 'full'),
	text(`At present, only objects created inside Anytype can be deleted. Other files like media, and those that come with Anytype (types, relations) will be supported in future releases.`),

	h2(`New defaults`),
	text(`Speed and convenience are central to this update. Drafts have been replaced with a new default type, ${hl(`the Note`)}. Designed to capture thoughts quickly. You can now choose any type of object as your default type in Settings. An update we hope will provide you with even more customization and workflow options.`),
	img('./img/help/note.png', 'full'),

	h2(`Sets creation`),
	text(`You can now create a Set from the dashboard, using the bottom-left + button, or even in-line using the ${hl(`/`)} menu. From there, you can choose which type of object your new Set is for. For example, viewing your current projects, or building a reading list of books.`),
	video('./img/help/set-creation.mp4'),

	h2(`Darkmode`),
	text(`Just in-time for winter, our long-awaited dark mode is here. This feature has graced our devices (and eyes) in recent years, and has really become a way of life for some. Night owls rejoice! To enable dark mode, simply open the Settings pane, navigate to other settings → theme → and choose Dark.`),
	img('./img/help/dark-mode.png', 'full'),

	h2(`Fresh docs`),
	text(`We've launched a brand <a href="https://doc.anytype.io/d/">new hub</a> for Anytype docs. You can find it in the ${hl(`+`)} menu and in the ${hl(`?`)} icon at the bottom-right of your screen. This is our first draft, and we look forward to your feedback!`),

	h2(`Text with link to an object`),
	text(`There was a way to add an arbitrary URL link to a text selection. But now you can make a link to any Anytype object this way. Just select the part of the text, click link icon and choose! Thank you, Oshyan, <a href="https://community.anytype.io/t/link-to-object-from-text-selection/1051">for your proposal</a>!`),

	h2(`Enhancements`),
	bullet(`PDF now renders in Anytype. if you open this file type as an object. Use block's menu in the editor and just click on a file in sets. Thanks, Gabi and Florencia for your feedback!`),
	bullet(`You can now also open and create a set through the type in featured relations`),
	bullet(`You will have Page, Note, Set, and Task at the top of the type selection. They are the most used types, so they will become more accessible.`),
	bullet(`You can change views position in sets (finally!)`),
	bullet(`Anytype now shows object's preview when hovering the link and mention`),
	bullet(`We've added brand new gradient wallpapers, that look very solid! `),
	bullet(`Full-text search now works for pre-build objects`),
	bullet(`You can now open URL by clicking with Shift being held. Thanks, <a href="https://community.anytype.io/d/1059-option-to-make-url-relations-easier-to-click-through-to/1">qualquertipo</a>`),
	bullet(`Search box height is now adaptive fitting results with no extra space below`),
	bullet(`Relation's name in Graph mode is now always readable in the normal direction. Thanks, <a href="https://community.anytype.io/d/1085-relations-name-in-graph-mode-should-always-be-readable-in-the-normal-direction/1">michaellw</a>`),
	bullet(`Make sidebar less wide in Graph View. Thanks, <a href="https://community.anytype.io/d/1102-sidebar-less-fullscreen-in-graph-view/1">lynxlove</a>`),
	bullet(`Better graph search highlight. Thanks, <a href="https://community.anytype.io/d/1087-better-graph-search-highlight/1">lynxlove</a>`),

	h2(`Bugs`),
	bullet(`Anytype rarely failed to create set. Thanks, <a href="https://community.anytype.io/t/fails-to-create-a-project-sets/2199">Srinath, turquiseblue, vanntile, Eban</a>.`),
	bullet(`Changing the set filter from "is done" to something else resulted in a crash. Thanks, <a href="https://community.anytype.io/d/991-changing-set-filter-from-is-done-to-something-else-results-in-crash/1">sahilstudio</a>`),
	bullet(`Clipboard stops working while working with blocks.`),
	bullet(`Copy and cut from the title was not getting the right content.  `),
	bullet(`Pasting a link to create a bookmark crashes Anytype. Thanks, <a href="https://community.anytype.io/d/1129-pasting-a-link-to-create-bookmark-crashes-anytype/1">Tanzeel098</a>`),
	bullet(`The date relation filter wasn't working with time. The last added object may be ordered not as predicted.`),
	bullet(`Some of the emojis with numbers weren't displaying cross-device. Thanks, <a href="https://community.anytype.io/d/323-0-9-number-emojis-as-page-icons-do-not-sync-properly/1">faraaz</a>`),
	bullet(`Words/Sentences were getting duplicated or missing when selecting it with ${hl(`${cmd} + A`)} and pressing ${hl(`Enter`)} on created objects. Thanks, <a href="https://community.anytype.io/d/957-weird-behaviour-when-selecting-a-text-and-pressing-enter/1">Sedulous</a>`),
	bullet(`Having two filters with the same relation changes the first condition to "All". Thanks, <a href="https://community.anytype.io/d/621-filters-reset-when-multiple-filtering-rules-are-added/1">quietwalker</a>`),
	bullet(`LaTeX: When the carriage moved from the end of the list to the beginning or from the beginning to the end of the list, the focus on the element disappeared`),
	bullet(`In history mode, there was a possibility to change featured relations.`),
	bullet(`Cards linked objects had a residual overlay when empty. Thanks, <a href="https://community.anytype.io/d/967-cards-linked-objects-have-a-residual-overlay-when-empty/1">AyneHancer</a>`),
	bullet(`Enabling Show Icon in Grid View cropped the Page Name. Thanks, <a href="https://community.anytype.io/d/1137-enabling-show-icon-in-grid-view-crops-the-page-name/1">lynxlove</a>`),
	bullet(`The gallery view sometimes cut the last relation value.`),
	bullet(`Image viewer showed scrollbar. Thanks, <a href="https://community.anytype.io/d/1072-image-viewer-showing-scrollbar/1">kEbZeCK</a>`),
	bullet(`When you pressed Enter to open a page using the navigation pane Anytype was inserting line breaks. Thanks, <a href="https://community.anytype.io/t/using-the-navigation-pane-inserts-unwanted-line-breaks">Tim-Luca</a>`),
	bullet(`An image added to the file relation could break the work of the file list in the relay.`),
	bullet(`There was an inconsistent movement for nested blocks using ${hl(`${cmd} + Shift Up/Down`)}. Thanks, <a href="https://community.anytype.io/d/889-inconsistent-movement-for-nested-blocks-using-ctrlshift-updown/1">qualquertipo</a>`),
	bullet(`When creating a new object from a Set, edit its name. If the cursor was moved, the revised text was also moved in the direction of the cursor. Thanks, <a href="https://community.anytype.io/d/1136-ui-glitch-when-adding-a-new-object-from-a-set/1">lynxlove</a>`),
	bullet(`Relation Numbers could store non-numerical symbols.`),
	bullet(`When switched the month in the calendar in the Date relation, the date could be reset to 1970-01-01`),
	bullet(`Sometimes relation focus could stay on a previously selected cell in Set.`),
	bullet(`Selection could freeze when was working with nested blocks. Thanks, <a href="https://community.anytype.io/d/894-selection-bugs-inaround-nested-blocks/1">qualquertipo</a>`),
	bullet(`Fundamentals showed after login and not only after registration.`),
	bullet(`Shortcuts view opened while working with an object in a modal window closed the object.`),
	bullet(`Hints weren't centred relative to the object to which they were displayed.`),
	bullet(`Sometimes when the custom type was opened, the templates weren't showing.`),
	bullet(`App crashed after clicking ${hl(`Cancel`)} in the Navigation pane. Thanks, <a href="https://community.anytype.io/d/1186-crash-after-clicking-cancel-in-navigation-pane/1">HaosGames</a>`),
	bullet(`Changes have been made to relation name could not update everywhere it was used.`),
	bullet(`When pressed ctrl / it with now carriage inside block app selected all the content text, but weren't working for further actions. Thanks, <a href="https://community.anytype.io/d/944-ctrl-selects-every-text-visually/1">Srinath</a>`),
	bullet(`Link preview could be stuck on the screen. Thanks, <a href="https://community.anytype.io/d/852-link-preview-stuck-on-screen/1">jimkleiber</a>`),
	bullet(`Template preview could also be stuck.`),
	bullet(`The search wasn't working in the graph. Thanks, <a href="https://community.anytype.io/d/1091-search-function-in-graph-view-is-not-working/1">Tanzeel098</a>`),
	bullet(`Background default colour swatch showed as black (should be white). Thanks, <a href="https://community.anytype.io/d/871-background-default-color-swatch-shows-as-black-should-be-white/1">qualquertipo</a>`),
	bullet(`A lot of minor UI fixes while working with relation value in Set`),
	bullet(`Bookmark Preview got cropped on Higher Layout Widths. Thanks, <a href="https://community.anytype.io/d/1118-bookmark-preview-gets-cropped-on-higher-layout-widths/1">lynxlove</a>`),
	bullet(`No extra space was added to the template formula. So switching the LaTeX Template formula multiple times resulted in a syntax error. Thanks, <a href="https://community.anytype.io/d/1101-switching-the-latex-template-formula-multiple-times-results-in-syntax-error/1">lynxlove</a>`),
	bullet(`Objects created from Set weren't focusing the text cursor on their name. Thanks, <a href="https://community.anytype.io/d/955-objects-created-form-set-should-focus-the-text-cursor-on-their-name/1">Kite</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 09 October, 2021`),
	h2(`Graph Mode`),
	text(`Displays a graph representation of the Links and Relations between your objects. Now you can see the power of Anytype relations, with connections showing how each object relates to another! The more links and relations an object has, the more extensive its "network".  Especially useful both for the most referenced objects, and for hubs or content maps with many links to other objects.`),
	text(`You can hover over each object to highlight its connections. Clicking on it will show additional information and options in a side panel.`),
	text(`To pan around the canvas, drag the background.`),
	text(`You can zoom in and out using a touchpad zoom function or by scrolling with a mouse wheel.`),
	text(`Use the search function at the bottom of the panel to the right if you want to find a particular object. Matching objects will be highlighted in the network view.`),
	{ text: `To access the Graph Mode, look for the <img src="./img/icon/graph.svg" class="icon" /> icon in the top-left corner from any opened object or just press ${hl(`⌘ + Option + O / Ctrl + Alt + O`)}.` },
	text(`What does your graph look like? Share it in the community!`),
	img('./img/help/graph.png', 'full'),

	h2(`LaTeX block`),
	text(`LaTeX is here! Have you been frustrated trying to work with LaTeX functions in other tools? With Anytype, you don't have to worry about errors ever again thanks to a real-time preview and example functions in the editor. You can write code and view the formula output at the same time. Now fully enjoy your studies using Anytype for your Math and Chemistry class notes!`),
	img('./img/help/latex.png', 'full'),

	h2(`List &amp; Gallery views`),
	text(`Meet the new and highly-requested Views for Sets! To create a new view, click the <img src="./img/icon/plus.svg" class="icon" /> icon at the top-left of your Set (next to "All"), give it a name in the field at the top of the pop-up, then select the type of view you want (currently Grid, Gallery, or List, with more coming soon). After you create it, you can change options for the View by using the Customize View icon at the top-right of your set.`),
	text(`For Gallery views, the card image can be shown from the Attachment Relation or the object's cover image. You can set this in Customize View, and the selected image source will appear at the top of each gallery card. `),
	text(`You can also «right mouse» click on the view name to open options faster. `),
	img('./img/help/gallery.png', 'full'),

	h2(`Enhancements`),
	bullet(`Tabs: We did some research and rearranged the tabs in Home in order of popularity. The Inbox tab was removed and will come back reimagined later. Recent tab is now called History and no longer contains archived objects.`),
	bullet(`Export to Print now separates blocks between pages without cropping them in the middle. Thanks, <a href="https://community.anytype.io/d/627-print-a-page-not-in-full-screen-create-buggy-pdfs/1">quietwalker</a>`),
	bullet(`Update System: The update progress bar will only be shown if you manually request an update. At the same time, the progress bar no longer blocks the application functions. Automatic updates now happen in the background. If a new version is available, you will be prompted to apply it. So Anytype won't restart automatically at an inconvenient moment.`),

	h2(`Bug fixes`),
	bullet(`Application may crash after re-login`),
	bullet(`Audio block content upload may show an infinite loading spinner`),
	bullet(`Search on the page doesn't work in a modal view`),
	bullet(`After changing the size of the image block it becomes selected and can't be un-selected`),
	bullet(`Code snippet: Pressing Shift + Enter creates a new code line instead of the new text block.`),
	bullet(`The value at the width scale may not reset after using undo-redo`),
	bullet(`Pressing ESC with an open full-screen image closes the modal in which it was opened`),
	bullet(`<a href="https://community.anytype.io/d/961-linked-page-title-gets-removed-on-appearance-change/1">Linked Page Title gets removed on appearance change</a>`),
	bullet(`<a href="https://community.anytype.io/d/1009-align-option-for-cards-does-not-use-the-full-layout-width/1">The text alignment option, when applied to a card, does not consider the entire layout's width until the view is refreshed</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 16 September, 2021`),

	h2(`Types, Sets, and Relations are now available!`),
	text(`This upgrade has been in testing all summer. Thank you, everyone, for joining the onboarding calls, for sharing your feedback and your creations. Because of your help, we can now deliver this upgrade to everyone in the alpha program.`),

	h2(`Major features:`),
	bullet(`New types of objects and the power to connect them with relations.`),
	bullet(`Layouts help you save time on repetitive tasks, customize your objects with featured relations and reusable templates.`),
	bullet(`Finally, you can now work with multiple objects using Sets.`),
	text(`Take a look at the ${hl(`“Fundamentals”`)} page to help you get started. There are also helpful tips and tricks to get the most out of this substantial new update.`),

	h2(`New features:`),
	h3(`Play that funky music, Anytype`),
	text(`You can now upload your favorite music with formats: ${hl(`.wav`)}, ${hl(`.mp3`)}, ${hl(`.ogg`)}, ${hl(`.m4a`)} and ${hl(`.flac`)} into a new media block. Audio files are available on canvas and as objects inside Anytype, which you can collect into sets.`),
	img('./img/help/audioblock.png', 'full'),

	h3(`Custom views for links and bookmarks`),
	text(`You can change the appearance of cards to make them yours. Links and cards can now show cover images, different icon sizes, and descriptions under the text.`),
	img('./img/help/link-object.png', 'full'),

	h3(`Open attached files in Anytype`),
	text(`You can now open the attached files directly in Anytype instead of having to download them. So now you don't need to download files and then find them in the file system. They open just from Anytype! Thanks, <a href="https://community.anytype.io/d/51-open-attached-files-directly-instead-of-downloading-them">bzimor, reuseman</a>`),

	h3(`@Today is the day!`),
	text(`Enhance your Daily notes with handy date shortcuts! Anytype will create an object with a relative date automatically. Write it the way you like: ${hl(`@now`)}, ${hl(`@today`)}, ${hl(`@yesterday`)}, ${hl(`@three days ago`)}, ${hl(`@last month`)}, ${hl(`@one year from now`)}, ${hl(`@sunday`)}, ${hl(`@next January`)}, ${hl(`@last February`)}, ${hl(`@December 25th`)}, ${hl(`@01.10.21`)}, ${hl(`@2016-05-12`)}. So handy with backlinks! Thanks, <a href="https://community.anytype.io/d/770-timedate-shortcuts-eg-now-today-date-etc">levifig</a>`),

	h2(`Fixes`),
	bullet(`The recovery phrase is visible without any password authentication. Thanks, shizoxlife`),
	bullet(`Navigating back and forth between objects is unreliable. Thanks, <a href="https://community.anytype.io/d/643-forward-and-back-buttons-stop-working">irdinamaztura &amp; abheek</a>`),
	bullet(`Carriage returns to the top of the screen whenever I select something in the quick editor. Thanks, <a href="https://community.anytype.io/d/851-selection-jumps-to-top-in-popup-mode/1">bluatruli</a>`),
	bullet(`Anytype (Human) version history breaks app login, triggers an infinite loop. Thanks, <a href="https://community.anytype.io/d/805-version-history-of-anytype-page-breaks-the-app/1">selimsandal</a>`),
	bullet(`The shortcut for page history is not working. Thanks, <a href="https://community.anytype.io/d/603-page-history-shortcut-not-working/1">lynxlove</a>`),
	bullet(`Rendering on some geometries causes a flicker of UI elements. Thanks, <a href="https://community.anytype.io/d/760-rendering-on-some-geometries-causing-flicker-of-ui-elements/1">jotamudo</a>`),
	bullet(`Search box “not found” text formatting. Thanks, <a href="https://community.anytype.io/d/705-search-box-not-found-text-formatting/1">kEbZeCK</a>`),
	bullet(`Pasting URL into title triggers menu`),
	bullet(`The carriage in the Number relation shifts to the beginning of the line when the cell reopens.`),
	bullet(`UI focus disappears in the list of statuses and tags.`),

	h2(`Enhancements`),
	bullet(`New shortcut for Shortcuts - ${hl(`Ctrl + Space`)}. Thanks, <a href="https://community.anytype.io/d/602-shortcut-for-shortcuts/1">lynxlove</a>`),
	bullet(`Changing text color: remember last used color or background and add shortcut - ${hl(`${cmd} + Shift + C`)} or ${hl(`${cmd} + Shift + H`)}. Thanks, <a href="https://community.anytype.io/d/546-changing-text-color-remember-last-used-color-and-adding-shortcut/1">abstractgeek</a>`),
	bullet(`Favorite &amp; unfavorite. You can't add an object to favorites multiple times anymore. Thanks, <a href="https://community.anytype.io/d/568-possible-to-mark-an-object-as-favorite-multiple-times/1">Isak</a>`),
	bullet(`Ability to clear the "Recent" list on the dashboard. Thanks, <a href="https://community.anytype.io/d/646-ability-to-clear-the-recent-list/1">ste</a>`),
	bullet(`Link to object — first result not highlighted visually. Thanks, <a href="https://community.anytype.io/d/696-link-to-object-first-result-not-visually-chosen/1">kEbZeCK</a>`),
	bullet(`An issue with dashes in the page title when creating a new page using ${hl(`@`)}. Thanks, <a href="https://community.anytype.io/d/324-issue-with-dash-in-page-name-when-new-page-created-using-at/1">bskinner</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 31 August, 2021`),
	h2(`Enhancements`),
	bullet(`Sets can have custom icon &amp; cover and might have their own relations as other objects.`),
	bullet(`Anytype starts updating mentions after an object's name change from this release. We will introduce this enhancement for Android in the next release.`),
	bullet(`Inbox now stores a list of draft objects, sorted by editing date.`),
	bullet(`Support for plain text in a code snippet. Thanks, <a href="https://community.anytype.io/d/317-support-for-plain-text-in-a-code-snippet/1">maxitg</a>.`),
	bullet(`Add link creation via Markdown Syntax. Just write this anywhere in text block with format [text](link). Thanks, <a href="https://community.anytype.io/d/709-add-link-creation-via-markdown-syntax/1">alsmnn</a>.`),
	bullet(`We've added fast community feature request / bug report link instead of Typeform &amp; link to knowledge base.`),

	h2(`Bugs we've fixed`),
	bullet(`Page restored from archive tab is still visible in archive tab. Thanks, <a href="https://community.anytype.io/d/536-page-restored-from-archive-tab-is-still-visible-in-archive-tab">Tanzeel098, lynxlove, gis, Aljosha Leusmann</a>.`),
	bullet(`Delay to start a new block after hitting “enter”. Thanks, <a href="https://community.anytype.io/d/334-delay-to-start-a-new-block-after-hitting-enter/1">HLucas</a>.`),
	bullet(`Sometimes updates of names on home stop arriving after opening and changing on the second device.`),
	bullet(`Instable download crashes application. Thanks, <a href="https://community.anytype.io/d/654-instable-download-crashes-application/1">wemiprog</a>.`),
	bullet(`Greek letter “ώ” displays incorrectly. Thanks, <a href="https://community.anytype.io/d/826-visual-greek-letter-w-is-displayed-incorrectly/1">CrossDrain</a>.`),
	bullet(`Pasting text with / and @ at the end launched menus.`),
	bullet(`The embedded text disappears from the toggle if you press enter in the open toggle.`),
	bullet(`The arrow down key stops working from 21st toggle in a row. Thanks, SHIZOXLIFE.`),
	bullet(`Menu with all tag / status options closes when chose and select one.`),
	bullet(`Changed option of the tag / status relation become updated in other places with a delay.`),
	bullet(`When you delete a relation from Set you might still have empty column in other views.`),
	bullet(`Adding date from next month drops the value to December of 2020. Thanks, <a href="https://community.anytype.io/d/629-date-picker-defaulting-to-dec-2020-when-picking-certain-dates/1">Corsecharter</a>.`),
	bullet(`The year in the date was changed incorrectly if there was already a value been set.`),
	bullet(`Unexpected behavior may happen when clicking at the right side of object's name in Set. Thanks, <a href="https://community.anytype.io/d/655-unexpected-behavior-when-clicking-input-fields/1">nizos</a>.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 10 August, 2021`),
	text(`Some features are being tested by a smaller group while we verify their stability, and so may not be available to everyone. If you want to try Types before they were released for everyone: <a href="https://community.anytype.io/d/604-onboarding-for-the-new-anytype/2">click here for more info</a>.`),
	h2(`Fixes &amp; tech`),
	bullet(`Fix of higher memory consumption. Thanks, <a href="https://community.anytype.io/d/619-anytype-swallows-ram">Srinath, lucasmmarino</a>.`),
	bullet(`Column width snap to now has more positions: 0.25, 0.5, 0.75 Thanks for starting a discussion, <a href="https://community.anytype.io/d/340-column-width-snap-to">jmsinnz</a>. Analyzing the previous rows is a rather resource-intensive in terms of performance.`),
	bullet(`Cursor jumped back when pasting text. Thanks, <a href="https://community.anytype.io/d/276-cursor-jumps-back-when-pasting-text">bgray</a>.`),
	bullet(`Object titles &amp; descriptions could be truncated. Thanks, <a href="https://community.anytype.io/d/428-object-titles-descriptions-truncated">irdinamaztura, Kite, quietwalker, Inkqb, Tanzeel098, roncz, lynxlove, trellick</a>.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 27 June, 2021`),

	text(`Several small bugfixes`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 22 July, 2021`),
	text(`You can expect longer sign in up to several minutes. It is related to data structure optimisations that app needs to migrate on.`),

	h2(`New features &amp; enhancements`),
	bullet(`Mouse button ${hl(`forward`)} / ${hl(`backward`)} now works for navigation. Thanks, <a href="https://community.anytype.io/d/21-mouse-button-forwardbackward-navigation">Oshyan</a>.`),

	h2(`Design &amp; UX`),
	bullet(`You can now restore from Archive tab via three dots menu`),
	bullet(`2 new abstract covers related to the upcoming major relase`),

	h2(`Fixes &amp; tech`),
	bullet(`Item movement by ${hl(`${cmd} + Shift + Up/Down`)} would delete its content when not "saved". Thanks, Sven`),
	bullet(`Hyperlink pop up window persisted across pages. Thanks, <a href="https://community.anytype.io/d/341-hyperlink-pop-up-window-persists-across-pages/1">jmsinnz</a>.`),
	bullet(`New Checkbox was created pre-checked if the one above was checked. Thanks, <a href="https://community.anytype.io/d/311-new-checkbox-pre-checked/1">bskinner</a>.`),
	bullet(`When you dragged pictures into a toggle, it resized to the width of the toggle. Thanks, <a href="https://community.anytype.io/d/461-when-you-drag-pictures-into-a-toggle-it-resizes-to-the-width-of-the-toggle/1">Inkqb</a>.`),
	bullet(`When first setting up Anytype using a recovery phrase to log in, pressing ${hl(`Enter`)} didn't submit the input. Thanks, <a href="https://community.anytype.io/d/498-enter-key-should-submit-seed-phrase/1">gil</a>.`),
	bullet(`Numeration could start from 1 in different circumstances. Thanks, <a href="https://community.anytype.io/d/450-changing-long-text-into-nummerous-list-bug/1">XxxBalCion</a>.`),
	bullet(`"Type text or / for commands" was visible on desktop overlapping the newly added text from Android. Thanks, <a href="https://community.anytype.io/d/420-help-text-overlap-bug/1">abiak</a>.`),
	bullet(`Background color wasn't exporting when printing. Thanks, <a href="https://community.anytype.io/d/368-background-colour-not-exported-when-printing/1">firmicutes</a>.`),
	bullet(`Pressing ${hl(`Backspace`)} after using inline markdown at the beginning of the block now reverts block style to text. Thanks, <a href="https://community.anytype.io/d/401-text-to-bullet-list-and-back/1">wemiprog</a>.`),
	bullet(`Inline markdown work optimisations. Computation speed was low for big blocks and carriage jumped futher after using a markdown symbol.`),
	bullet(`After writing «turn into object» after / there was no such option`),
	bullet(`Dashboard's search value remained in filter after closing the search box. Thanks, <a href="https://community.anytype.io/d/408-remove-search-filter-when-search-box-closes/1">ichimga</a>.`),
	bullet(`Clicking inside the dashboard's search box closed the search box. Thanks, <a href="https://community.anytype.io/d/407-clicking-inside-the-search-box-closes-the-search-box/1">ichimga</a>.`),
	bullet(`Import from Notion crash «failed to unescape destination». Thanks, Jin Kolesnikov`),
	bullet(`${hl(`Cancel`)} when choosing a cover saved it. Thanks, <a href="https://community.anytype.io/d/424-cancel-when-choosing-a-cover-saves-it/1">irdinamaztura</a>.`),
	bullet(`Replacing an inline code block injects the rendered HTML into your page text. Thanks, <a href="https://community.anytype.io/d/454-replacing-an-inline-code-block-injects-the-rendered-html-into-your-page-text/1">triangles</a>.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 21 June, 2021`),
	text(`The big style train keeps on rolling! This latest version features our redesigned dashboard with tabs and inline object filtering.`),
	text(`It also includes features for better keyboard support and fixes for issues relating to sync and page editing. Thanks to our alpha testers for all your bug reports &amp; feature requests. We hope you enjoy this latest build of Anytype and we look forward to your feedback on the new dashboard.`),
	
	h2(`New features &amp; enhancements`),
	text(`We've polished writing experience to make it smooth around the edges.`),
	bullet(`Support for ${hl(`Inline`)} code and formatting when typing with the keyboard. Also we've add, ${hl(`** or __`)} - bold, ${hl(`* or _`)} - italic ${hl(`~~`)} - strike. Thanks, <a href="https://community.anytype.io/d/273-support-for-inline-code/1">Michael</a>!`),
	bullet(`You can use shortcuts to create arrows ${hl(`->`)} = ${hl(`→`)}, <span class="highlight"><-</span> = ${hl(`←`)}, ${hl(`-->`)} = ${hl(`⟶`)}, <span class="highlight"><--</span> = ${hl(`⟵`)}, <span class="highlight"><--></span> = ${hl(`⟷`)}.`),
	bullet(`Sometimes you could end up without a cursor on the page, e.g. after removing a block, and break the keyboard flow. Now you can just press ${hl(`Enter`)} or press up and arrow keys and continue no matter what happened.`),
	bullet(`You can now manage toggle with the keyboard. Pressing → at the end of the block will open it. When pressing ${hl(`Tab`)} to create a sub-block of a toggle, the toggle block will now expand to show the new block. The same will happen after dropping content into a closed toggle. Thanks, Rai, <a href="https://community.anytype.io/d/390-automatically-open-toggle-block-after-another-toggle-is-indented-inside">Kite</a>!`),
	
	h2(`Fixes &amp; tech`),
	bullet(`Archiving a page on the desktop would not remove the pages from Android. Thanks, <a href="https://community.anytype.io/d/333-pages-going-missing-after-archiving-and-sync-between-desktop-and-android">Nbaumann, pace8, Foltik</a>`),
	bullet(`Windows Navigation pane and app bar was broken for Windows. If Anytype was resized for a screen (Desktop or external monitor), and you disconnect that screen, Anytype does jump to the remaining screen but is wrongly displayed. Hence you cannot access the minimize or close buttons of the top right corner anymore. Thanks, Hatch Hemp Crisp, <a href="https://community.anytype.io/d/351-taskbar-disappears-after-minimizing-and-maximizing">div3xi</a>, <a href = "https://community.anytype.io/d/363-cant-minimize-the-anytype-window">Tanzeel098</a>, floseq`),
	bullet(`After adding new Bookmark or Media placeholder keeped selected and not actionable`),
	bullet(`After pressing the Delete button with the page opened without carriage inside it could close and open the dashboard. Now we just ignore that.`),
	bullet(`Every page created in the dashboard was automatically added to favorites. Thanks, <a href="https://community.anytype.io/d/387-every-block-created-is-automatically-added-to-dashboard/1">Tanzeel098</a>`),
	bullet(`One page could be added to favorites multiple times. Thanks, <a href="https://community.anytype.io/d/347-add-to-dashboard-function-adds-the-same-page-to-dashboard-leading-duplicates/1">Bzimor</a>`),
	bullet(`Export on macOS - Error when unpacking ${hl(`.zip`)} archive. ${hl(`Error 63 File name too long.`)}. Thanks, <a href="https://community.anytype.io/d/360-export-on-macos-error-when-unpacking-zip-archive/1">gis</a>`),
	bullet(`Automatically focus the first result in the slash menu. Thanks,<a href="https://community.anytype.io/d/373-automatically-focus-first-result-in-slash-menu/1">Foltik</a>`),
	bullet(`Page should be in the first place When I type ${hl(`/page`)}. Thanks, <a href="https://community.anytype.io/d/306-page-should-be-in-the-first-place/1">KeepOnce</a>`),
	bullet(`Enter the page by clicking the non text area of the page. Thanks, <a href="https://community.anytype.io/d/307-enter-the-page-by-clicking-the-non-text-area-of-the-page/1">KeepOnce</a>`),
	bullet(`Bold text indicator does not work properly. Thanks, <a href="https://community.anytype.io/d/274-bold-text-indicator-does-not-work-properly/1">BGray</a>`),
	bullet(`The ${hl(`Move To`)} option can lose data. Thanks, <a href="https://community.anytype.io/d/327-move-to-option-can-loose-data/1">jayenicks</a>`),
	bullet(`Anytype crashes everytime I try to import my Notion workspace. Oussama, Jin, you can try again one more time`),
	bullet(`We have removed the link to the closed Telegram group from the app. Please sign up using the links in your email. `),

	div(),
	// --------------------------------------------//

	h1(`Updates for 08 June, 2021`),

	text(`Say hello to the new slash menu!`),
	h2(`New features &amp; enhancements`),
	bullet(`New slash: a boost for content creation. You can now write ${hl(`/`)} anywhere to change style, make action or create a new block. Simply enter some text to filter your results. The new Style section works with text styles in the current block. The Turn-into action creates objects from the blocks and no longer works with styles.`),
	bullet(`Every new divider or media block gets selected after creation, so you can continue using the keyboard by pressing enter, up and arrow. Thanks to all who mentioned keyboard experience before in feedback and for writing posts like <a href="https://community.anytype.io/d/308-creating-dividers-removes-cursor">Ben's</a>.`),
	bullet(`Give feedback now works through the new form with ability to add media.`),
	bullet(`New ${hl(`Description`)} block. Anytype's first relation. Description is a simple block that contains a short description, and can be used in databases for context extension, filtering, sorting and many more in the future. Please <a href="https://community.anytype.io/d/343-description-block-what-you-think-about-it">tell us</a> what you think!`),
	bullet(`Entering pin code now open the last opened page, not dashboard.`),
	h2(`Design &amp; UX`),
	bullet(`Tray icons now have fast options to create ${hl(`New Object`)}, ${hl(`Search Object`)}, ${hl(`Import`)}, ${hl(`Export`)}, ${hl(`Quit`)} and more.`),
	bullet(`Optimised application bar. It shows navigation options constantly. And also refreshed style for macOS Mojave`),
	h2(`Network`),
	bullet(`Sync now works under restricted networks through special circuit relay logic <a href="https://docs.libp2p.io/concepts/circuit-relay/ ">This new concept</a>  helps to connect devices between VPN, cellular, WiFi with NAT, and many more. This means fast syncing in more cases. We will continue to improve sync across all network topologies, including LANs.`),
	bullet(`Our core library (libp2p) was updated on the backup server. Now if two devices open a TCP connection to each other at the same time using the same set of ports, they'll end up with a single TCP connection. Previously, libp2p would treat this as an error and disconnect. The server update itself doesn't fix this, so you need to install the latest version on your device and bring the syncing consistency back! Thanks to Chris, Martin, Samuel, 3000, Sinesh, Danijel, Alex, Nodoby, Volodymyr, Sven and Oshyan for  <a href="https://community.anytype.io/d/231-desktop-app-is-not-syncing/20">conversation</a> and sharing diagnostics files.`),
	bullet(`Pages could disappear on the dashboard. We fixed the bug with the syncing mechanism logic. Thanks, <a href="https://community.anytype.io/d/333-pages-going-missing-after-archiving-and-sync-between-desktop-and-android/1">Martin</a>, Vincer`),
	h2(`Fixes &amp; tech`),
	bullet(`Possibility to dive into a search result by pressing the enter key. Thanks, Björn, <a href="https://community.anytype.io/d/322-desktop-linux-being-able-to-enter-page-from-search-using-enter-keyy">Erwin</a>`),
	bullet(`Pasting content into the existing code block could turn it to the text.`),
	bullet(`Sub-menu remained open after closing the main menu in the dashboard. `),
	bullet(`When creating several pages on one could lead to wrong link positioning. New page could be linked with previously created.`),
	bullet(`Actions icon disappears when you move the page. Thanks, <a href="https://community.anytype.io/d/279-actions-icon-disappears-when-you-move-the-page/1">BGray</a>`),
	bullet(`Pasting an image could lead to stuck in "Processing...". Thanks, <a href="https://community.anytype.io/d/296-pasting-an-image-leads-to-stuck-in-processing/1">Clouedoc</a>, <a href="https://community.anytype.io/d/337-page-disappearedmissing-and-pasting-picture-from-clipboard-crash">Vincer</a>`),
	bullet(`The clickable path in the backup section of the Status page didn't actually open the File Explorer. Thanks, Céderic`),
	bullet(`When I have the toggle list closed, and I press enter to create a new one, it creates a nested toggle list instead of creating one in the same hierarchy. Thanks, Ary`),
	bullet(`When I try to create a linked page by typing in ${hl(`/link`)}, the text ${hl(`/link`)} remains on that line while the linked page I selected is made available in the next line. Thanks, <a href="https://community.anytype.io/d/325-shortcut-text-link-remains-after-creating-linked-page">Mathew</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 19 April, 2021`),

	h2(`Hotfixes`),
	bullet(`Exclude archived items in search. <a href="https://community.anytype.io/d/288-option-to-exclude-archived-items-in-search/1">Community thread</a>`),
	bullet(`Set back the file icon after uploading a file. <a href="https://community.anytype.io/d/286-file-icon-is-missing-after-upload-a-file/1">Thread</a>`),
	bullet(`Fix the duplicating title in the profile page. <a href="https://community.anytype.io/d/277-duplicate-title-in-profile-page/1">Thread</a>`),
	bullet(`Search box and page resize slider fix in Windows. <a href="https://community.anytype.io/d/278-search-box-is-out-of-page/1">Thread about search</a>, <a href="https://community.anytype.io/d/283-resize-sliderline-where-small/1">resize</a>`),
	bullet(`Search bar description inconsistency fix. <a href="https://community.anytype.io/d/289-search-bar-description-inconsistency/1">Thread</a>`),
	bullet(`After trying to drag a bookmark, the application window became inoperational`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 16 April, 2021`),

	text(`Hold onto your desks, this is a big one!`),
	text(`Previous updates focused on the unseen: bugs, sync, speed, and reliability. Those were difficult and necessary updates. It's important Anytype's foundation supports multiple object types and rich data views. With this release, however, you'll begin to see some of the visual changes we're putting in place for our next major release. We want Anytype to be a delightful experience for its users, and we hope you enjoy this sneak peek at what's coming.`),

	h2(`New Features`),
	bullet(`We've spruced up Anytype with a refreshed design. We hope you'll enjoy larger icons and more object descriptions.`),
	bullet(`A new search pane, featuring full-text search that can find matches inside your objects &amp; pages.`),
	bullet(`Markdown <b>export</b> Located in Settings, you can now export your Anytype pages into markdown.`),
	bullet(`Greater page customisation options. Users can now change page alignment, and make changes to overall page size. This can be found in the menu while editing a page on the top-right of Anytype.`),
	bullet(`You can now add/remove pages to/from the dashboard. Simply click the menu from any page.`),
	bullet(`It can be tough to login to the mobile app with a mnemonic phrase, so you can do that with a QR code. Your unique QR code is found under Settings > Recovery phrase.`),
	text(''),
	text(`${hl(`Please don't share your recovery phrase or your QR code with anyone.`)}`),

	h2(`Enhancements`),
	bullet(`Men-oeuvres. Menus will now flip vertically/horizontally when they run out of space.`),
	bullet(`Saved you a click. Sub-menus will now open on mouseover.`),
	bullet(`Link-to and move to functions are now available through the search pane.`),

	h2(`Bug fixes`),
	bullet(`Backspace or delete would sometimes open the previous page instead of deleting blocks.`),
	bullet(`Sometimes, when you typed title text, an errant letter may chase after the carriage. Not anymore. Thread: <a href="https://community.anytype.io/d/157-cursor-occasionally-jumps-back-when-typing">https://community.anytype.io/d/157-cursor-occasionally-jumps-back-when-typing</a>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 18 March, 2021`),
	h3(`Sync enhancements`),
	text(`This release is all about reliability and sync speed.`),
	text(`Readers beware, these are some hardcore technical release notes:`),
	bullet(`Multi-stream simultaneous connections should be fixed, as a result of our updating to the latest ${hl(`libp2p`)} libraries.`),
	bullet(`We've updated the request rate for adaptive changes. They are now based on persistent sync statuses, and this has reduced the polling rate of inactive devices. This helps us keep any further complexities that may arise from polling at bay.`),
	bullet(`Anytype is now efficient at checking an object's information is in sync between any two nodes, by using heads/address edges. This feature also helps reduce communication overhead between synced and inactive peers.`),
	bullet(`Address edge computation implemented. This includes a deterministic digest of all peer addresses involved in the object's creation and changes.`),
	bullet(`${hl(`Object diagnostics`)} are now in the system menu. This tool will help us diagnose sync issues. It generates a file, which you can share with the team using the feedback tool. The result is confidential.`),
	bullet(`Many minor fixes and improvements. Thank you so much for the data on Telegram and the <a href="https://community.anytype.io/d/231-desktop-app-is-not-syncing">Desktop app is not syncing</a> thread.`),
	text(''),
	text(''),
	text(`I'm sure it feels like we've been saying this forever, but we really are very close to our databases update. It will feature a refreshed design, rapid semantic search, move-to &amp; linking optimisations, and much more.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 26 January, 2021`),
	h2(`No connection → Synced`),
	text(`This is a patch that fixes the backup node connection status. The sync mechanism itself worked well and all of your data was backed up successfully in January.`),
	text(`We release fewer features as we're going to release a big update in February, so stay tuned!`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 8 December, 2020`),

	text(`Happy holidays from the Anytypers!`),
	text(`As we near the end of 2020, we want to say thanks for all your support this year.`),
	text(`There are many reasons to be optimistic about 2021. For us, we're looking forward to databases, templates, and a discussion about how objects work together.`),
	text(`This is a major Anytype update with sync status, security improvements, and bug fixes. Overall, we think this release should provide you a much-improved experience.`),

	h3(`Sync statuses:`),
	bullet(`On the top-right corner of Anytype, you can find the sync status summary of every page.`),
	bullet(`You can now dive into the details by clicking on the status and see the interaction with the backup node and other devices you use.`),
	bullet(`For each device, you will see when the last direct (P2P) synchronization took place. Since we live in a distributed world, data can be transferred directly from the device or through a backup node if it was connected this way. `),
	bullet(`The dashboard pages and links to pages have received special states also to help you better understand the sync status.`),
	text(`${hl(`Updates requested`)} status calculation starts to work from this release.`),

	h3(`Further Enhancements:`),
	bullet(`Your mnemonic passphrase is now stored in your system's keychain.`),
	bullet(`We disabled the noise security protocol and enabled the latest TLS, rewrote initial sync logic, and now we have more successful connections between devices. This means new objects will sync faster. `),
	text(`We're currently working on another major update which should increase the sync success rate even more.`),

	h3(`Bug fixes:`),
	bullet(`We fixed a bug that prevented some users from mentioning their pages. Thanks, Mukanzi!`),
	bullet(`We've fixed the Anytype icon and hover state on Windows. Thanks, Ichimga!`),
	bullet(`Page top-rights icons clips over rendered above the scroll bar in modal views in narrow resolutions. Thanks, BGray!`),
	bullet(`The <span class="highlight"><</span> or ${hl(`>`)} symbols don't disappear anymore. Thanks, George!`),
	bullet(`The URL doesn't paste in the URL dialog window if you try to create a link in a text by ${hl(`Cmd + K`)} and ${hl(`Cmd + V`)} combination. Thanks, Hayk!`),
	bullet(`Holding left click and scrolling at the same time was laggy. Thanks again, Hayk!`),
	bullet(`After pasting the URL link the menu could drop the carriage to the beginning of the block and paste it there.`),
	bullet(`Carriage drops to the beginning of the line after setting the markup color.`),
	bullet(`Dividers have lost the “turn into” option.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 20 November, 2020`),

	text(`New encryption. We now using AES with stream encryption with CFB mode. Old encryption could increase the RAM consumption to 13,46 GB with 4GB file and could even crash Anytype. Now it takes less than 100 megabytes with any size of the file. For the best performance, you need to be up-to-date in each Desktop app and use the latest Android version. It starts to work with the new files added to Anytype, so, please, re-upload big files.`),

	h3(`Enhancements:`),
	bullet(`Turn into now can turn page links into mentions with other text styles.`),
	bullet(`We now show the loading object state for pages that downloading from the remote node.`),

	h3(`Bug fixes:`),
	bullet(`${hl(`Shift + Enter`)} doesn't create a new line within a block. Thanks, Poochy!`),
	bullet(`Markup menu remains open when click outside the editor container. Thanks, BGray!`),
	bullet(`The text disappears if you type and press the system button back after typing and open the page again. Thanks, BGray!`),
	bullet(`Markup menu remains open when click outside the editor container. Thanks, BGray!`),
	bullet(`Clipboard. Dismiss after pasting an URL gets pasted as plain text not as URL. Thanks, Luuk!`),
	bullet(`Clipboard. Columns cut and copy part of the text block doesn't work properly.`),
	bullet(`Mention. Several creation and deletion attempts can break the style range.`),
	bullet(`Selection with shift pressed. If there is a carriage inside the block and you press shift and click on another block, the first block should also become selected. `),
	bullet(`Selection with shift should work from bottom to top and select all blocks between. If users starting to click in another direction the selection should always extend.`),
	bullet(`The search window doesn't match with the search pane frame.`),
	bullet(`Undo / Redo can return events with wrong order.`),
	bullet(`You cannot open the page from the dashboard if you click in the icon zone.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 30 October, 2020`),
	text(`This is a technical minor release with bug fixes and minor enchancements.`),

	h3(`Enhancements:`),
	bullet(`The page icon is now moving with the title, so you can make a page with a centered layout.`),
	img('./img/help/centered.png', 'full'),
	bullet(`We moved page cover controls position in a more convenient place.`),
	bullet(`Mentions now have the ability to break into a new line.`),
	bullet(`We have enabled dropping blocks into the page.`),
	bullet(`App usage survey pop-up was tuned not to show for new users.`),

	h3(`Bug fixes:`),
	bullet(`Functions like move to, duplicate, delete, and align didn't work in block's turn into menu.`),
	bullet(`The search on the page did not highlight the found data in the text where the styles were added.`),
	bullet(`In-page search position is now fixed to the top.`),
	bullet(`In-page search had no possibility to find special characters.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 08 October, 2020`),
	text(`We're taking another step towards our beta today, with the launch of our <a href="https://community.anytype.io/">community forum</a>. It will be a valuable resource for features, feedback and support. We hope it will also a place for you to do what you do best: discuss the future of the web and building your very own digital brain. Your invite code should wait you in mailbox, if nothing there please write us <a href="mailto:hello@anytype.io">hello@anytype.io</a>.`),

	h3(`Enhancements:`),
	bullet(`The title can be aligned, has color and background now.`),

	h3(`Bug fixes. Not anymore:`),
	bullet(`Document structure can brake in some cases and prevent the page from opening.`),
	bullet(`Clipboard. Can't copy and paste part of the text block in Anytype.`),
	bullet(`Clipboard. Highlighted, checkbox, toggle, and header type blocks with content become text type if you paste the text into them.`),
	bullet(`Clipboard. Copying block from one column to another place leads to layout brake.`),
	bullet(`Drag and drop. Moving blocks with complex structures can't be done in some cases.`),
	bullet(`Links without URL schema can't be opened in some cases.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 05 October, 2020`),
	text(`This is one for the history books. With Anytype 0.16, users can now travel through time to recover previous versions of their pages. Use ${hl(`History`)} on the page's menu in the top-right corner.`),

	h3(`Enhancements:`),
	bullet(`New page inside another one will open in modal view. All other pages can be opened this way with ${hl(`Shift + Click`)}.`),
	bullet(`Menu bar icons now alternate between light and dark.`),
	bullet(`You can @mention new page just by pressing enter after writing a name.`),
	bullet(`We've made the main logo clickable and display search as it works on other pages.`),
	bullet(`We've changed header icons set a bit.`),
	bullet(`The document building algorithm was improved.`),
	bullet(`Pressing ${hl(`CMD/CTRL + S`)} will now focus on the search bar, making it even easier for you to find what you're looking for.`),

	h3(`Bug fixes:`),
	bullet(`Sometimes speedy typists would type so quickly, Anytype wouldn't delete their text. That bug has been fixed with this build, so you can take it back to 88.`),
	bullet(`Changing the text colour in-block will no longer return the carriage to the beginning of the text string.`),
	bullet(`When selecting a block with nested blocks, those nested blocks will now also be selected.`),
	bullet(`Users with email addresses on newer TLDs reported issues when trying to submit feedback. We've updated our email address validation.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 23 September, 2020`),

	text(`Thank you to our incredible alpha testers for helping us build Anytype. In this latest build, we've introduced a short — 1 minute — survey. Your feedback is appreciated, and helps make our product better! `),

	h3(`Enhancements:`),
	bullet(`Enhanced syncing time and page retriving speed up to 100%.`),
	bullet(`${hl(`Create new page`)} from @mention will create it in-line with written name without opening.`),
	bullet(`Block's drag-n-drop now work faster, dropping areas was tuned for better usage.`),
	bullet(`Emoji's and searching lists rendering were boosted.`),
	bullet(`Our updater has been… <i>sigh</i> updated. Download checks will take place in the background, and you will have the option to update now or later.`),
	bullet(`Typing ${hl(`/todo`)} will now create a to-do list!`),
	bullet(`Windows: Close, Restore and Minimise buttons are now more responsive. `),
	bullet(`Search results can now be selected using the keyboard's up/down arrows and the tab key.`),
	bullet(`The Highlighted block can have right align now.`),

	h3(`Bug fixes:`),
	bullet(`Windows: ${hl(`Alt + F4`)} will now correctly close the application.`),
	bullet(`Windows: Entire blocks, when selected, can now be removed using the ${hl(`Delete`)} key.`),
	bullet(`Speedy typists noticed the sheer speed of their speedy keys could cause the @mention menu to break, sometimes leading to data loss. This has now been fixed. Feel free to take that typing past 88… wpm.`),
	bullet(`Irregularities and inconsistencies with both selecting and deselecting text inside blocks have been found and fixed.`),
	bullet(`A bug where pressing ${hl(`CTRL + S`)} to access search caused the menu to flicker has been fixed.`),
	bullet(`Unruly carriages no longer return to the start of the block when using @mentions.`),
	bullet(`Emoji used for pages are now rendering correctly after being synced across devices.`),
	bullet(`After the recovery from the backup server, some images couldn't be loaded. Fixed.`),
	bullet(`Links are not hiding from the dashboard if are too many.`),
	bullet(`Fast login-logout could lead app to crash. Fixed.`),
	bullet(`Dashboard has now been removed from search.`),
	bullet(`We have removed a bug which allowed users to create a PIN shorter than 6 characters.`),
	bullet(`A bug which allowed users to access the search menu from the PIN entry screen has been squashed.`),
	text(`When using ${hl(`CMD/CTRL + L`)} for links, the dialog will now open below each time it was used.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 28 August, 2020`),

	h3(`We are happy to introduce <b>Anytype for Linux!</b>`),
	text(`To run the application in Linux OS check out the <a href="https://discourse.appimage.org/t/how-to-run-an-appimage/80">"How to run AppImage instruction"</a>. New versions of Anytype will come with separate ${hl(`.AppImage`)} files automatically. For updates, you just need to use a new one. Later we will add an app in Snap.`),
	text(`The following platforms are verified to be able to run the Anytype:`),
	bullet(`Ubuntu 12.04 and newer`),
	bullet(`Fedora 21`),
	bullet(`Debian 8`),

	h3(`New features:`),
	bullet(`The Windows menu bar was redesigned to take up less space and look better.`),
	bullet(`We added new keyboard shortcuts and a new page for faster memorizing and usage. Now you can use the keyboard to get into the home screen, delete text to the left, and much more!`),
	bullet(`You can search text in-page with ${hl(`CMD/CTRL + F`)} and via page menu.`),
	bullet(`Manual check for software updates now has a window with status.`),
	bullet(`Our feedback section now has templates for different situations.`),
	bullet(`Enhanced syncing for pinned files and finding peers.`),

	h3(`Bug fixes:`),
	bullet(`An inability to delete nested paragraphs.`),
	bullet(`No in-app images in Linux and Windows version.`),
	bullet(`When setting the cursor from the last block to the top the page could scroll down.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 14 August, 2020`),

	text(`This release brings several improvements to cross-device syncing and reduces the amount of disk space needed. This version comes with a new data format for your pages, and is a huge step towards further collaboration features in the future.<br>`),
	text(`Right now, however, it means your page history will use <b>much</b> less space, changes that you made in one device will come to another <b>online without having to refresh</b>.`),

	h3(`🔔 What's changed?`),
	bullet(`You can now paste images from the clipboard into Anytype blocks.`),
	bullet(`We've added a progress bar for users who import from Notion. <br>So now you can track the progress`),
	bullet(`Copying lists with nested items now pastes in the correct structure. `),
	bullet(`Fixed ability to copy and paste the whole block. `),
	bullet(`A bug that allowed users to bypass the PIN screen through the Help button <br> has been fixed.`),
	bullet(`When using markup — bold, italics, etc — made with multiple blocks selected, it now can be reversed by using the same shortcut.`),
	bullet(`We've fixed a bug that changed the markup of text after a mention is inserted.`),
	bullet(`One user noticed an issue with the feedback submission process, <br>which we have now fixed. `),
	bullet(`Drag-and-drop with nested blocks has been improved. Users should no longer encounter disappearing blocks.`),
	bullet(`Finally, for any users wondering why the carriage was disappearing in an empty block, it has been found and safely returned!`),
	bullet(`Updating to the latest version of the Anytype alpha should go smoothly, without several restarts as we have fixed an issue causing the old app not to close during the update process.`),
	bullet(`Links restrictions. Ability to set a link or move on the page itself removed.  <br>Home option removed from linking on pages. Archived pages removed from navigation, search, and mentions. `),

	h3(`🐁 ≠ ⌨️ Less mouse, less distractions.`),
	text(`You can use the navigation pane with keyboard keys:`),
	bullet(`Easily switch pages with the arrow keys.`),
	bullet(`${hl(`←`)} and ${hl(`→`)} arrow transfers the selection to links, ${hl(`↑`)} and ${hl(`↓`)} arrows transitions between the same level, and ${hl(`Enter`)} is confirmation.`),
	bullet(`${hl(`Tab`)} &amp; ${hl(`Shift`)} + ${hl(`Tab`)} can also be used to select objects. This is similar to the browser's selection of elements.`),
	bullet(`${hl(`↑`)} and ${hl(`↓`)} arrows, ${hl(`Tab`)} &amp; ${hl(`Shift`)} + ${hl(`Tab`)} nnow transition your selection between options in the search menu without needing any additional filtration.`),

	h3(`🙏🏻 Acknowledgements`),

	text(`Anytype releases wouldn't be possible without a multitude of people, and our thanks go out to all of our brilliant alpha users and bug reporters.`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 24 July, 2020`),
	text(`Fixed syncing between devices. You finally can transfer data to another computer with the same mnemonic phrase. It's a simple implementation, so it can still lead to modification loss in case of concurrent changes in the same document.`),
	text(`To maximize the probability of successful synchronization we recommend updating both devices to this version.`),

	h3(`Small features were implemented:`),
	bullet(`You can use shortcuts to go back and forward. To open the previous page from your history use ${hl(`CMD + [`)} for macOS or ${hl(`Alt + ←`)} for Windows. ${hl(`CMD + ]`)} for macOS or ${hl(`Alt + →`)} for Windows for another direction.`),
	bullet(`${hl(`CMD + /`)} now works with multiple blocks.`),
	bullet(`Powertool ${hl(`/`)} and mention ${hl(`@`)} menu auto-close when you continue typing with no results.`),
	bullet('Type <span class="bgColor bgColor-grey textColor textColor-red nw">```</span> to add a new code block.'),
	bullet(`We made dashboard style update and new geometric wallpapers.`),
	bullet(`Pin code verification was added in case you want to change or turn it off.`),
	bullet(`App saves its size and position on exit. App window now has a minimum width.`),
	
	h3(`Sneaky bugs were fixed:`),
	bullet(`Redo ${hl(`CMD + Shift + Z`)} is working properly now.`),
	bullet(`Fixed shortcut for turn-into menu. It was launching with ${hl(`?`)}, ${hl(`,`)} in some keyboards.`),
	bullet(`Splitting and merging blocks could lead to an unwanted state with disappearing symbols when typing fast. This problem was solved.`),
	bullet(`Menu. Filtering. When using search the first element gets selected by default now.`),
	bullet(`The carriage could be moved to the new block after it was positioned it the title without a glitch.`),
	bullet(`Pincode input saving all the symbols when typing fast.`),
	bullet(`Image. The bigger picture view was fixed.`),
	bullet(`Creating a new block (pressing ${hl(`Enter`)}) lead to page jump when the page has been scrolled down. Now it's ok!`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 15 July, 2020`),
	h3(`Windows support is now (finally) available!`),
	text(`Also we have a list of fixed bugs and features &amp; improvements implemented:`),
	bullet(`Chinese symbols input issues. Tested on Pinyin and Cangjie. For now, we use space and enter as symbol insertion, later we would implement numbers.`),
	bullet(`German keyboard shortcuts issue is now fixed. Try ${hl(`CMD + /`)} (${hl(`CMD + Shift + 7`)}) one more time.`),
	bullet(`Phantom lists fixed: "Working with a list could lead to some elements disappearing when working with indentation".`),
	bullet(`You can finally use tab in the code block.`),
	bullet(`Code blocks now support even more languages!`),
	bullet(`"Can't close a modal window on outside-click when 2 modals are open." Fixed.`),
	bullet(`We've tuned the behaviour of update requests.`),
	bullet(`Split-merge text blocks in the editor. The carriage now set between the merged blocks.`),
	bullet(`Updates to the What's New page.`),
	bullet(`Copying and pasting text from external sources has been fixed.`),
	bullet(`"Setting some kind of markup leads to whole block deletion." Not anymore!`),
	bullet(`Fixed first-element highlighting in the menus.`),
	bullet(`${hl(`CTRL + N`)} and ${hl(`CTRL + P`)} shortcuts now available to work with lines in macOS.`),
	bullet(`Import from Notion now supports larger amounts of data.`),
	bullet(`Turn Into, Align, and Color now works on multiple levels of indentation.`),
	bullet(`macOS app closing into the Dock by default.`),
	text(`... and many other small improvements! `),

	div(),
	// --------------------------------------------//

	h1(`Updates for 10 June, 2020`),
	text(`We value your time and develop a great timesaver for you — now you can transfer data from other sources into Anytype!`),
	text(`Open settings in the dashboard or use ${hl(`File → Import`)} in the System menu and try. You can import all your data from Notion with the same structure for now, later we will develop more sources.`),
	img('./img/help/import.png', 'full'),
	text(`A friendly reminder. Without any imports, you can save note from another app or an article from Wikipedia, and store it forever on your computer. Just copy it there and paste into Anytype. <i>Voila!<i>`),
	text(`Please, write us what you think and what source you want to import in&nbsp;Anytype!`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 29 May, 2020`),
	h3(`Mention`),
	text(`Now Anytype allows you to refer to any page right in your content.`),
	text(`Simply insert the ${hl(`@`)} sign and start typing the name of a page you want to refer to.`),
	text(`You can mention any page anywhere and it will build a relationship between pages. All&nbsp;mentions will be shown in the navigation panel. It's just a more convenient way to connect any pages inside Anytype. Hope you enjoy it and we look forward to your suggestions on how we could make it better.`),
	text(`<img src="./img/help/mention.gif" class="full mention">`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 6 May, 2020`),
	h3(`Meet the new navigation`),
	text(`All the knowledge we have in our brains organized associatively, not hierarchically. Our&nbsp;brain, in a way, is interconnected wiki. We have multiple connections between ideas or thoughts in our brains - it's the way we navigate through our memories.`),
	text(`We introduce bi-directional links that allow you to connect ideas freely; you can reuse objects and create any information structure you desire.</br>`),
	text(`Now you can use a three-line icon <span class="icon nav"></span> on the top left of the application or press ${hl(`CMD + O`)} to see bi-directional links between pages and navigate through them.`),
	text(`You can press ${hl(`CMD + S`)} and search the right page by name or information in the&nbsp;first&nbsp;paragrapgh.`),
	{},
	text(`<b>Now you can stop segmenting and limiting the way you connect your thoughts — just link the pages and flesh everything out more naturally.</b>`),

	div(),
	// --------------------------------------------//

	h1(`Updates for 03 March, 2020`),
	h3(`Introducing Anytype`),
	text(`We upgraded the design and backed it up with cutting edge technologies to make your experience safe, secure, and convenient.`),
	text(`${hl(`This version of Anytype is suitable for personal usage only`)}. In the next versions we'll add collaborative functionality.`),

	h3(`Available features`),
	bullet(`Editor with different kinds of blocks you need to work with notes, ideas, collections, knowledge bases, receipts, diaries, to-do lists, travel plans;`),
	bullet(`Media content. Organize your space with playable videos, photos, and web bookmarks;`),
	bullet(`Drag and drop everything in Anytype. Move blocks and create columns. Create pages from your desktop folders. Copy &amp; paste content from other resources;`),
	bullet(`Page styling. Cover the page with a picture, use emoji or custom image to enhance appearance;`),
	bullet(`Dashboard. Add your favorite documents, sort them, and archive to reach them in&nbsp;a&nbsp;second.`),
	text(''),
	text(`<b>Create a new home for your information — private and free</b>.`),
	text(''),
	text(`Thank you for building a new web together, writing us a review, reporting a bug, or making a feature request, moving all of us forward. 🙏`),
	text(`Don't forget to <span class="textColor textColor-red">save your seed phrase</span>  to save access to all your private data. All&nbsp;the&nbsp;new features will appear in automatic updates.`)
];
