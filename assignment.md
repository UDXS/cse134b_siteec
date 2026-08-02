Extra Credit: Give Your Personal Site an Aesthetic
Worth: Up to 30 extra-credit points

Overview
TL;DR: Earlier, you selected an aesthetic from the Aesthetic Visual IndexLinks to an external site.. For this extra-credit assignment, apply the visual style you selected to your personal website. This must be in addition to a default style that you will have as part of your default site submission - this is why it is "extra" credit.

----

Marshall McLuhan, a Canadian philosopher whose work became the basis of media theoryLinks to an external site., coined the phrase "the medium is the message." He is often credited with predicting the World Wide Web nearly three decades before Tim Berners-Lee wrote the first line of code that became the web.

Here is what he said:

In a culture like ours, long accustomed to splitting and dividing all things as a means of control, it is sometimes a bit of a shock to be reminded that, in operational and practical fact, the medium is the message. This is merely to say that the personal and social consequences of any medium—that is, of any extension of ourselves—result from the new scale that is introduced into our affairs by each extension of ourselves, or by any new technology.
Source: McLuhan, Marshall. “The Medium Is the Message.” Understanding Media: The Extensions of Man, 1964, pp. 1–18. MIT

Here is what I get if I ask an AI to explain it to me like I'm 5 years old:

Imagine you have two ways to tell your friend something:
You whisper it to them.
You shout it through a giant speaker.
The words might be the same, but the way you send the words changes what happens. The giant speaker lets many people hear it, makes it louder, and may make it feel more important.
You can access his chapter on this concept via this PDFLinks to an external site..

In the late 60s and throughout the 70s, this was a very sexy thing to tell people at parties to make you seem very smart.

Think a little about what this means when we come to talking about the Web.

It can be rare in computer science to see such an overt intersection between creativity and technology—though in reality it is everywhere (you just have to poke your head around a little)—but websites are probably one of the easiest/most direct ways to engage your creative and design sensibilities through application. Websites do not always have to be staid, ordered, UI-optimized experiences to deliver the highest rate of return per click.

I asked you to consider your aesthetic because I want you to think about yourself being the message that you're conveying in your personal website. These aesthetics are wildly different—like all of you. We are here to explore how the medium of the web can convey the message about you to a broad audience.

Everyone is unique, and the web affords you an opportunity to express that uniqueness with a set of tools that you are learning. You might have an Instagram or TikTok, but you don't control that platform. A personal website is something you own through and through. Every tag, every script is something you can (technically) write on your own and control.

A very simplistic way of looking at this is to say that writers have language, artists have paint, and computer scientists have code. Granted, this is a very naive way of looking at the world. The most interesting people in the world have all sorts of interests and express them with all sorts of tools. Brian May of QueenLinks to an external site. holds a Ph.D. in astrophysics, so if the rock band thing never pans out, he'll have a fallback. This is an exercise to force you to bridge two parts of your brain that may not always work together.

The goal is not simply to decorate the page. Your design should translate the aesthetic into a consistent system of colors, typography, spacing, imagery, borders, and interaction while preserving good HTML structure, usability, accessibility, and responsive behavior.

This is a small enhancement assignment. You are not expected to rebuild your entire site or create many new pages.

What to Do
Choose one representative page of your personal website and restyle it according to your selected aesthetic.

You may apply the design to additional pages, but doing so is not required.

1. Preserve or improve the HTML
Your page should use meaningful HTML elements based on the purpose of its content. Examples may include:

<header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>
A logical heading hierarchy
Real links and buttons for their intended purposes
Appropriate alternative text for meaningful images
Useful document metadata, including a unique title and description
Do not change good semantic markup merely to make the CSS easier to write.

2. Develop an aesthetic system with CSS
Translate your aesthetic into a small, consistent design system. Consider:

A limited color palette
Appropriate typefaces and type scale
Spacing and sizing
Borders, corners, shadows, textures, or patterns
Image treatment
Page layout using normal flow, Flexbox, or Grid
Hover and focus states
Responsive behavior
You've seen this with Professor Powell's demonstration sites for Vanilla Breeze. Go to office hours and ask him about it if you want to see more.

Use CSS custom properties for recurring design values when appropriate. Keep your CSS in an external stylesheet and organize it so another person could understand your design choices.

Your page must remain readable and usable on both narrow and wide screens. It should not require horizontal scrolling at approximately 375 pixels wide.

3. Add one small JavaScript enhancement
Add one purposeful interaction that supports the site or its aesthetic. Possible examples include:

An aesthetic or theme toggle
A collapsible information panel
A small gallery or image viewer
A control that changes a visual presentation
A preference remembered with localStorage
A custom element that represents a reusable part of the page
The interaction should:

Use an external JavaScript file
Select and update the page through the DOM
Register events with addEventListener
Avoid inline event-handler attributes such as onclick
Continue to leave the page’s essential content usable if JavaScript fails or is disabled
Keep the interaction small. A single well-designed enhancement is preferable to several unfinished features.

Aesthetic Statement
Include a short AESTHETIC.md file, no more than 500 words, containing:

The name and link of your selected aesthetic.
A brief explanation of how your CSS choices express it.
A brief description of your JavaScript enhancement.
One choice you made to preserve usability, responsiveness, or accessibility.
A reflection on how your website ties into what McLuhan says about the medium being the message.
This is a more "creative" assignment than normal, so I will accept responses written in languages other than English if you are OK with me using an AI to do the translation. I'd rather you express yourself freely in vocabulary you're comfortable with. Keep it to a page maximum in length.

Requirements and Guardrails
Work from your existing personal website.
Concentrate on one polished page.
Use semantic HTML and external CSS and JavaScript files.
Do not use inline style attributes or inline event handlers.
Do not use a CSS framework or copy a complete premade theme.
Decorative effects must not make text difficult to read or controls difficult to use.
Keyboard focus must remain visible.
Animation should be restrained and respect prefers-reduced-motion when applicable.
The page should pass HTML validation without errors.
Submit the updated source, the AESTHETIC.md file, and a link to the deployed page.
Submission
You may submit the assignment on Gradescope.

Grading — 30 Points
Semantic HTML and accessibility — 6 points
3 points: Meaningful page structure and logical headings
1 point: Appropriate image text, controls, links, and metadata
2 points: Valid HTML and keyboard-visible interaction
CSS implementation — 9 points
3 points: The chosen aesthetic is recognizable and applied consistently
3 points: CSS is organized, external, and uses reusable values or rules
3 points: The design remains readable and functional at narrow and wide viewport sizes
JavaScript enhancement — 6 points
2 points: The interaction is functional and purposeful
2 points: It uses DOM methods and addEventListener appropriately
2 points: Essential content remains available without JavaScript
Aesthetic statement — 9 points
3 points: Clearly connects specific design choices to the selected aesthetic
2 points: Explains the enhancement and one accessibility, usability, or responsive-design decision
4 points: Reflects on how the website ties into McLuhan’s idea that the medium is the message
What Strong Work Looks Like
A strong submission does not need to be visually elaborate. It has a clear aesthetic direction, consistent CSS, meaningful HTML, and one small JavaScript feature that feels intentional. The visual theme enhances the content without compromising the underlying page.

Go wild with this, the crazier/more fun it is the easier it will be for you to rack up points.