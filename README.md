# Meteor Dynamic Imports example

This is a very simple Meteor app that simply imports react-summernote dynamically. Run with meteor and confirm ReactSummernote is available after load, by running "window.ReactSummernote" in the browser console. Run with bundle visualizer to see that react-summernote is not part of the initial client bundle:

```bash
meteor --extra-packages bundle-visualizer --production
```
