const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const testFields = [
  // Personal
  'ContentPlaceHolder1_personDetails_familyNameTextBox',
  'ContentPlaceHolder1_personDetails_givenName1Textbox',
  'ContentPlaceHolder1_personDetails_genderDropDownList',
  'ContentPlaceHolder1_personDetails_dateOfBirthDatePicker_DatePicker',
  'ContentPlaceHolder1_personDetails_CountryDropDownList',
  'ContentPlaceHolder1_addressContactDetails_address_address1TextBox',
  'ContentPlaceHolder1_addressContactDetails_address_suburbTextBox',
  'ContentPlaceHolder1_addressContactDetails_address_cityTextBox',
  'ContentPlaceHolder1_addressContactDetails_address_countryDropDownList',
  'ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberMobileTextBox',
  'ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox',
  'ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist',
  'ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist',
  // Identification
  'ContentPlaceHolder1_identification_passportNumberTextBox',
  'ContentPlaceHolder1_identification_confirmPassportNumberTextBox',
  'ContentPlaceHolder1_identification_passportExpiryDateDatePicker_DatePicker',
  'ContentPlaceHolder1_identification_otherIdentificationDropdownlist',
  'ContentPlaceHolder1_identification_otherIssueDateDatePicker_DatePicker',
  // Health
  'ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList',
  'ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList',
  'ContentPlaceHolder1_medicalConditions_cancerDropDownList',
  'ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList',
  'ContentPlaceHolder1_medicalConditions_disabilityDropDownList',
  'ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList',
  'ContentPlaceHolder1_medicalConditions_residentailCareDropDownList',
  'ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList',
  'ContentPlaceHolder1_medicalConditions_tbRiskDropDownList',
  // Character
  'ContentPlaceHolder1_character_imprisonment5YearsDropDownList',
  'ContentPlaceHolder1_character_imprisonment12MonthsDropDownList',
  'ContentPlaceHolder1_character_deportedDropDownList',
  'ContentPlaceHolder1_character_chargedDropDownList',
  'ContentPlaceHolder1_character_convictedDropDownList',
  'ContentPlaceHolder1_character_underInvestigationDropDownList',
  'ContentPlaceHolder1_character_excludedDropDownList',
  'ContentPlaceHolder1_character_removedDropDownList',
  // WHS Specific
  'ContentPlaceHolder1_workingHolidaySpecific_hasPreviousPermitDropDownList',
  'ContentPlaceHolder1_workingHolidaySpecific_sufficientFundsDropDownList',
  'ContentPlaceHolder1_workingHolidaySpecific_intendedTravelDateDatePicker_DatePicker',
  'ContentPlaceHolder1_workingHolidaySpecific_beenToNzBeforeDropDownList',
  'ContentPlaceHolder1_workingHolidaySpecific_outwardTicketDropDownList',
  'ContentPlaceHolder1_workingHolidaySpecific_specificRequirementsDropDownList',
  'ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_validateButton',
  'ContentPlaceHolder1_wizardPageFooter_wizardPageNavigator_submitImageButton',
  'ContentPlaceHolder1_wizardPageHeader_proceedToSubmitAnchor',
  // Confirm Submit Declarations
  'ContentPlaceHolder1_falseStatementCheckBox',
  'ContentPlaceHolder1_notesCheckBox',
  'ContentPlaceHolder1_circumstancesCheckBox',
  'ContentPlaceHolder1_warrantsCheckBox',
  'ContentPlaceHolder1_informationCheckBox',
  'ContentPlaceHolder1_healthCheckBox',
  'ContentPlaceHolder1_adviceCheckBox',
  'ContentPlaceHolder1_registrationCheckBox',
  'ContentPlaceHolder1_entitlementCheckbox',
  'ContentPlaceHolder1_permitExpiryCheckBox',
  'ContentPlaceHolder1_medicalInsuranceCheckBox',
  'ContentPlaceHolder1_submitDeclarationsButton',
  // Pay Now
  'ContentPlaceHolder1_payAnchor'
];

let missing = 0;
testFields.forEach(f => {
  const hasId = indexHtml.includes(`id="${f}"`);
  if (!hasId) {
    console.error(`MISSING ID: ${f}`);
    missing++;
  }
});

if (missing === 0) {
  console.log(`ALL ${testFields.length} INZ TARGET ATTRIBUTES VERIFIED 100% IN INDEX.HTML!`);
} else {
  console.log(`Failed with ${missing} missing fields.`);
}
