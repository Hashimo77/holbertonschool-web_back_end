#!/usr/bin/env python3
"""
Bu modul bir neçə async coroutine-i eyni vaxtda icra edib
nəticələri artan ardıcıllıqla qaytarır.
"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    wait_random coroutine-ini n dəfə paralel işə salır və
    alınan gecikmələri artan ardıcıllıqla qaytarır.

    Args:
        n (int): Coroutine sayı
        max_delay (int): Maksimum gecikmə vaxtı

    Returns:
        List[float]: Artan ardıcıllıqla gecikmələr
    """
    delays: List[float] = []

    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    for completed in asyncio.as_completed(tasks):
        result = await completed
        delays.append(result)

    return delays
