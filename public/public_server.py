import psycopg2

DB_NAME = "dzbysonr"
DB_USER = "dzbysonr"
DB_HOST = "john.db.elephantsql.com"
DB_PASS = "I9702_pK-xo5-j47H96pfRRI8G-jLFrh"
DB_PORT = "5432"

def connect_database():
    try:
        conn = psycopg2.connect(database=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT)
        print("Connecting database...")
        return conn
    except:
        print("Not connecting database!")
        return None
