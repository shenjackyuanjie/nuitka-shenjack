# Nuitka github 发 issue 指南

<details>

<summary>
英文原文
</summary>

Before submitting an Issue, please review the
[Issue Guidelines](https://github.com/Nuitka/Nuitka/blob/develop/CONTRIBUTING.md#submitting-an-issue).

- Please check whether the bug was already reported or fixed.

- Please check out if the develop version of Nuitka works better for you.

  Download source, packages [from here](https://nuitka.net/doc/download.html) where you will also
  find instructions how to do it via pip or git.

If you want to post a problem/bug, to help us understand and resolve your issue please check that
you have provided at least the information below, and discard up to here:

- Nuitka version, full Python version, flavor, OS, etc. as output by *this exact* command.

  > python -m nuitka --version

  If you are not providing the full output. The issue cannot be solved and will be considered
  `invalid`. The command outputs more than you think, and we are adding more all the time. We do not
  want to left guessing or trying things out to reproduce your issue.

- How did you install Nuitka and Python

  Did you use pip, anaconda, deb, rpm, from source, git clone, then install into a virtualenv or
  not, this is very important usually and one thing, the above command does not tell us (yet).

- The specific PyPI names and versions

  It should be taken from this output if there specific packages involved, e.g. `numpy`, you are
  expected to shorten this to the relevant ones.

  > python -m pip freeze

- Many times when you get an error from Nuitka, your setup may be special

  Then even a `print("hello world")` program will not work, please try that and report that error
  instead. We do not need a report that says "Tensorflow does not work" when nothing actually works
  for you. You ought to also read the User Manual and check that your setup is actually supported
  already.

- Also supply a Short, Self Contained, Correct, Example

  That demonstrates the issue i.e a small piece of code which reproduces the issue and can be run
  with out any other (or as few as possible) external dependencies. Issues without this may will
  likely be rejected without much consideration. Often this can be as simple as importing a package,
  if this is a packaging issue, try that first.

  Pointers to repositories with usage of `pipenv` are very welcome, archives with examples are too,
  e.g. if a certain package structure is needed. This must be only source code, binaries are not
  used ever by us. But beware, that e.g. we cannot click around and stuff. Still do an effort to
  make the usage obvious. Having a compile script in the repo is perfect.

  But this cannot be much code for non-commercial users, since that causes too much effort. We
  cannot just compile your code, run it and have it download a control and command center.

- Provide in your issue the Nuitka options used

  Ideally use the `# nuitka-project:` options feature in the code, so options and example code go
  along. Alternatively state the command line.

  [Nuitka Options in the code](https://nuitka.net/doc/user-manual.html#nuitka-options-in-the-code)

- Avoid unnecessary options

  Do not use `--onefile` if the issue also happens with `--standalone`. Minimize the use of options
  as far as you can, please. Do not disable outputs with `--quiet` and do not disable warnings.

- Note if this is a regression

  If it used to work in an earlier version of Nuitka, please note what you know about that. Since
  git bisect is a thing for which we do a lot of error to make it usable, this will help
  dramatically to isolate the issue.

- Consider getting commercial support

  [Nuitka commercial](https://nuitka.net/doc/commercial.html) offers subscriptions and priority
  support. This will accelerate your problem solution and helps to sustain Nuitka development. Also
  you then have a chance to provide source code of your project to us, which might simplify things,
  or pay for time to solve your issues in your environment.

Some things are not welcome, please consider it.

- Do *not* post screenshots

  These are not welcome unless absolutely necessary, e.g. because of Qt display problem, instead
  capture the output of programs, so things are searchable and copy&paste will work. I just plainly
  don't want to manually copy strings and hope they match.

- Do *not* close the issue yourself, we will close things on stable releases

  We close issues only when they are released as a stable version, e.g. in a hotfix or a new
  release, before that it will be "Done" in planning and go through `factory` and `develop` tags to
  indicate they are solved there.

  Of course, if you find out your issue is invalid, please do close it, and we then attach the
  `invalid` tag.

- Do *not* report against factory version

  Unless you were asked to test it there, it is frequently very broken, and there is only noise to
  be had. Telling me about it on Discord would be a better idea.

- Do *not* let this template remain part of the issue, it's noise.

</details>

Before submitting an Issue, please review the
[Issue Guidelines](https://github.com/Nuitka/Nuitka/blob/develop/CONTRIBUTING.md#submitting-an-issue).

在发送 Issue 之前先查看 [Issue 规范](https://github.com/Nuitka/Nuitka/blob/develop/CONTRIBUTING.md#submitting-an-issue)

> Please check whether the bug was already reported or fixed.

- 请检查你的问题是否已经提交过

> Please check out if the develop version of Nuitka works better for you.

- 请检查 `develop` 版本 的 Nuitka 是否修复了你的问题

  Download source, packages [from here](https://nuitka.net/doc/download.html) where you will also
  find instructions how to do it via pip or git.
  
  从 [这里](https://nuitka.net/doc/download.html) 下载 源码 和 安装包
  同时你也可以在这里找到如何用 源码 或者 git 来安装他们的方法

## 问题描述

如果你想提交的是一个 问题 / bug, 为了帮助我们更好的理解并解决你的问题, 请检查以下内容
并且在检查完之后 *删除* 这个指南

- Nuitka 版本, 完整的 Python 版本, 架构, 系统
  
  请 *完整* 且 *不带修改的* 发送以下命令的输出
  
  > python -m nuitka --version

  如果你没有提供 *完整* 的输出, 你的 Issue 不能被解决, 并且被标记为 `invalid`
  这个命令输出的内容会比你想要的要多很多, 并且我们也在不断添加新的内容
  我们不想去 猜测你的环境 来复现问题

- 你是如何安装 Nuitka 的
  
  你是否使用 pip, anaconda, deb, rpm, 从源码安装或者 git 来安装 Nuitka 到一个虚拟环境中
  (虚拟环境创建指南请参考 [Python标准库 venv 文档](https://docs.python.org/zh-cn/3/library/venv.html) )

  这很重要, 请一定要进行说明, 因为上面的命令暂时还不会输出虚拟环境相关的信息

- 你所使用的第三方库的名称和版本
  
  It should be taken from this output if there specific packages involved, e.g. `numpy`, you are
  expected to shorten this to the relevant ones.

  这应该是你所使用的第三方库的名称和版本
  你应该把下面命令的输出截取出与打包相关的部分

  > python -m pip freeze
