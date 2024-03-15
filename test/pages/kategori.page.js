class KategoriPage {
    get menuKategori() {
        return $("a:nth-of-type(5) > div > div > div");
    }

    get tombolTambah() {
        return $("aria/tambah");
    }

    get inputNama() {
        return $("#nama");
    }

    get inputDeskripsi() {
        return $("#deskripsi");
    }

    get tombolSimpan() {
        return $("aria/simpan");
    }

    get toastSuccess() {
        return $("#chakra-toast-manager-top-right")
    }

    get toastDelete() {
        return $("#chakra-toast-manager-top-right")
    }

    get tombolTitikTiga() {
        return $("//tbody[@class='css-0']/tr[1]//button[@class='chakra-button chakra-menu__menu-button css-pu8osu']")
    }

    get pilihanHapus() {
        return $("//tbody[@class='css-0']/tr[1]//button[@class='chakra-menu__menuitem css-13c7rae']")
    }

    get konfrimDelete() {
        return $("aria/Delete")
    }

    async open() {
        await browser.url('https://kasirdemo.belajarqa.com/dashboard');
        // Tambahkan langkah-langkah jika diperlukan untuk mencapai halaman yang sesuai
    }

    async tambahKategori(nama, deskripsi) {
        await this.menuKategori.click();
        await this.tombolTambah.click();
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.tombolSimpan.click();
    }

    async hapusKategori() {
        await this.tombolTitikTiga.click();
        await this.pilihanHapus.click();
        await this.konfrimDelete.click();
    }
}

module.exports = new KategoriPage();
