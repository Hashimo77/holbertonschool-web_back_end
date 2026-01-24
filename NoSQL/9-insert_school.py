#!/usr/bin/env python3
"""9-insert_school.py"""

def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into a MongoDB collection based on kwargs.
    Returns the new document's _id.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
