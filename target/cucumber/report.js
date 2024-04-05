$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/blackpixel/cucumber/bmi_calc.feature");
formatter.feature({
  "line": 1,
  "name": "As a patient I want to calculate my BMI online so I can track my weight",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6064608191,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Calculate BMI from height in cm and weight in kg",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculate-bmi-from-height-in-cm-and-weight-in-kg",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@BMI_Calculator"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "\"173\" and \"100\" are entered into the calculator",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Calculate BMI button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the BMI should be \"33.4\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "173",
      "offset": 1
    },
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "CalcBMISteps.and_are_entered_into_the_calculator(String,String)"
});
formatter.result({
  "duration": 263976871,
  "status": "passed"
});
formatter.match({
  "location": "CalcBMISteps.Calculate_BMI_button_is_clicked()"
});
formatter.result({
  "duration": 87761574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33.4",
      "offset": 19
    }
  ],
  "location": "CalcBMISteps.the_BMI_should_be_(String)"
});
formatter.result({
  "duration": 43143238,
  "status": "passed"
});
formatter.after({
  "duration": 86133314,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Calculating BMIs from height in cm and weight in kg",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@BMI_Calculator"
    },
    {
      "line": 9,
      "name": "@Examples_Table"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\u003ccm\u003e and \u003ckg\u003e are entered into the calculator",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the BMI should be \u003cbmi\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;",
  "rows": [
    {
      "cells": [
        "cm",
        "kg",
        "bmi"
      ],
      "line": 16,
      "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;1"
    },
    {
      "cells": [
        "\"173\"",
        "\"100\"",
        "\"33.4\""
      ],
      "line": 17,
      "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;2"
    },
    {
      "cells": [
        "\"160\"",
        "\"49\"",
        "\"19.1\""
      ],
      "line": 18,
      "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;3"
    },
    {
      "cells": [
        "\"163\"",
        "\"48\"",
        "\"18.1\""
      ],
      "line": 19,
      "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5251570733,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calculating BMIs from height in cm and weight in kg",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Examples_Table"
    },
    {
      "line": 9,
      "name": "@BMI_Calculator"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"173\" and \"100\" are entered into the calculator",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the BMI should be \"33.4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "173",
      "offset": 1
    },
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "CalcBMISteps.and_are_entered_into_the_calculator(String,String)"
});
formatter.result({
  "duration": 172898605,
  "status": "passed"
});
formatter.match({
  "location": "CalcBMISteps.Calculate_BMI_button_is_clicked()"
});
formatter.result({
  "duration": 94850431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33.4",
      "offset": 19
    }
  ],
  "location": "CalcBMISteps.the_BMI_should_be_(String)"
});
formatter.result({
  "duration": 101259540,
  "status": "passed"
});
formatter.after({
  "duration": 149364140,
  "status": "passed"
});
formatter.before({
  "duration": 5362669486,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Calculating BMIs from height in cm and weight in kg",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Examples_Table"
    },
    {
      "line": 9,
      "name": "@BMI_Calculator"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"160\" and \"49\" are entered into the calculator",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the BMI should be \"19.1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 1
    },
    {
      "val": "49",
      "offset": 11
    }
  ],
  "location": "CalcBMISteps.and_are_entered_into_the_calculator(String,String)"
});
formatter.result({
  "duration": 163600931,
  "status": "passed"
});
formatter.match({
  "location": "CalcBMISteps.Calculate_BMI_button_is_clicked()"
});
formatter.result({
  "duration": 90849981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.1",
      "offset": 19
    }
  ],
  "location": "CalcBMISteps.the_BMI_should_be_(String)"
});
formatter.result({
  "duration": 36026302,
  "status": "passed"
});
formatter.after({
  "duration": 86399161,
  "status": "passed"
});
formatter.before({
  "duration": 5432475345,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculating BMIs from height in cm and weight in kg",
  "description": "",
  "id": "as-a-patient-i-want-to-calculate-my-bmi-online-so-i-can-track-my-weight;calculating-bmis-from-height-in-cm-and-weight-in-kg;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Examples_Table"
    },
    {
      "line": 9,
      "name": "@BMI_Calculator"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "\"163\" and \"48\" are entered into the calculator",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Calculate BMI button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the BMI should be \"18.1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "163",
      "offset": 1
    },
    {
      "val": "48",
      "offset": 11
    }
  ],
  "location": "CalcBMISteps.and_are_entered_into_the_calculator(String,String)"
});
formatter.result({
  "duration": 175285383,
  "status": "passed"
});
formatter.match({
  "location": "CalcBMISteps.Calculate_BMI_button_is_clicked()"
});
formatter.result({
  "duration": 88149950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18.1",
      "offset": 19
    }
  ],
  "location": "CalcBMISteps.the_BMI_should_be_(String)"
});
formatter.result({
  "duration": 34516560,
  "status": "passed"
});
formatter.after({
  "duration": 80778472,
  "status": "passed"
});
formatter.uri("com/blackpixel/cucumber/deposit.feature");
formatter.feature({
  "line": 2,
  "name": "As a User I want to deposit money into my account",
  "description": "",
  "id": "as-a-user-i-want-to-deposit-money-into-my-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UserAccounts"
    }
  ]
});
formatter.before({
  "duration": 149151,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Depositing money into User\u0027s account should add money to the User\u0027s current balance",
  "description": "",
  "id": "as-a-user-i-want-to-deposit-money-into-my-account;depositing-money-into-user\u0027s-account-should-add-money-to-the-user\u0027s-current-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a User has no money in their account",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "£100 is deposited into the account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the balance should be £100",
  "keyword": "Then "
});
formatter.match({
  "location": "DepositStep.a_User_has_no_money_in_their_current_account()"
});
formatter.result({
  "duration": 75852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 1
    }
  ],
  "location": "DepositStep.£_is_deposited_into_the_account(int)"
});
formatter.result({
  "duration": 970757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "DepositStep.the_balance_should_be_£(int)"
});
formatter.result({
  "duration": 399680,
  "status": "passed"
});
formatter.before({
  "duration": 97732,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Depositing money into User\u0027s account should add money to the User\u0027s current balance",
  "description": "",
  "id": "as-a-user-i-want-to-deposit-money-into-my-account;depositing-money-into-user\u0027s-account-should-add-money-to-the-user\u0027s-current-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "a User has no money in their account",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "£50 is deposited into the account",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the balance should be £50",
  "keyword": "Then "
});
formatter.match({
  "location": "DepositStep.a_User_has_no_money_in_their_current_account()"
});
formatter.result({
  "duration": 27715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 1
    }
  ],
  "location": "DepositStep.£_is_deposited_into_the_account(int)"
});
formatter.result({
  "duration": 91168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 23
    }
  ],
  "location": "DepositStep.the_balance_should_be_£(int)"
});
formatter.result({
  "duration": 87156,
  "status": "passed"
});
formatter.uri("com/blackpixel/cucumber/hire_car.feature");
formatter.feature({
  "line": 2,
  "name": "As a foreign business person I want to hire a car so that I",
  "description": "can drive places when I am away on business",
  "id": "as-a-foreign-business-person-i-want-to-hire-a-car-so-that-i",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HireCar"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Hire a car model that is available",
  "description": "",
  "id": "as-a-foreign-business-person-i-want-to-hire-a-car-so-that-i;hire-a-car-model-that-is-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a Ford Focus is available",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select a Ford Focus",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be informed that it is available",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});