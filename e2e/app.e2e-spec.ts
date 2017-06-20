import { SpaAppPage } from './app.po';

describe('spa-app App', function() {
  let page: SpaAppPage;

  beforeEach(() => {
    page = new SpaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
