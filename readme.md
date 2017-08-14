# Markdown Realtime Preview

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

There are many markdown editor, processor, but...

* Most markdown processor does not respect LaTeX syntax like \ inside `$`.
* Editor is important, like a partner for writer. Thus we often feel given editors are insufficient.
* Too complex to learn.

So we suggest this concept:

* GFM based rendering but it respects LaTeX syntax.
* You can use your favorite editor.
* Extremely simple.