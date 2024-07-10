const dialog = require('../../pageObjects/dialog.page');
const expect = require('chai').expect;

describe('Dialog', ()=>{
    // Execute a block of code before every test
    beforeEach(() => {
    });

    it('should verify touch actions',  async () =>{
        //Mimic user scrolling with press + x, y coordinates
        await dialog.viewBtn.click();
        await driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])
    });

    it('Verify that the text entry dialog username & password fields are editable', async ()=>{
        await dialog.appBtn.click();
        await dialog.alertDialogBtn.click();
        await dialog.textEntryDialogBtn.click();

        await dialog.userNameField.addValue("Test User");
        await dialog.userNameField.clearValue();
        await dialog.userNameField.addValue("Actual User");

        await dialog.passwordField.clearValue();
        await dialog.passwordField.addValue("Test Pass");

        let text = dialog.userNameField.getText();
        console.log("My expected value:" +text);
        await expect(text).equal("Actual User");

        await dialog.dialogOkBtn.click();
    });

    it('Verify that the app adjust when orientation is switched', () => {
        console.log(driver.getOrientation());
        driver.setOrientation('LANDSCAPE');

        driver.saveScreenshot('./screenshots/landscape.png');
        dialog.appBtn.click();

        driver.setOrientation('PORTRAIT');
        driver.back();
        driver.saveScreenshot('./screenshots/portrait.png');
    });

    it('Verify isSelected, isEnabled & isDisplayed', async () => {
        await dialog.viewBtn.click();
        await driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])

        await dialog.tabsBtn.click();
        await dialog.contentByIdBtn.click();

        let isEnabled, isSelected, isDisplayed;

        for(i=0; i<3; i++){
            isEnabled = dialog.tabs[i].isEnabled();
            isSelected = dialog.tabs[i].isSelected();
            isDisplayed = dialog.tabs[i].isDisplayed();
    
            await console.log(`Tab ${i+1}`)
            await console.log('isEnabled:', isEnabled);
            await console.log('isSelected:', isSelected);
            await console.log('isDisplayed:', isDisplayed);

            if(isEnabled && isSelected){
                await console.log("Tab Details 1:", dialog.tab1Details.isDisplayed());
                await console.log("Tab Details 2:", dialog.tab2Details.isDisplayed());
                await console.log("Tab Details 3:", dialog.tab3Details.isDisplayed());
            }
        }
    });

    it('Verify Timeouts', async () => {
        await driver.setImplicitTimeout(10000);
        await driver.setTimeouts(10000);
        await driver.pause(10000);

        await dialog.viewBtn.click();
        // await dialog.tabsBtn.click();
    });

    it('Verify the repeat alarm options has attribute checked set to true when selected', ()=>{
        let isChecked, text;

        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.repeatAlarmBtn.click();

        text = dialog._weekdayCheckbox(0).getText();
        expect(text).equal('Every Monday');

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('false');

        dialog._weekdayCheckbox(0).click();

        isChecked = dialog._weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('true');
    });

    // Execute a block of code after every test
    afterEach(() => {
        driver.closeApp();
    });
})