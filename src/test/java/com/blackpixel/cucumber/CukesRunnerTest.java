package com.blackpixel.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        
        tags = "@BMI_Calculator"
)
//@UserAccounts, @HireCar, 
//class name has to end in test for cucumber tests to be run by Maven
public class CukesRunnerTest {
}
