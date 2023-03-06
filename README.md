# palladium
Mobile iOS &amp; Android App Tests

### Pre-requisite
1. Latest version of appium (follow these setup instructions: https://appium.io/docs/en/about-appium/getting-started/) 
2. Homebrew

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