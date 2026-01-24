#!/usr/bin/env python3
"""8-all.py"""

def list_all(mongo_collection):
    """
    Returns a list of all documents in a collection.
    Returns an empty list if the collection has no documents.
    """
    return list(mongo_collection.find())
