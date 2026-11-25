// Content used by the reusable section components (components/sections/*).
// These show up on several pages, so edit them here once.

// Partners shown in the "Our partners" section.
// Logo: drop a file named <slug>.svg / .png / .webp / .jpg into public/images/partners/ and it is used automatically.
// Without a logo file the partner is shown as a name tile. Add `url` to make the tile a link
// (partners with no `url` yet are left unlinked: fill them in when you have the address).
export const partners: { name: string; slug: string; url?: string }[] = [
  { name: "Salt Lake County", slug: "salt-lake-county", url: "https://slco.org" },
  { name: "Axis Communications", slug: "axis-communications", url: "https://www.axis.com" },
  { name: "ESC6", slug: "esc6", url: "https://www.esc6.net" },
  { name: "Skyward", slug: "skyward", url: "https://www.skyward.com" },
  { name: "PowerSchool", slug: "powerschool", url: "https://www.powerschool.com" },
  { name: "CES", slug: "ces" },
  { name: "ESC5", slug: "esc5", url: "https://www.esc5.net" },
  { name: "Bandit", slug: "bandit" },
  { name: "DBL", slug: "dbl" },
  { name: "Diff", slug: "diff" },
  { name: "Neural Semiconductor", slug: "neural-semiconductor" },
  { name: "Milestone", slug: "milestone", url: "https://www.milestonesys.com" },
  { name: "AxxonSoft", slug: "axxonsoft", url: "https://www.axxonsoft.com" },
  { name: "Avigilon Alta", slug: "avigilon-alta", url: "https://www.avigilon.com" },
  { name: "Verkada", slug: "verkada", url: "https://www.verkada.com" },
];


// Headlines are shown as they appear on acceleye.com (truncated there too).
export const headlines = [
  {
    outlet: "New York Post",
    title: "Teen boy ‘obsessed’ with school shooters arrested…",
    href: "https://nypost.com/2025/09/09/us-news/washington-teen-13-obsessed-with-school-shooters-arrested-with-stockpile-of-guns-and-chilling-manifesto-only-a-matter-of-time/",
  },
  {
    outlet: "BBC",
    title: "Two women killed at Kentucky church as gunman…",
    href: "https://www.bbc.com/news/articles/cm2l5jn6254o",
  },
  {
    outlet: "USA Today",
    title: "Four people dead in Montana bar shooting, suspect…",
    href: "https://www.usatoday.com/story/news/nation/2025/07/28/active-shooter-new-york-city/85415554007/",
  },
  {
    outlet: "Daily Mail",
    title: "New York mass shooting as three killed and nine injured…",
    href: "https://www.dailymail.co.uk/news/article-15008095/New-York-mass-shooting-Brooklyn-restaurant-taste-city.html",
  },
  {
    outlet: "NBC News",
    title: "11 people killed in school shooting in the Austrian city of Graz",
    href: "https://www.nbcnews.com/world/europe/school-shooting-austrias-graz-second-biggest-city-graz-rcna211983",
  },
  {
    outlet: "Chicago Sun-Times",
    title: "River North mass shooting sees 4 killed…",
    href: "https://chicago.suntimes.com/crime/2025/07/03/artis-bar-mass-shooting-chicago-river-north-release-party",
  },
  {
    outlet: "Al Jazeera",
    title: "At least three dead in Idaho shopping mall mass shooting",
    href: "https://aje.news/im0geg",
  },
  {
    outlet: "Al Jazeera",
    title: "Gunmen kill 3 people at San Diego Islamic center",
    href: "https://www.aljazeera.com/news/2026/5/18/san-diego-police-say-responding-to-an-active-shooter-at-islamic-center",
  },
];

// YouTube titles weren't available on the source page: set `title` for each.
export const videos = [
  { id: "io_0R2VFiXk", title: "About gun violence: video 1" },
  { id: "O7KYFIG7etc", title: "About gun violence: video 2" },
  { id: "hSpgZZgVXrs", title: "About gun violence: video 3" },
];

// NOTE: these are summaries of the feedback shown on acceleye.com, not verbatim
// quotes. Replace `quote` with exact wording you have permission to publish.
export const feedback = [
  {
    quote:
      "Rolling the solution out now: the demos look accurate and practical, and the team is optimistic about the results.",
    name: "Thomas Young",
    role: "SLCO",
  },
  {
    quote:
      "Also implementing AccelEye: the demos showed real precision and practicality, with strong results expected.",
    name: "Tom Mood",
    role: "School safety consultant",
  },
  {
    quote:
      "As a parent, it brings peace of mind to know threats can be detected and handled early.",
    name: "Oliver",
    role: "Noah’s mother",
  },
  {
    quote:
      "Real-time alerts mean staff can act quickly and keep students safe.",
    name: "Amelia",
    role: "Emma’s mother",
  },
  {
    quote:
      "AccelEye aims to help students, teachers and families feel protected.",
    name: "James",
    role: "Jennifer’s father",
  },
];
