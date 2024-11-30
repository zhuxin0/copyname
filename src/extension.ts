import * as vscode from 'vscode';
import * as path from 'path';

function formatFileName(fileName: string, caseStyle: string): string {
    switch (caseStyle) {
        case 'camelCase':
            return fileName.replace(/[-_.](\w)/g, (_, c) => c.toUpperCase());
        case 'kebab-case':
            return fileName.replace(/[_.](\w)/g, (_, c) => '-' + c.toLowerCase());
        case 'snake_case':
            return fileName.replace(/[-.](\w)/g, (_, c) => '_' + c.toLowerCase());
        default:
            return fileName;
    }
}

export function activate(context: vscode.ExtensionContext) {
    // 复制文件名命令
    const copyFileName = vscode.commands.registerCommand('copyname.copyFileName', (uri: vscode.Uri) => {
        if (uri) {
            const config = vscode.workspace.getConfiguration('copyname');
            const includeExtension = config.get<boolean>('includeExtension');
            const caseStyle = config.get<string>('caseStyle');

            let fileName = path.basename(uri.fsPath);
            if (!includeExtension) {
                fileName = path.parse(fileName).name;
            }

            fileName = formatFileName(fileName, caseStyle || 'original');

            vscode.env.clipboard.writeText(fileName).then(() => {
                vscode.window.showInformationMessage(`已复制文件名: ${fileName}`);
            });
        }
    });

    // 复制完整路径命令
    const copyFullPath = vscode.commands.registerCommand('copyname.copyFullPath', (uri: vscode.Uri) => {
        if (uri) {
            const fullPath = uri.fsPath;
            vscode.env.clipboard.writeText(fullPath).then(() => {
                vscode.window.showInformationMessage(`已复制完整路径: ${fullPath}`);
            });
        }
    });

    context.subscriptions.push(copyFileName, copyFullPath);
}

export function deactivate() {}