#!/usr/bin/env python3
"""Module that measures the runtime of running async_comprehension four times in parallel."""

import asyncio
import time
from importlib import import_module

# Dinamik import Task1 faylı
module = import_module("1-async_comprehension")
async_comprehension = module.async_comprehension


async def measure_runtime():
    """Execute async_comprehension four times in parallel and return the total runtime."""
    start = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = time.time()
    return end - start
