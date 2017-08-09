import { GitTestPage } from './app.po';

describe('git-test App', () => {
  let page: GitTestPage;

  beforeEach(() => {
    page = new GitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
