import { DataAppPage } from './app.po';

describe('data-app App', () => {
  let page: DataAppPage;

  beforeEach(() => {
    page = new DataAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
