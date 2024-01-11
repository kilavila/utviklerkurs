<div style="text-align: center; background-color: #0D1117; padding-top: 20px;">
  <img src="./src/assets/img/logo-white.svg" width="400" />
  <h1 style="color: #FFFFFF">
    ALF Developer course
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

### Getting started

Clone the repository.

```bash
git clone https://github.com/kilavila/utviklerkurs.git
```

Proceed with the installation of the project.

```bash
cd ./utviklerkurs
npm install
```

To initiate the project and display it in the browser, run the command and access the URL: `http://localhost:4200`.

```bash
npm start
```

### Deployment

To initiate the deployment of this project, execute the following command.

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
