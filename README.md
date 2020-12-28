# Arduino connect server

> This project's purpose is reading ID card using Arduino connecting with RFID.
The project created is so controlling ID currently of people scanned card.
The Admin system can create an account for someone who scanned by the device.

## **_Requirement:_**

+ Board Arduino
+ RFID-RC522
+ Arduino IDE
+ Python 3.^
+ NodeJS

## Setup

> **_Notice_**: I'm don't talk about how Arduino connects with RFID-RC522. And you must find sources and connect its.
**You make sure connected Arduino with computer**.

Open Arduino IDE -> open file "Blink.ino" in folder "Blink" -> Update for arduino.

### **Folder `server`**:

> Notice: You settings NodeJS and Python environment yourself

Delete `package-lock.json` file.

Run:
```bash
$ npm install
```

Change `.default.env` file to `.env` file.

In `.env` file, You must be change `<username>`, `<password>` and `<name-database>` variables of link to it have in your account MongoDB Atlas.

Run server:
```bash
$ npm start
```

### **Folder `arduino`**

In `main.py` file, change `port` variable to port of your arduino (Default: Arduino Uno R3 CH340 - PORT: COM3).

> You can find it on Google, Youtube for setup something. And more....

@ Project development by [Lê Thanh Sơn](https://facebook.com/lethanhson.wist0514)
