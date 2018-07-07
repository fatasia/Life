import { AppPage } from './app.po';

describe('life App', () => {
  let page: AppPage;

  beforeEach(() => {
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
