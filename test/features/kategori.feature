Feature: Menambah Kategori Barang

  Scenario: Menambah kategori barang baru
    Given saya telah login ke akun Pandu Toko
    When saya tambah kategori
    Then saya seharusnya melihat toast success

  Scenario: menghapus kategori
    Given saya telah berada di menu kategori
    When saya hapus kategori
    Then saya seharusnya melihat toast delete