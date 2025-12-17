#!/usr/bin/env python3
"""Async generator module."""

import asyncio
import random


async def async_generator():
    """Async generator coroutine."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
