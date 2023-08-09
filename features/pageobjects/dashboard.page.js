//const moment = require('moment');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage{
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input#email');
    }

    get inputNameBulkUpload () {
        return $('input#name1');
    }

    get clickAddManualButton () {
        return $('a.btn.btn-success');
    }

    get clickTambahButton () {
        return $('button#add_data');// 
    }

    get popUpMessage () {
        return $('div.swal-text');
    }

    get nameDataTable () {
        return $('(//td/span)[2]');
    }

    get inputStartDate () {
        return $('input#start_date');
    }

    get inputEndDate () {
        return $('input#end_date');
    }

    get dropdown () {
        return $('#status');
    }

    get search () {
        return $('button#search');
    }

    get dateColumnValue () {
        return $$('//td[1]/span');
    }
    
    get statusColumnValue () {
        return $$('//td[8]/span');
    }
    
    get detailButton () {
        return $('(//td/a)[1]');
    }

    get inputMerchant () {
        return $('input#merchant1');
    }

    get inputUserCode () {
        return $('input#usercode1');
    }

    get inputUsername () {
        return $('input#username1');
    }

    get inputTotalAmount () {
        return $('input#totalamount1');
    }

    get inputPeriode () {
        return $('input#periode1');
    }
    // get localTime () {
    //     var currentDate = moment().local().format('DDMMYYHHmmss')
    //     return currentDate;
    // }

    get clickOkButton () {
        return $('button.swal-button');
    }

    //

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async Login (){
        await $('input#email').waitForDisplayed({timeout:30000});
        await $('input#email').setValue('oto011');
        await $('input#password').setValue('asd123');
        await $('button#login').click();
        await $('//span[contains(text(),"SetorKu")]').waitForDisplayed({timeout:30000});
        await $('//span[contains(text(),"SetorKu")]').click();
        await $('//span[contains(text(),"Bulk Upload")]').waitForDisplayed({timeout:30000});
        await $('//span[contains(text(),"Bulk Upload")]').click();
    }

    async addManualButton () {
        await this.clickAddManualButton.click();
    }

    async nameBulkUpload (name) {
        await this.inputNameBulkUpload.waitForDisplayed({timeout:30000});
        await this.inputNameBulkUpload.setValue(name);
    }

    async tambahButton () {
       await this.clickTambahButton.click();
    }

    async okButton () {
        await this.clickOkButton.click();
    }

    async startDate (startDate) {
        await this.inputStartDate.setValue(startDate);
    }

    async endDate (endDate) {
        await this.inputEndDate.setValue(endDate);
    }

    async dropDown (value) {
        await this.dropdown.selectByVisibleText(value);
    }

    async searchButton () {
        await this.search.click();
    }

    async clickDetailButton () {
        await this.detailButton.click();
    }

    async Merchant (args1) {
        await this.inputMerchant.setValue(args1);
    }

    async UserCode (args1) {
        await this.inputUserCode.setValue(args1);
    }

    async Username (args1) {
        await this.inputUsername.setValue(args1);
    }

    async TotalAmount (args1) {
        await this.inputTotalAmount.setValue(args1);
    }

    async Periode (args1) {
        await this.inputPeriode.setValue(args1);
    }

    async customer (args1) {
        await $('input#customerid1').setValue(args1);
    }

    async clickAddData (args1) {
        await $('//a[contains(text(),"Add Data")]').click();
    }
}

module.exports = new DashboardPage();
