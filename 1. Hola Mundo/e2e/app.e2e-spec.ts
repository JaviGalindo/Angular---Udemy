import { HolamundoPage } from './app.po';

describe('holamundo App', function() {
  let page: HolamundoPage;

  beforeEach(() => {
    page = new HolamundoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
