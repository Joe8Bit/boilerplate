## SASS Architecture

> Based on the Brad Frost's ideas of [Atomic Design](http://bradfrostweb.com/blog/post/atomic-web-design/)

From the above linked article:

>The thought is that all matter (whether solid, liquid, gas, simple, complex, etc) is comprised of atoms. Those atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe.

>Similarly, interfaces are made up of smaller components. This means we can break entire interfaces down into fundamental building blocks and work up from there. That’s the basic gist of atomic design.

The terms used to describe them may seem a little strange, but they can summarised with the following:

## Atoms
Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.

Like atoms in nature they’re fairly abstract and often not terribly useful on their own. However, they’re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.

**Examples**

* Form labels
* Buttons
* Fonts
* Animations
* Color palettes

## Molecules

Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

Building up to molecules from atoms encourages a “do one thing and do it well” mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.

**Examples**

* A search form (atoms: button, form input, label)
* A CSS based logo
* Site navigation

## Organisms

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

We’re starting to get increasingly concrete. A client might not be terribly interested in the molecules of a design system, but with organisms we can see the final interface beginning to take shape.

Organisms can consist of similar and/or different molecule types. For example, a masthead organism might consist of diverse components like a logo, primary navigation, search form, and list of social media channels. But a “product grid” organism might consist of the same molecule (possibly containing a product image, product title and price) repeated over and over again.

Building up from molecules to organisms encourages creating standalone, portable, reusable components.

**Examples**

* Header
* A 'post' on a blog
* A comment section

## Templates

At the template stage, we break our chemistry analogy to get into language that makes more sense to our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

Templates are very concrete and provide context to all these relatively abstract molecules and organisms.

**Examples**

* A landing page

## Pages

Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see e.g. adding specific molecules or atoms to create an instance of a template, or enriching the template