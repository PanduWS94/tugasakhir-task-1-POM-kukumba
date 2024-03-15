const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pages/login.page');
const KategoriPage = require('../pages/kategori.page'); // Sesuaikan dengan lokasi file kategori.page.js Anda

Given(/^saya telah login ke akun Pandu Toko$/,  async () => {
    await LoginPage.open();
    await LoginPage.login('subroto.panduwibisono@gmail.com', '123321saja');
    // Implementasi login menggunakan WebDriverIO, jika belum dilakukan sebelumnya
});

When(/^saya tambah kategori$/, async () => {
    await KategoriPage.tambahKategori('Rokok','Seluruh merk rokok');
});

Then(/^saya seharusnya melihat toast success$/,  async () => {
    const toastSuccess = await KategoriPage.toastSuccess;
    await browser.pause(2000);
    await expect(toastSuccess).toHaveTextContaining('success');
    // Implementasi untuk memastikan bahwa toast message muncul menggunakan WebDriverIO
});

Given(/^saya telah berada di menu kategori$/,  async () => {
    await LoginPage.openDashboard();
});

When(/^saya hapus kategori$/, async () => {
    await KategoriPage.hapusKategori();
});

Then(/^saya seharusnya melihat toast delete$/, async () => {
    const toastDelete = await KategoriPage.toastDelete;
    await browser.pause(2000);
    await expect(toastDelete).toHaveTextContaining('success');
})
