from serial import Serial
import requests
import time
import json


class Arduino:
    def __init__(self, port='COM3'):
        self.port = port
        self.ser = ''

    def run(self):
        ser = Serial(self.port, 9600, timeout=0)
        self.ser = ser
        time.sleep(3)
        print('Connecting Arduino...')
        return ser

    def turn_led(self):
        self.ser.write(str.encode('1'))

    def off_led(self):
        self.ser.write(str.encode('0'))

class RFID_MC522():
    def __init__(self, service):
        self.service = service

    def scan_card(self):
        conv_data = ''
        data = b''

        print('Waiting card...')
        while data == b'':
            data = self.service.readline()

        conv_data = '_'.join(data.decode('utf-8').split(' ')).strip()[1:]

        return conv_data

    def check_card(self, data):
        query = { 'card_id': data }
        
        res = requests.post('http://localhost:3000/api/card', data=query)
        res_data = res.json()

        if res_data['success']:
            user = requests.get('http://localhost:3000/api/card')
            user_data = user.json()
            print(user_data)

            return user_data 
        else:
            admin = requests.post('http://localhost:3000/api/admin', data=query)
            print('Failed')

            return ''

    def authentication(self):
        data = self.scan_card()
        self.check_card(data)

        # var = input("Enter 0 or 1 to control led: ")
        # ser.write(str.encode(var))