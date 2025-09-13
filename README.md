Sales Visit Management Solution for Salesforce
1. Project Description
This solution was developed to address a common Salesforce limitation: the inability to enrich the standard Event object with custom fields for visit reports.

This package introduces a custom object called "Visite Commerciale" (Sales Visit) that allows sales teams to create detailed, structured visit reports linked to calendar events, accounts, and contacts. The goal is to centralize information, improve data quality, and provide a complete 360-degree view of customer activity.

Furthermore, this solution integrates Einstein Generative AI features to assist sales representatives in preparing their visits and formatting their reports.

2. Prerequisites
For this solution to function correctly, the target Salesforce organization must have the Einstein Generative AI feature enabled and configured.

The prompt templates (GenAiPromptTemplate) included in this package depend on this configuration to execute. Without it, the AI features will not be available.

3. Components Included in the Package
This package contains the following metadata:

Custom Object: Visite_Commerciale__c

Custom Tab: Visite_Commerciale__c

Custom Fields: All fields related to the Sales Visit object.

Flows: SCN_Creation_de_Visite_Commerciale (Screen Flow) and RTF_MAJ_Visites_sur_Modif_Event (Record-Triggered Flow).

Einstein Prompt Templates: Plan_Visite and CR_Formated.

Quick Action: Account.Cr_er_Visite on the Account object.

Compact Layout: For the Visite_Commerciale__c object.

Lightning Record Page: Visite_Commerciale_Record_Page.

Permission Set: Utilisateur_de_Visites_Commerciales to grant all necessary access.

4. Deployment Instructions
This project is designed to be deployed using Salesforce DX tools (VS Code, SFDX CLI).

Clone this GitHub repository to your local machine.

Open the project in Visual Studio Code.

Authenticate to the target Salesforce organization.

To deploy, use the following command in the terminal:

sfdx project:deploy:start --source-dir "force-app"

(It is recommended to perform a validation deployment using --checkonly beforehand)

5. Post-Deployment Steps (Configuration)
After a successful deployment, a Salesforce Administrator must perform the following configuration steps.

A. Assign the Permission Set

Navigate to Setup > Permission Sets.

Find and click on "Utilisateur de Visites Commerciales".

Click on Manage Assignments, then Add Assignments.

Select all users who need to create and manage sales visits and assign them the permission set.

B. Configure the Account Page Layout in Lightning App Builder

Navigate to any Account record in the Salesforce UI.

Click the Setup gear icon and select Edit Page. This will open the Lightning App Builder.

Add the "Create Visit" button:

Click on the Highlights Panel component at the top of the page.

Find the "Créer Visite" (Create Visit) action and drag it into the desired position in the list of visible buttons.

Add the Sales Visits Related List:

Drag a "Related List - Single" component from the left panel onto the page layout (placing it in a new tab is a good practice).

In the properties panel, configure the component:

Parent Record: Use this Account

Related List: Visites Commerciales

Click Save and activate the page if necessary.

C. Optimize for Mobile Experience (Recommended)

Since this solution is heavily used on the go, it is recommended to spend some time adapting the Lightning Record Pages for the Account and Sales Visit objects to ensure the user experience is optimal on the Salesforce mobile app. This may involve adjusting component visibility or rearranging elements for smaller form factors.

6. User Guide
Navigate to an Account record page.

Click the "Créer Visite" (Create Visit) button.

The creation wizard will open: select an Event and a Contact related to this account.

A new "Visite Commerciale" record is created. You can now prepare for and report on your visit:

Preparation (Before the visit): In the "Plan de Visite" field, use the Einstein AI button to automatically generate preparation points.

Reporting (After the visit): On your mobile device, use the voice dictation feature of your keyboard to record your raw notes directly into the "CR Transcrit" field. This allows you to dictate your report without typing.

Formatting: Once your raw notes are captured, click the Einstein AI button on the "CR Formaté" field. The AI will take your transcribed text and automatically structure it into a clean, professional report.