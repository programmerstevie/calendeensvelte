# CALENDEEN (taqwayiim)

# generate email template from mjml:
- `npm run gen:email -- <path/to/mjml/file>`

i.e.
`npm run gen:email -- ./emails/magicLink.mjml`
*generates a file "magicLink-template.js" with a default exported function whose sole argument is props that are for handlebar-style insertion of data. A great way to customize emails if you ask me.*

### MJML + DATA INSERTION POINTS FTW