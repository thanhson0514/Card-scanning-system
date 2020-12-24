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

open Arduino IDE -> open file "Blink.ino" in folder "Blink" -> Update for arduino

set name "database" is name your database

set `info.password` variable is password your postgreSQL

set "person" variable in `SELECT * FROM person WHERE id=%s` is name your table

set name `device` variable (default: Arduino Uno R3 CH340 - COM3)

Run:
```bash
py main.py
```