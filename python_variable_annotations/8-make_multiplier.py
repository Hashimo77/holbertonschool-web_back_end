#!/usr/bin/env python3
"""
Type-annotated function make_multiplier
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by multiplier.
    """
    def func(n: float) -> float:
        return n * multiplier
    return func
