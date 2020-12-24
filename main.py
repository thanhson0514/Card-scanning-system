import psycopg2
import serial
import time
from info import database
from info import info

device = 'COM3'

ser = serial.Serial(device, 9600, timeout=0)
time.sleep(3)

print('Connecting...')
conn = None

try:
    conn = psycopg2.connect(
        host="localhost",
        database="rfid",
        user="postgres",
        password=info.password
    )
    while 1:
        conv_data = []
        data = b''

        print('Waiting card...')
        while data == b'':
            data = ser.readline()

        data = data.decode('utf-8').split(' ')
        for i in data:
            if i != '' or i != ' ': conv_data.append(i)

        conv_data = '_'.join(conv_data)[1:].strip()

        commands = "SELECT * FROM person WHERE id=%s"

        cur = conn.cursor()
        cur.execute(commands,(conv_data,))
        
        fetch_data = cur.fetchall()

        if not len(fetch_data):
            print("Who are ypu??")
        else:
            print("Hello",fetch_data[0][1])
            var = input("Enter 0 or 1 to control led: ")
            ser.write(str.encode(var))
        
        cur.close()

except (Exception, psycopg2.DatabaseError) as error:
    print("Error:",error)
finally:
    if conn is not None: conn.close()
