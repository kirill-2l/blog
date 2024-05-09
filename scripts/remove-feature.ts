import { Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});

const featureName = process.argv[2];
const featureMode = process.argv[3];

if (!featureName) {
    throw new Error('No feature name provided');
}

if (!featureMode) {
    throw new Error('No feature action provided');
}

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFunc = (node: Node) =>
    node.forEachChild((child) => child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures');

files.forEach((file) => {
    file.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunc(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
            if (!objectOptions) return;

            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');
            const featureNameProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const foundedFeatureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== foundedFeatureName) return;

            if (featureMode === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }
            if (featureMode === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
