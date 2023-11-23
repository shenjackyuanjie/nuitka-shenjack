# 通过 `setuptools` 和 `wheels` 使用 nuitka

If you have a `setup.py`, `setup.cfg` or `pyproject.toml` driven creation of wheels for your software in place, putting Nuitka to use is extremely easy.

Lets start with the most common `setuptools` approach, you can - having Nuitka installed of course, simply execute the target `bdist_nuitka` rather than the `bdist_wheel`. It takes all the options and allows you to specify some more, that are specific to Nuitka.

```python title="setup.py"
# For setup.py if not you't use other build systems:
setup(
   # Data files are to be handled by setuptools and not Nuitka
   package_data={"some_package": ["some_file.txt"]},
   ...,
   # This is to pass Nuitka options.
   command_options={
      'nuitka': {
         # boolean option, e.g. if you cared for C compilation commands
         '--show-scons': True,
         # options without value, e.g. enforce using Clang
         '--clang': None,
         # options with single values, e.g. enable a plugin of Nuitka
         '--enable-plugin': "pyside2",
         # options with several values, e.g. avoiding including modules
         '--nofollow-import-to' : ["*.tests", "*.distutils"],
      },
   },
)

# For setup.py with other build systems:
# The tuple nature of the arguments is required by the dark nature of
# "setuptools" and plugins to it, that insist on full compatibility,
# e.g. "setuptools_rust"

setup(
   # Data files are to be handled by setuptools and not Nuitka
   package_data={"some_package": ["some_file.txt"]},
   ...,
   # This is to pass Nuitka options.
   ...,
   command_options={
      'nuitka': {
         # boolean option, e.g. if you cared for C compilation commands
         '--show-scons': ("setup.py", True),
         # options without value, e.g. enforce using Clang
         '--clang': ("setup.py", None),
         # options with single values, e.g. enable a plugin of Nuitka
         '--enable-plugin': ("setup.py", "pyside2"),
         # options with several values, e.g. avoiding including modules
         '--nofollow-import-to' : ("setup.py", ["*.tests", "*.distutils"]),
      }
   },
)
```

If for some reason, you cannot or do not want to change the target, you can add this to your `setup.py`.

```python title="setup.py"
setup(
   ...,
   build_with_nuitka=True
)
```

:::info{title="提示"}
To temporarily disable the compilation, you could remove above line, or edit the value to `False` by or take its value from an environment variable if you so choose, e.g. `bool(os.environ.get("USE_NUITKA",<span> "True"))`. This is up to you.
:::

Or you could put it in your `setup.cfg`

```cfg title="setup.cfg"
[metadata]
build_with_nuitka = True
```

And last, but not least, Nuitka also supports the new `build` meta, so when you have a `pyproject.toml` already, simple replace or add this value:

```toml title="pyproject.toml"
[build-system]
requires = ["setuptools>=42", "wheel", "nuitka", "toml"]
build-backend = "nuitka.distutils.Build"

# Data files are to be handled by setuptools and not Nuitka
[tool.setuptools.package-data]
some_package = ['data_file.txt']

[nuitka]
# These are not recommended, but they make it obvious to have effect.

# boolean option, e.g. if you cared for C compilation commands, leading
# dashes are omitted
show-scons = true

# options with single values, e.g. enable a plugin of Nuitka
enable-plugin = pyside2

# options with several values, e.g. avoiding including modules, accepts
# list argument.
nofollow-import-to = ["*.tests", "*.distutils"]
```

:::info{title="提示"}
For the `nuitka` requirement above absolute paths like `C:\Users\...\Nuitka` will also work on Linux, use an absolute path with *two* leading slashes, e.g. `//home/.../Nuitka`.
:::

:::info{title="提示"}
Whatever approach you take, data files in these wheels are not handled by Nuitka at all, but by setuptools. You can however use the data file embedding of Nuitka commercial. In that case you actually would embed the files inside the extension module itself, and not as a file in the wheel.
:::
