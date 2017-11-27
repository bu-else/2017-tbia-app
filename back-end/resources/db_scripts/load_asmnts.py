import json
from os import listdir
from os.path import isfile, join
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client['tbia'] #the tbia database
db.drop_collection('assessments')
db.create_collection('assessments')
assessments = db.assessments

path = "./../assessments/"
files = [f for f in listdir(path) if isfile(join(path, f)) and f[-4:]=='json']
json_reads = []
for f in files:
    with open(path+f, 'r') as asmnt:
        data = json.load(asmnt)
        json_reads.append(data)

assessments.insert_many(json_reads)
