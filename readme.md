# Markdown Realtime preview

* md を更新するとブラウザも更新

```
npm install -g webpack-dev-server
npm install -g webpack
npm install -g browser-sync
```

```
npm i jquery markdown-it
webpack-dev-server --content-base public
```

```
browser-sync start --server 'public' --files 'public'
webpack --watch
```

or

```
npm run dev
```
