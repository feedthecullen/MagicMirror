## MMM-EARTH-Live

* Live video of the Earth from the International Space Station.

During "loss of signal" periods, viewers will see a blue screen. Since the station orbits the Earth once
every 90 minutes, it experiences a sunrise or a sunset about every 45 minutes. When the station is in 
darkness, external camera video may appear black, but can sometimes provide spectacular views of lightning
or city lights below.

## NASA announcement

After HDEV stopped sending any data on July 18, 2019, it was declared, on August 22, 2019, to have reached its end of life. Future methods for showing live steaming video of the Earth from the ISS are being assessed. Thank You to all who shared in experiencing and using the HDEV views of Earth from the ISS to make HDEV so much more than a Technology Demonstration Payload!

## Examples
The module is a live stream. These are still shots, obviously.

![](images/e1.png) ![](images/e2.png) 

## Installation

* `git clone https://github.com/mykle1/MMM-EARTH-Live` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

    {
    disabled: false,
    module: 'MMM-EARTH-Live',
    position: 'bottom right',
    config: {
        height:"270px",
        width:"480px",
        useHeader: false,                // true if you want a header
        header: "",                      // Change in config file. useHeader must be true
        animationSpeed: 1000,            // fade speed
    }
},

### Electron may hinder the use of autoplay. Known issue.

#### This will fix it

Edit MagicMirror/js/electron.js

Add the line shown below

```
let mainWindow;

function createWindow() {
    app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');  //< -------- added
```
    
Save and restart MagicMirror
