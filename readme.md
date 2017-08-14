# Markdown Realtime preview

## Feature

* markdown rendering by your browser
* MathJax
  + Single Delimiter `$` is inline mode
  + Double Delimiter `$$` is display mode

## Usage

```
npm install -g kuronat/mdprev-cli
mdprev your_editing_md_file.md
```

## Motivation

There is many markdown editor, processor, but...

* Most markdown processor does not respect LaTeX syntax like \ inside `$`.
* Editor is important, like a partner for writer. Thus we often feel given editors are insufficient. 

So we suggest this concept:

* You can use your favorite editor
* GFM markdown but it respects LaTeX syntax


