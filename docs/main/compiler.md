# Windows 下 Nuitka 依赖的 Clang+MSVC 安装

安装 llvm (clang 本体)

[知乎链接](https://zhuanlan.zhihu.com/p/663843824)

然后安装 Visual Studio 和他的 C ++ 桌面开发组件和你的系统相应的 Windows SDK

![Visual Studio installer](/vs-clang.png)

然后就可以在 nuitka 里快乐使用 `clang` + `msvc` 啦

> lndl_nuitka 示例

```toml title="pyproject.toml"
[tool.lndl.nuitka.cli]
main = 'test.py'
standlaone = true
clang = true
msvc = "latest"
```
