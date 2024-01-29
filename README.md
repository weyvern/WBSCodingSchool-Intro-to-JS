<header>

<!--
  <<< Author notes: Course header >>>
  Read <https://skills.github.com/quickstart> for more information about how to build courses using this template.
  Include a 1280×640 image, course name in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Next to "About", add description & tags; disable releases, packages, & environments.
  Add your open source license, GitHub uses the MIT license.
-->

# Introductory JavaScript Exercises

_Introductory JavaScript Exercises_

</header>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
  TBD-step-1-notes.
-->

## Step 2: Write a function that returns conditionally

_Congratulations! 🎉 Step one is done!_

**What is Control flow?**:

The control flow is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

### :keyboard: Activity: create your control flow

1. From your current `my-functions` branch pull the changes from the origin `git pull origin my-functions`. We need to do this to synchronise with the current step! :warning:
2. Locate the `myConditionals.js` file. This is our working area.
3. Checkout to a new branch called `my-conditionals`.
4. Locate the `myConditionals.js` file. This is our working area.
5. Create the body of the functions listed in the file without changing the name of the functions.
6. Once you are ready, commit and `push` your changes to your remote branch `git push origin my-conditionals`
7. We will run some tests so, do not remove the `export` keyword before the functions! You will learn about this very very soon!

## What happens next?

:warning: If anything goes wrong, i.e. the code you submitted fails, you will get a notification:

![Screenshot 2024-01-29 at 19 42 20](https://github.com/WBSCodingSchool/Intro-to-JS/assets/19370560/d86499f5-ebbc-49a9-bdba-a8cbeded584e)

Follow the link to the workflow that failed to find out what happened!:

![CleanShot 2024-01-29 at 19 44 21](https://github.com/WBSCodingSchool/Intro-to-JS/assets/19370560/01863ac7-706c-4003-9f91-b484b5a4d2a9)

In this case, our function returned `undefined` instead of the expected value!

👍 If everything is ok, GitHub will update this page, if it doesn't wait around 20s and hit refresh!

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Mail](mailto:jorge.paul@wbscodingschool.com) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 WBS Coding School &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
