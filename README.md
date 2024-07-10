# palladium
Mobile iOS &amp; Android App Tests in Webdriver.io

### Pre-requisite
1. Latest version of appium (follow these setup instructions: https://appium.io/docs/en/about-appium/getting-started/) 
2. Homebrew

### Set Up
1. Open VS Code (or IDE of choice) and Create a new folder (mkdir {your-folder-name})
2. Open VS Code terminal and run the following commands: `npm init -y` and `npm init wdio`
3. Move through the prompts for the target env. In this case, its Android (or iOS)
4. Select the proper options and install devices, browsers, appium-server (if not already installed) and so on.
5. Verify intall by running appium-doctor.
6. Verify all is well with the following command: `npm ls webdriverio`
7. Open wdio.conf.js and configure capabilities section to match the specs in appium-inspector
8. Run test with the following command: `npm run test` (as it occurs in wdio.conf.js/scripts)
9. To run a single test: `npx wdio run wdio.conf.js --spec ./path/test-name,js`

### Reporting
src: https://webdriver.io/docs/allure-reporter/
1. Install Allure with the following command: `npm install @wdio/allure-reporter --save-dev`
2. Update wdio.conf.js to use allure at `reporters` section `['allure', {outputDir: './test/results'}]`
3. Run test and check that Allure appears in the target directory
4. Install allure command line tool: `npm i allure-commandline --save-dev` (if not found)
5. Generate the report with the following command: `allure generate ./test/results`
6. Display report with the following command: `allure open`
   
### for iOS 
* a Mac (M1 or better)
* latest XCode
* latest Command line tools
```sudo xcode-select --install```
* carthage
```brew install carthage```
* iOS sdk (a device)
```Window/Devices and Simulator```

### for android
* JAVA JDK (check if exists)
```/usr/libexec/java_home```
... if a filepath is not returned, google "java jdk 8" and install JDK (not JRE)

* Android Studio
```https://developer.android.com/studio```
... open Android studio and navigate to System Settings/Android SDK and note the location the sdk and default android version selected
... click open the SDK Tools and confirm: Android SDK Build-Tools <latest version>; Android Emulator; Android SDK Platform-Tools; Intel x86 Emulator Accel.
... create a "dummy project" to set up the android emulator
... if an error presents itself that you have an old version of JAVA or Gradle, click the gear icon (top-right of AS) and select project structure, then update

### for appium desktop
* navigate to github appium repo and select the applicable release - follow the install prompts
```https://github.com/appium/appium-desktop/releases```
... open the app and click edit configurations then paste the values of the acquired iOS and android sdk paths into the respective fields and restart appium
... click startServer and confirm all is well
