import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should be the login page', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Login');
      });
    });
  })
});
