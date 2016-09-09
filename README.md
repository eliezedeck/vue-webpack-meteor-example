# Webpack + Vue + Meteor Example

Simple projet that helps you start-up with modern Vue with Meteor, while leveraging the normal
Webpack + NPM workflow for your front-end.

```bash
cd .client
npm install
npm run dev
```

In another terminal:

```bash
meteor
```

## How it works

**NOTE:** The `/` directory in this explanation means the root of this project, not your
system's root folder.

If you look at what the official `vue-cli` does, it will generate files thru Webpack. Well, that
behavior is retained in this setup. This happen inside the *hidden* folder `/.client`, and by being
hidden, Meteor will not interfere with it, meaning, it will not watch/monitor file/folder changes
happening in there.

The only thing that's interesting here, is that the generated file is directly injected into the
`/public/static` directory of the main Meteor project.

Because of this, Meteor simply reloads the Client part of the project, when Webpack has finished
its compilation and placed a new file in `/public/static`.
