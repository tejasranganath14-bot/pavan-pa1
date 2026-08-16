PAVAN BIRTHDAY WEBSITE — V2

WHAT'S NEW
- Added a dedicated 12-photo archive as Section 09.
- Added a real `images` folder inside the ZIP.
- Added filenames pavan-1.jpg through pavan-12.jpg.
- Section 10 remains editable directly in index.html.

ADDING PHOTOS
Put your 12 chosen photos in the `images` folder and name them:
pavan-1.jpg
pavan-2.jpg
pavan-3.jpg
pavan-4.jpg
pavan-5.jpg
pavan-6.jpg
pavan-7.jpg
pavan-8.jpg
pavan-9.jpg
pavan-10.jpg
pavan-11.jpg
pavan-12.jpg

JPG is recommended. If your files are PNG, either rename only if they really are JPG files, or change the filename in index.html from `.jpg` to `.png`.

EDITING SECTION 10
Open `index.html` and search for:
<section id="birthday" class="birthday">

Everything inside that section is the final birthday message. Edit the text between:
<p class="birthday-message">
and
</p>

You can use <br><br> for paragraph breaks and <strong>...</strong> for bold text.

EDITING PHOTO CAPTIONS
In Section 09, each photo has a `<figcaption>`. You can change the caption text directly in index.html.

PREVIEW
Double-click index.html to open the website locally.

PUBLISHING
Upload the whole contents to a GitHub repository and enable GitHub Pages:
Settings → Pages → Deploy from a branch → main → / (root).

IMPORTANT
Keep the `images` folder and all 12 photos in the same website folder. Do not upload private photos you don't want publicly accessible.
