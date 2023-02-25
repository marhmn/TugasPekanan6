

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PelangganPage extends Page {
    /**
     * define selectors using getter methods
     */

    get buttonPelanggan () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(9) > div');
    }

    get buttonTambah () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a');
    }

    get pathPelanggan () {
        return $('h2.chakra-heading > a:nth-child(2)');
    }

    get inputNama () {
        return $('#nama');
    }

    get inputNohp () {
        return $('//*[@id="no.hp"]');
    }

    get inputAlamat () {
        return $('#alamat');
    }

    get inputKeterangan () {
        return $('#keterangan');
    }

    get buttonSimpan () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button');
    }

    get alertMsg () {
        return $('.chakra-toast > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new PelangganPage();
