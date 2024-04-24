import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('./src/**/*.ts');
project.addSourceFilesAtPaths('./src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolutePath = (value: string) => {
    const sourceFolders = ['app', 'entities', 'features', 'pages', 'shared', 'stories', 'widgets'];
    return sourceFolders.some((folder) => value.startsWith(folder));
};

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolutePath(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.saveSync();
