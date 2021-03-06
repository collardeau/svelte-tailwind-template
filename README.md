# Svelte App with Tailwind CSS

This is a project template for [Svelte](https://svelte.dev) apps.

It uses the [default starter template](https://github.com/sveltejs/template), and adds [TailwindCSS](https://tailwindcss.com/) via [postcss](https://postcss.org/). [Autoprefixer](https://www.npmjs.com/package/autoprefixer) is included. Production builds are optimized with [purgecss](https://github.com/FullHuman/purgecss).

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit collardeau/svelte-tailwind-template my-svelte-app
cd my-svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get Started

Install the dependencies...

```bash
cd my-svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Tailwind Usage

Simply use Tailwind classes in your Svelte components:

```javascript
<p class="text-green-500">Svelte + TailwindCSS</p>
```

 To learn more about [TailwindCSS](https://tailwindcss.com/), check out [this wonderful series of videos](https://www.youtube.com/watch?v=Ybybd3GCNn4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2) by its author,  [Adam Wathan](https://twitter.com/adamwathan). 
