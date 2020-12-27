import pymongo
MONGOBB_URI='mongodb+srv://{username}:{password}@users.gjqus.mongodb.net/{name_database}?retryWrites=true&w=majority'

def connect_database():
    myClient = pymongo.MongoClient(MONGOBB_URI)
    myDB = myClient['{name_database}']
    print('Connecting database...')
    return myDB