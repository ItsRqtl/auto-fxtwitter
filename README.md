# Auto FxTwitter

A simple browser extension that seamlessly converts `twitter.com`/`x.com` to `fxtwitter.com` when copying links on X (Twitter). Useful when you want to share the post with preview (e.g. on Discord).

## Features

This extension automatically converts `twitter.com`/`x.com` to `fxtwitter.com` when copying links on X (Twitter).

> [!TIP]
You can change the replacing domain (default: `fxtwitter.com`) by clicking the extension icon in the toolbar. For example, you can change it to `fixupx.com` or `vxtwitter.com`.

It will convert links when:

- You click the share button -> `Copy link`.
- You press `Ctrl + C` without selecting text in a post. (It will copy the converted link of the post.)

> [!IMPORTANT]
It does not convert links when you copy links from the address bar directly, as it is a limitation of browser extensions for security reasons.

## Installation

- Install the extension from the [Chrome Web Store](https://github.com/itsrqtl/auto-fxtwitter).

> [!NOTE]
This extension is planned to be published on the Chrome Web Store, but it is not there yet.

- Install the extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/fogonnnpmlmkcaigjnjibbklgegeoaph).

- Install the extension at [Firefox Browser Add-ons](https://addons.mozilla.org/en-US/firefox/addon/autofxtwitter/).

- Load the extension manually:

    1. Download the latest release from [here](https://github.com/itsrqtl/auto-fxtwitter/releases).
    2. Install the extension with the .crx file.

> [!NOTE]
Tested on Opera GX. However, this method does not work on some browsers, including Chrome, Edge, and more.

- Load the extension through developer mode:

    1. Clone this repository.
    2. Go to `chrome://extensions` (or your browsers' extension page) and enable developer mode.
    3. Click `Load unpacked` and select the `auto-fxtwitter` folder in the cloned repository.

> [!NOTE]
You have to select the `auto-fxtwitter` folder in the repository, not the repository itself.  
If you are using firefox, you have to delete the `manifest.json` and rename `manifest-firefox.json` to `manifest.json` before loading the extension.

## Usage

The extension will start working automatically in the background after installation. Copy a post link from X (Twitter) and paste it somewhere to see the magic.

![Usage example GIF](/.github/assets/example.gif)

## License

This project is under `MIT License`. You can check the details in [LICENSE](/LICENSE).
