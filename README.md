# SOD 2030

Unofficial class site. Static HTML served by a Cloudflare Worker.

## Where things are

    public/index.html      This Week (landing page)
    public/schedule.html   Semester schedule
    public/courses.html    Course cards
    public/dates.html      Full date list
    public/social.html     Events and photo links
    public/resources.html  Study links
    public/404.html        Shown for bad URLs
    public/assets/data.js  <- the file you edit most
    public/assets/style.css   Colors, type, layout
    public/assets/site.js     Machinery, leave alone
    public/assets/img/        Drop images here
    wrangler.jsonc         Deploy config, set once

## Everyday edits

**Add a deadline** — open `public/assets/data.js`, add a line to
`DEADLINES`. Dates are always `YYYY-MM-DD`. It appears on the home
page countdown and on Key Dates automatically. Past items drop off
the home page on their own; no cleanup needed.

**Add a course** — same file, `COURSES` list.

**Add a tab** — create the new `.html` file in `public/` (copy an
existing one), then add a line to `NAV` in `data.js`. The nav bar on
every page updates itself.

**Change colors** — the variables at the top of `style.css`. Dark
mode follows the reader's device setting and uses the second block.

**Add an image** — put the file in `public/assets/img/`, then
reference it as `assets/img/filename.jpg`. Resize large photos first;
phone photos are often 4–8 MB and will make the page crawl.

## Deploying

Every push to the main branch redeploys automatically, usually within
30 seconds. To check work, commit and then refresh the live URL.

## Access

Site is gated by Cloudflare Access, restricted to the school email
domain. Anyone in the class can sign in with their student email; no
one else can. See the Access application settings in Cloudflare Zero
Trust to change who's allowed.
