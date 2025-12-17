#!/usr/bin/env python3
"""
Bu modul wait_n coroutine-in icra müddətini ölçür.
"""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    wait_n coroutine-in ümumi icra vaxtını ölçür və
    orta icra müddətini (total_time / n) qaytarır.

    Args:
        n (int): Coroutine sayı
        max_delay (int): Maksimum gecikmə müddəti

    Returns:
        float: Orta icra müddəti
    """
    start_time: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time: float = time.time()

    return (end_time - start_time) / n
