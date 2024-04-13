import openai
import pymongo
from pymongo import MongoClient
import requests
import json
from bson.json_util import dumps

class Gpt:

    def __init__(self):
        pass

def chat_with_chatgpt(message):
    # Your OpenAI API key
    api_key = "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"

    # Set OpenAI API key
    openai.api_key = api_key

    # Define the model to use
    model_name = "gpt-3.5-turbo"

    # Generate a chat completion
    response = openai.ChatCompletion.create(
        model=model_name,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": message}
        ]
    )

    # Extract the generated reply from the API response
    reply = response.choices[0].message.content

    return reply

def connection(information):
    try:
        client = MongoClient("mongodb+srv://tsakaray:Laddercar@cluster0.56qnius.mongodb.net/?retryWrites=true&w=majority")
        db = client.test
        print("Connected successfully!!!")
    except:  
        print("Could not connect to MongoDB") 
    # Create a new collection
    collection = db.ChatGptDiseaseMapping
    
    #collection.insert_one({'PlantType':information})
    print(information)
    json_data = json.loads(information)
    collection.insert_one(json_data)
    """ data = json.loads(res)
    # Read the JSON data from a file or a string variable

    # Insert the disease documents into the collection
    for disease in data['Diseases']:
        collection.insert_one(disease)"""

    client.close()

# Example usage
#user_input = input("User: ")
prompt = """Provide one strawberry plant disease information: PlantType, DiseaseName, DiseaseDetails, TreatmentOptions, TreatmentDetails. Format: JSON.
"""
response = chat_with_chatgpt(prompt)
print("ChatGPT:", response)
connection(response)

