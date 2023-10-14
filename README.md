# js-video-player

> [!NOTE]
> This repository uses [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

## Usage

1. Add the `script.js` to the same directory as your `index.html` and copy `<script src="./script.js"></script>` into your HTML.

> [!IMPORTANT]
> Put the `<script>` tag at the end of the `<body>` tag!

2. To add a video to your page copy and paste this HTML mess:
```
<div id="vid-box">
    <video src="YOUR VIDEO SOURCE" id="video" width="500px"></video>
    <div id="controls-box">
        <button name="backwards">
          <i class="fas fa-backward"></i>
        </button>
        <button name="playButton">
          <i class="fas fa-play"></i>
        </button>
        <button name="forwards">
          <i class="fas fa-forward"></i>
        </button>
        <div name="inputBox">
          <input type="range" name="range" value="0" />
        </div>
    </div>
</div>
```

3. Add the `style.css` next to your `index.html` and put `<link rel="stylesheet" href="./style.css" />` into your HTML.

4. Add the `css` and `webfonts` directories next to your `index.html` and put `<link rel="stylesheet" href="./css/all.css" />` into your HTML.