<div style="text-align: center; background-color: #0D1117; padding-top: 20px;">
  <img src="./src/assets/img/logo-white.svg" width="400" />
  <h1 style="color: #FFFFFF">
    ALF Developer Course
  </h1>
</div>

An intensive course in website and program development with the aim of giving the participants a good
introduction to the principles for developing structured, creative and well-functioning solutions.

[![MIT License](https://img.shields.io/badge/Angular-17.0.0-red.svg)](https://angular.io/)
[![GPLv3 License](https://img.shields.io/badge/Node-v21.5.0-green.svg)](https://nodejs.org/en)
[![AGPL License](https://img.shields.io/badge/DaisyUI-4.4.23-magenta.svg)](https://daisyui.com/)
[![AGPL License](https://img.shields.io/badge/TailwindCSS-3.4.0-blue.svg)](https://daisyui.com/)

## Documentation

**Client:** Angular, DaisyUI, TailwindCSS<br>
**Server:** Node, NestJS, Prisma

Built using Angular 17, utilizing standalone components.

### Requirements

> <b>Having trouble running or building the project?</b><br>
> This might be happening if you run different versions of NodeJS or Angular.<br>
> Try installing the `versions listed at the top` of this document!

<details>
  <summary style="font-weight: bold">Git</summary>
  Using Git is a must for working on this project, and you should never work on the main branch!<br>
  In this documentation we will use Git in the terminal, use Github Desktop or LazyGit if you prefer.<br>
  Go to https://git-scm.com and follow the installation steps.<br>
  If you don't get access to Git from your default terminal, you can use the Git Bash terminal.
</details>

<details>
  <summary style="font-weight: bold">NodeJS / NPM</summary>
  In order to install the projects dependencies, you will need to install NodeJS.<br>
  Go to https://nodejs.org and download the latest version.<br>
  NPM should be installed along with NodeJS.
</details>

<details>
  <summary style="font-weight: bold">Angular CLI</summary>
  Angular CLI is mainly used for generating components and building the project.<br>
  Go to https://angular.io and follow the installation steps.
</details>

<br>

You can check if the installation went ok by running the following commands in your terminal:

```bash
node --version
```
```bash
npm --version
```
```bash
ng version
```

### Getting started

##### Cloning the repository

Open your terminal and `cd` into a folder where you want to clone the repository.<br>
Use `pwd` and `ls` to orientate yourself, and run the following command.

```bash
git clone https://github.com/kilavila/utviklerkurs.git
```

Now move into the project folder by running:

```bash
cd ./utviklerkurs
```

##### Creating a new branch

Create a new branch in the repository, again; don't work on main!<br>
You can use your firstname as a branch name if you're not sure what to call it.<br>
Run the following command:

```bash
git checkout -b your-branch-name
```

Make sure you are in the correct branch:

```bash
git branch
```

##### Running the project

To install all the dependencies in the project, run the following command:

```bash
npm install
```

When the installation is complete, the project should be ready to run locally.<br>
All the scripts and dependencies can be found in `package.json`.<br>
Now run the following command to run the project locally:

```bash
npm start
```

> Open your browser and navigate to http://localhost:4200<br>
> Press CTRL+C in the terminal to stop the server.

##### Commit and push your changes

> Always, always, always write a proper commit message!<br>
> It should be short and descriptive...

To commit your changes, run the following commands:

```bash
git add .
git commit -m "Your commit message"
```

If this is the first time you're pushing a commit, you will need to create an account on Github.<br>
Go to https://github.com and create an account.<br>

Then, run the following command to push your changes:

```bash
git push -u origin your-branch-name
```

> You only have to use `git push -u origin your-branch-name` when you're pushing the first time.<br>
> Otherwise, you can use `git push`.

##### Merge branches

> Make a pull request if you don't have access to main or don't know how to merge!<br>

A merge tutorial will be available soon. Practise merging in smaller projects first.

<u>Making a pull request:</u>

1. Navigate to your branch on Github(https://github.com/kilavila/utviklerkurs/tree/your-branch-name).
2. Click on `Contribute`.
3. Click on `Open Pull Request`.
4. Fill in the form and click on `Create pull request`.

##### Building the project

> Skip this step if you made a pull request and didn't merge with main.<br>
> Someone will merge your changes, build and deploy it for you.

When you have made all the changes, run the following command to build the project:

```bash
npm run build
```

Generated files can be found in the `dist/utviklerkurs/browser` folder.<br>
Upload the files to the web server with either SSH or FTP.

> Alternatively: Use `SSHFS` in the terminal to mount an empty local folder to the web server and copy the files over.
> Keep in mind that SSHFS can be slow and not necessarily the best solution for larger files.
>
> Read more about: [SSHFS](https://man.archlinux.org/man/sshfs.1)


## Optimizations

[GIMP](https://www.gimp.org/) and [ImageMagick](https://imagemagick.org/) for image optimization.

Images should have:
- proper aspect ratio
- proper resolution
- WEBP format (preferred format)
- JPG format (backup format for WEBP)
- maximum 200KB

## Contact

Contact information can be found at [Utviklerkurs.no](https://utviklerkurs.no).

## Authors

- [@kilavila](https://www.github.com/kilavila)
