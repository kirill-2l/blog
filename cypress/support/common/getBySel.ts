// eslint-disable-next-line max-len
export const getBySel = (selector: string, ...args: any) => cy.get(`[data-testid=${selector}]`, ...args);
