# Arduino connect database basic

## **_Requirement:_**

+ PostgreSQL
+ Python 3.^
+ Board Arduino
+ RFID-RC522
+ Led
+ Resistor - 220
+ Arduino IDE

## Setup

Open Arduino IDE -> open file "Blink.ino" in folder "Blink" -> Update for arduino

Set `constructor` variable to `GLOBAL` or something.

Set name `device` variable (default: Arduino Uno R3 CH340 - COM3)

Run:
```bash
py main.py
```