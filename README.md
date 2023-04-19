# Illustrates bug with Neutralino.app.exit() on Mac

## Describe the bug
The neutralinojs application should exit, but nothing happens.

## To Reproduce
Steps to reproduce the behavior:

1. On a Mac, clone a bare bones example neutralinojs app that creates “exit” and “exit and kill” buttons https://github.com/aleph1/neutralino-exit-broken
2. Click the exit button, Neutralino.app.exit() is called but the app does not exit.
3. Click the exit and kill button, Neutralino.app.exit() is called followed by Neutralino.app.killProcess() but the app does not exit.
