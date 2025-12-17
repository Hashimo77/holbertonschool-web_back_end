#!/usr/bin/env python3
"""
Bu modul təsadüfi gecikmə ilə gözləyən async coroutine təqdim edir.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    0 ilə max_delay (daxil olmaqla) arasında təsadüfi float saniyə
    gözləyir və həmin gecikmə müddətini qaytarır.

    Args:
        max_delay (int): Maksimum gözləmə müddəti (saniyə).

    Returns:
        float: Gözlənilən təsadüfi vaxt.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
