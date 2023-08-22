# JS Frame
the JS Frame is a simple tool that makes a 'iframe' on your code with only JS

# How to use
it's simple.

```markdown
<!DOCTYPE html>
<html>
<head>
    <script src="https://www.github.com/EduardoPlayss5/js_frame/js_frame_v2.js"></script>
    <title>Example of using JS Frame</title>
</head>
<body>
    <div id="iframeContainer"></div>

    <script>
        const frameConfig = new IFrameJS('https://www.youtube.com/', '500px', '300px');
        createFrameId(frameConfig.src, frameConfig.width, frameConfig.height, 'iframeContainer');
    </script>
</body>
</html>
```

NOTE: This example on top is ONLY a TEST file. you can copy and paste the code on your Text Editor and Remove, Modify or Make lines. Enjoy!

# Functions
1. createFrameID(site, width, height, divID), Explaining:
   site, our iframe site
   width, our iframe width
   height, our iframe height
   divID, our Div ID (location that iframe is created. ID)

2. createFrameClass(site, width, height, divClass), Explaining:
   site, our iframe site
   width, our iframe width
   height, our iframe height
   divClass, our Div Class (location that iframe is created. Class)


# Notes:
You can use code like this:
```javascript
const frameConfig = new IFrameJS('https://www.youtube.com/', '500px', '300px');
createFrameId(frameConfig.src, frameConfig.width, frameConfig.height, 'iframeContainer');
```

1. THIS IS A SIMPLE TOOL THAT CREATES ONLY IFRAMES.
