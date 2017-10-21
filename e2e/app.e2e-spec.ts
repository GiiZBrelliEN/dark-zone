import { GenesisPage } from './app.po';

describe('genesis App', () => {
  let page: GenesisPage;

  beforeEach(() => {
    page = new GenesisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
