package testing;


import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestCases {
	
	//System.setProperty("webdriver.chrome.driver", "");
	WebDriver driver = new ChromeDriver();
	
	@Test
	public void Test1() {
		driver.get("http://localhost:8090/DevOpsMinproject/index.jsp");
		Assert.assertEquals(driver.getTitle(), "Calculator");
		
	}

}
