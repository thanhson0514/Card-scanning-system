import time
from functions import Device

device = 'COM3'

arduino_Uno = Device.Arduino()
ser = arduino_Uno.run()
mfrc522 = Device.RFID_MC522(ser)

try:
    while 1:
        mfrc522.authentication()
        arduino_Uno.turn_led()
        # inp = input('Press 1 or 0 is turn or off led:')
        # if inp == '1': arduino_Uno.turn_led()
        # else: arduino_Uno.off_led()

except Exception as err:
    print('Reset Arduino...')
    time.sleep(5)