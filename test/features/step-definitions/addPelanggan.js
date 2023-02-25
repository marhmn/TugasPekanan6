import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import pelangganPage from '../pageobjects/pelanggan.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await LoginPage.btnSubmit.click();
});

When('I should see my account dashboard', async () => { 
    expect(securePage.Container).toExist()
});

When('I click button pelanggan', async () => { 
    await pelangganPage.buttonPelanggan.click()
});

When('I see a path of pelanggan', async () => { 
    expect(pelangganPage.pathPelanggan).toExist()
});

When('I click button tambah', async () => { 
    await (pelangganPage.buttonTambah).click()
});

When(/^I type nama (\w+)$/, async (nama) => { 
    await pelangganPage.inputNama.setValue(nama)
});

When(/^I type nohp (\w+)$/, async (nohp) => { 
    await pelangganPage.inputNohp.setValue(nohp)
});

When(/^I type alamat (\w+)$/, async (alamat) => { 
    await pelangganPage.inputAlamat.setValue(alamat)
});

When(/^I type keterangan (.+)$/, async (keterangan) => { 
    await pelangganPage.inputKeterangan.setValue(keterangan)
});

When('I click button simpan', async () => { 
    await pelangganPage.buttonSimpan.click()
});

Then(/^I should see a success message(.+)$/, async (message) => { 
    await expect(pelangganPage.alertMsg).toBeExisting();
    await expect(pelangganPage.alertMsg).toHaveTextContaining(message);
    await browser.pause(5000);
});

