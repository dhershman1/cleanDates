# Changelog

## v2.0.0

> - Dropped `setFormat` since it's no longer needed
> - Changed back to a factory function setup
> - Swapped out `moment` in favor of `date-fns` since it's modular and isn't huge
> - Using `format` from `date-fns` instead of calling local functions so we can pass a step
> - Updated all dependencies to latest
> - Code clean up and optimizations

## v1.2.0

> - Standardized Module System
> - `deepClean` no longer mutates
> - Now supports IE 9+
> - Added UMD support
> - Cleaned up Syntax
> - Code optimizations
> - Code now ships minified and transpiled
> - Added `setFormat` method allowing you to set a persistant method in the module

## v1.1.0
> - Cleaned up code to be less confusing
> - Added better testing
