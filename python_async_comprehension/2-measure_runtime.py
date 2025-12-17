#!/usr/bin/env python3
"""
This module contains a coroutine that measures the runtime of
parallel asynchronous comprehensions.
"""
import asyncio
import time

# Importing async_comprehension from the previous file '1-async_comprehension.py'
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension 4 times in parallel using asyncio.gather.
    Measures the total runtime and returns it.
    """
    start_time = time.time()
    
    # We unpack a list of 4 coroutines into asyncio.gather
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    
    end_time = time.time()
    return end_time - start_time
