# Nuitka onefile 模式下的路径获取

[懒得全部搬过来的知乎文章](https://zhuanlan.zhihu.com/p/661883117)

```python title="省流.py"
__file__='C:\\Users\\SHENJA~1.SHE\\AppData\\Local\\Temp\\ONEFIL~1\\DR.py'
sys.path=['D:\\githubs\\DR\\build\\nuitka-windows', 'C:\\Users\\SHENJA~1.SHE\\AppData\\Local\\Temp\\ONEFIL~1']
sys.path[0]='D:\\githubs\\DR\\build\\nuitka-windows'
sys.argv[0]='D:\\githubs\\DR\\build\\nuitka-windows\\DR.exe'
Path.cwd()=WindowsPath('D:/githubs/DR/build/nuitka-windows')
Path(__file__).absolute()=WindowsPath('C:/Users/SHENJA~1.SHE/AppData/Local/Temp/ONEFIL~1/DR.py')
```

## 结论

### 想知道临时文件实际解压出来的地方

- `sys.path[1]`
- `Path(__file__).absolute().parent` (同 `__file__` 你自己去掉文件名)

### 想知道 exe 文件的路径

- `sys.argv[0]`

### 想知道 exe 文件所在的目录

- `sys.path[0]`
- `Path.cwd()`
- `Path(sys.argv[0]).parent`
