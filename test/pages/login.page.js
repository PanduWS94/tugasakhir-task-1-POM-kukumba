class LoginPage {
    get emailInput() {
      return $('#email');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('//*[@id="root"]/div/div/div/div[2]/div/button'); 
    }
  
    get errorMessage() {
      return $('.chakra-alert');
    }
  
    async open() {
      await browser.url('https://kasirdemo.belajarqa.com/');
    }
  
    async login(email, password) {
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();