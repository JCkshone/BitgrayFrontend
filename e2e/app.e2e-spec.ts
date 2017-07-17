import { BitgrayAppRechargePage } from './app.po';

describe('bitgray-app-recharge App', () => {
  let page: BitgrayAppRechargePage;

  beforeEach(() => {
    page = new BitgrayAppRechargePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
