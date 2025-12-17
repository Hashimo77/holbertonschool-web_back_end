#!/usr/bin/env python3
"""
Bu modul regular funksiya ilə asyncio.Task yaradır.
Importlib istifadə edərək modul adında rəqəm problemi həll olunur.
"""

import asyncio
import importlib

# 0-basic_async_syntax modulunu importlayırıq
wait_random = importlib.import_module('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    max_delay arqumenti ilə wait_random coroutine-i işə salan
    asyncio.Task qaytarır.

    Args:
        max_delay (int): Maksimum gecikmə müddəti

    Returns:
        asyncio.Task: Yaradılmış asyncio task
    """
    return asyncio.create_task(wait_random(max_delay))
