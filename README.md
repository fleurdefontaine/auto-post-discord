# Auto Post to Discord via Web as Configuration

This project allows you to automatically post updates to a Discord channel using a web-based approach. It requires Termux, Kiwi Browser, and an authentication token Discord. Follow the steps below to set up and use this system.

## Prerequisites

1. **Termux**: A terminal emulator and Linux environment for Android. [Install Termux](https://f-droid.org/repo/com.termux_118.apk)
2. **Kiwi Browser**: A browser for Android with support for extensions. [Install Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)
3. **Auth Token**: Obtain an authentication token from the YouTube video [Watch](https://youtu.be/OvOKuKZwuwQ?si=TRTAIHzyMe13r6sI)
4. **Repository**: Clone or download this repository to your device.
5. **Join the Discord Server**:  
   [![Join Discord](https://img.icons8.com/fluency/48/000000/discord-logo.png)](https://discord.gg/FKKUAsFWMt)

## Installation

### 1. Set Up Termux

1. **Install Termux**:
   - Download and install Termux from [F-Droid](https://f-droid.org/repo/com.termux_118.apk).

2. **Update Termux Packages**:
   Open Termux and run the following commands to update and upgrade packages:
   ```sh
   pkg update
   pkg upgrade
   ```

3. **Install Required Packages**:
   Install `git` and `nodejs`:
   ```sh
   pkg install git nodejs
   ```

4. **Clone the Repository**:
   Clone this repository using Git:
   ```sh
   git clone https://github.com/fleurdefontaine/auto-post-discord.git
   cd auto-post-discord
   ```

### 2. Set Up Kiwi Browser

1. **Install Kiwi Browser**:
   - Download and install Kiwi Browser from [Google Play Store](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser).

2. **Install Required Extensions**:
   - Use Kiwi Browser to obtain Discord Token.

### 3. Configure Authentication Token

1. **Obtain Auth Token**:
   - Watch the YouTube video [Watch](https://youtu.be/OvOKuKZwuwQ?si=TRTAIHzyMe13r6sI) to obtain the necessary authentication token for your Discord bot.

### 4. Run the Application

1. **Install NPM Dependencies**:
   - Navigate to the project directory and install any required NPM packages:
   ```sh
   npm i
   ```

2. **Run the Script**:
   - Execute the script to start auto-posting:
   ```sh
   node app
   ```

## Usage

After setting up open localhost:3000

## Contributing

If you would like to contribute to this project, please submit a pull request or open an issue on the repository page.
