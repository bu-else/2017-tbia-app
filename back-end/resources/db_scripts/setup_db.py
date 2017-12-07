import json
from os import listdir
from os.path import isfile, join
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['anchor'] #the tbia database

# Assessments
db.drop_collection('assessments')
db.create_collection('assessments')
print("\nAssessments collection dropped and recreated.")
assessments = db.assessments

count = 0
path = "./../assessments/"
files = [f for f in listdir(path) if isfile(join(path, f)) and f[-4:]=='json']
json_reads = []
for f in files:
    with open(path+f, 'r') as asmnt:
        data = json.load(asmnt)
        json_reads.append(data)
        count += 1

assessments.insert_many(json_reads)
print(count, "assessments were added to the database.\n")

# Responses
db.drop_collection('responses')
db.create_collection('responses')
print("Responses collection dropped and recreated.\n")