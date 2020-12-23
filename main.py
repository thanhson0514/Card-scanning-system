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

        conv_data = '_'.join(conv_data)

        master = False
        commands = "SELECT * FROM person"

        cur = conn.cursor()
        cur.execute(commands)
        
        fetch_data = cur.fetchall()

        for row in fetch_data:
            if row[0] == conv_data[1:].strip(): 
                print("Hello",row[1])
                master = True
        
        if not master: print("Who are you??")
        
        cur.close()

        if master:
            var = input("Enter 0 or 1 to control led: ")
            ser.write(str.encode(var))

except (Exception, psycopg2.DatabaseError) as error:
    print("Error:",error)
finally:
    if conn is not None: conn.close()
