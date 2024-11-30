# copyName

一个简单的 VS Code 扩展，用于快速复制文件名或路径。

A simple VS Code extension for quickly copying file names or paths.

## 功能特性 | Features

- 复制文件名 | Copy file name
- 复制完整路径 | Copy full path
- 支持多种命名格式 | Support multiple naming formats
  - 原始格式 (Original)
  - 驼峰式 (camelCase)
  - 短横线式 (kebab-case)
  - 下划线式 (snake_case)

## 使用方法 | Usage

1. 在文件资源管理器中右键点击文件
   Right-click on a file in the explorer

2. 选择以下选项之一：
   Choose one of the following options:
   - `Copy File Name`: 复制文件名 | Copy file name
   - `Copy Full Path`: 复制完整路径 | Copy full path

## 扩展设置 | Extension Settings

此扩展提供以下设置：
This extension contributes the following settings:

* `copyname.includeExtension`: 是否包含文件扩展名 | Whether to include file extension
  - `true`: 包含扩展名 (example.txt)
  - `false`: 不包含扩展名 (example)

* `copyname.caseStyle`: 文件名格式化样式 | File name formatting style
  - `original`: 保持原始文件名 | Keep original name
  - `camelCase`: 驼峰式 (exampleFileName)
  - `kebab-case`: 短横线式 (example-file-name)
  - `snake_case`: 下划线式 (example_file_name)

## 配置示例 | Configuration Example

在 settings.json 中添加：
Add to settings.json:

```json
{
    "copyname.includeExtension": true,
    "copyname.caseStyle": "camelCase"
}
```

## 快速开始 | Quick Start

1. 安装扩展后重启 VS Code
   Restart VS Code after installation

2. 右键点击任何文件
   Right-click on any file

3. 在上下文菜单中查找 "Copy File Name" 或 "Copy Full Path"
   Look for "Copy File Name" or "Copy Full Path" in the context menu

## 已知问题 | Known Issues

暂无已知问题。
No known issues.

## 发布说明 | Release Notes

### 1.0.0

- 初始发布 | Initial release
- 支持复制文件名和完整路径 | Support copying file name and full path
- 支持多种命名格式 | Support multiple naming formats
