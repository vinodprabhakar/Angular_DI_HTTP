import { CtsAppPage } from './app.po';

describe('cts-app App', function() {
  let page: CtsAppPage;

  beforeEach(() => {
    page = new CtsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
