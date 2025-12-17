#!/usr/bin/env python3
"""
1-async_comprehension.py

Asinxron comprehension nümunəsi:
Bu modul async_generator-dan istifadə edərək 10 random float
ədədi asinxron comprehensions ilə toplayır və qaytarır.
"""

from typing import List
from asyncio import gather
from importlib import import_module

async_generator = import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    async_generator-dan istifadə edərək 10 random float ədədi
    asinxron comprehension ilə toplayır və qaytarır.
    """
    return [i async for i in async_generator()]
