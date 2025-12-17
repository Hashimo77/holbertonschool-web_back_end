#!/usr/bin/env python3
"""
Bu modul task_wait_n funksiyasını yaradır.
task_wait_random istifadə edərək n ədəd coroutine işə salır
və bitmə sırasına görə nəticələri qaytarır.
"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    n ədəd task_wait_random coroutine-i paralel işə salır
    və nəticələri bitmə sırasına görə qaytarır.

    Args:
        n (int): Coroutine sayı
        max_delay (int): Maksimum gecikmə müddəti

    Returns:
        List[float]: Bitmə sırasına görə gecikmələr
    """
    delays: List[float] = []

    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)

    return delays
