react-use-mount-and-update
==========================

**React Hooks for separating different responsibilities of effects**

The `useEffect` React Hook is commonly used in one of the following ways:

1. with an empty dependency array, for effects that should occur only the first
   time the component is mounted;

2. with a non-empty dependency array, for effects that should occur when the
   component is mounted and one of the dependencies changed.

This module provides React Hooks that separate these usages, for improving
semantic distinction, reducing dependency mistakes, and avoiding memory leaks.

* Calling `useMount` is equivalent to calling `useEffect` with an empty
  dependency array. It does not need a second argument.

* Calling `useUpdate` is equivalent to calling `useEffect`, but throws an error
  if the second argument is not a non-empty array. It also ensures that the
  effect does not occur if the component is not mounted.


Install
-------

```
npm install @hashiprobr/react-use-mount-and-update
```


Example of useMount
-------------------

The code below...

``` js
```

...is equivalent to the code below.

``` js
```


Example of useUpdate
--------------------

The code below throws an error.

``` js
```

The code below also throws an error.

``` js
```

The code below...

``` js
```

...is almost equivalent to the code below...

``` js
```

...but in the first one the effect will occur regardless if the component is
mounted or not, while in the second one the effect will occur only if the
component is mounted.
