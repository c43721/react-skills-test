# Frontend Skills Test

Challenge: Build a UI that uses a backend API while utilizing whatever framework or libraries we choose.

# Reasonings behind my choices of Packages

## React?

I'm most familiar with React, and especially with creating mockups fast. Vue was my second choice, with their very powerful directives, however I opted to go with React instead. A big part was because I knew how to create routes, and another part was because there was a bootstrapper around `chakra-ui`, the frontend css library I used.

## chakra-ui?

This was a difficult decision. I have built many projects using Bootstrap, Ant-design, and Material-ui, and I prefer Material. However, to pick my frontend library of choice, I did 2 things:

- Researched each library
- Calculated the effort to set up vs the end result

This helped me because I had never touched chakra-ui before, but looking into the docs, it became more familiar and better-looking than bootstrap, as well as some very nice additions- notably the color-switcher.

## Formik?

Formik is an easy choice - creating forms in React are cumbersome and difficult. I've used Refs in the past, and I'm okay with them, but to really move fast, especially when creating new recipies, it meant that using Formik to handle forms would save me more time in the long run, and it did.

## No TypeScript?

This was a bit more difficult. I'm a lover of TypeScript, and I think it's the best thing to come to JavaScript. However, the tradoffs are still there;

- Static types means taking the time to complete those Types
- If this was to scale up, user inputs and type checking becomes vital

However, the simple reason is: because this isn't a large project. Knowing when to make that tradeoff of time spent developing vs time-to-market are cruicial, and I think I made the correct choice.

## No Redux?

With state management being a pain in React, sometimes Redux makes it more complicated to work in. I like Redux, but this is not the project to use it with. Same reasoning as TypeScript, there's a time and place for Redux, and this wasn't it.

## date-fns?

Handling dates in JavaScript is difficult, with packages like moment usually taking the spotlight. However, I opted to use a newer and dependency-free package `date-fns` to handle my dates. This helped me with setting the dates automatically, rather than having the user do it. It also means I can format my dates however I'd like!

# Statement

I had fun when doing this challenge. I knew when I started I was able to do it quickly, but I also realized I could use this opportunity to flex my skills. I have a lot of experience in researching new topics and packages, and this is great proof of that. With using a new CSS framework like `chakra`, to `date-fns`, I believe I proved that I can dive into a new techology fast and contribute to creating something new, even if it's not perfect first try.

# Potential Improvements

There's a few, let's go through them step by step.

1.  Automatic coupons
    Right now, it's a manual process, and that's not good. I had a couple of ideas on how to do this actually. Here are some of those ideas;

        - Compare all ingredients and their names to their ingredient ID, check with the specials array's ingedient id, and send that as an array
        - User has option to either select an ingredient, or provide their own
        - Allow dropdown of coupons when creating new recipe.

    I had the right idea I think on all 3 of these, just didn't have the correct execution of them.

2.  Better form placements
    Form placement matters. For this, it was easier to go with just a flex container instead of fidgeting with Formik and Grid. Grid would have been nice, however timeboxing myself became the issue.

# Credits

takeoutlist.com for this [default-image](https://www.takeoutlist.com/assets/images/food_default.png) on Google Images
