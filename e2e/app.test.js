/* eslint-disable no-undef */
import { Selector, ClientFunction } from 'testcafe';

const origin = "https://moh-random-number-generator.herokuapp.com";
const getUrl = ClientFunction(() => document.location.href);

fixture `Random Number Generation Tests`
  .page `${origin}`;

test('test homepage URL', async t => {
  await t.expect(getUrl()).match(/https:\/\/moh-random-number-generator.herokuapp.com/);
});

test('test page banner', async t => {
  await t.expect(Selector('h1').innerText).contains('Phone Number Generator');
});

test('test app subtitle', async t => {
  await t.expect(Selector('.App-subtitle').innerText).contains('How many numbers do you want to generate?');
});

test('test app button', async t => {
  await t.expect(Selector('button').innerText).contains('Generate Phone Number(s)');
});

test('test generate phone number functionality', async t => {
  await t
    .click(Selector('input').withAttribute('placeholder', 'Enter a number'))
    .typeText(Selector('input').withAttribute('placeholder', 'Enter a number'), '3', { replace: true })
    .click(Selector('button').withText('Generate Phone Number(s)'))
    .wait(5000); // So we can see that the numbers where generated

  // Test sorting functionality
  await t
    .click(Selector('select'))
    .click(Selector('option').withText('Ascending'))
    .wait(1000);

  // Test export button functionality
  await t
    .click(Selector('button').withText('Export Numbers'))
    .expect(getUrl()).match(/https:\/\/moh-random-number-generator.herokuapp.com/);
});
