import {assert} from 'chai';

describe('Browser', function () { //define suite title by passing a string

    it('Tab title', function () { //define test title by passing a string
       browser.url('/');
       browser.pause(2000);
       assert.equal(browser.getTitle(), 'Intellectual Games Club');
    })

    it('Header is displayed', function () { //define test title by passing a string
      $('.card-footer').isDisplayed()
    })

    it('App/Pages container is displayed', function () { //define test title by passing a string
        $('.site-content').isDisplayed()
    })

    it('Footer is displayed', function () { //define test title by passing a string
        $('.card-footer').isDisplayed()
    })
});