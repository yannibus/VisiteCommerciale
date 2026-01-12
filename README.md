Sales Visit Management Solution for Salesforce

Project Description
This solution was developed to address a common Salesforce limitation: the inability to enrich the standard Event object with custom fields for visit reports.
This package introduces a custom object called "Visite Commerciale" (Sales Visit) that allows sales teams to create detailed, structured visit reports linked to calendar events, accounts, and contacts. The goal is to centralize information, improve data quality, and provide a complete 360-degree view of customer activity.
Furthermore, this solution integrates Einstein Generative AI for report formatting and a Custom LWC for Handwritten Notes, providing a versatile reporting tool for sales representatives on the go.

🚀 Key Features
Structured Reporting: Centralized visit data linked to standard Salesforce objects.
Einstein Generative AI: Assistance in visit preparation and automatic formatting of raw notes into professional reports.
Voice Dictation Support: Designed to work seamlessly with mobile device dictation.
Handwritten Notes: A Lightning Web Component (LWC) allowing users to draw sketches or take handwritten notes, saved automatically as Salesforce Files.

📋 Prerequisites
For this solution to function correctly, the target Salesforce organization must have:
Einstein Generative AI feature enabled and configured.
Notes and Files enabled to store the handwritten notes.
The prompt templates (GenAiPromptTemplate) included in this package depend on the AI configuration to execute.

📦 Components Included in the Package
Custom Object: Visite_Commerciale__c
Custom Fields: Account__c, Contact__c, CR_Formated__c, CR_Transcrit__c, Date_et_Heure_de_la_Visite__c, Dur_e_en_minutes__c, D_tails_Client_le__c, D_tails_Commercial__c, ID_v_nement_Associ__c, Lien_v_nement__c, Plan_Visite__c, Statut__c, Type_Visite__c.
Custom Tab: Visite_Commerciale__c
Lightning Web Component: simpleFileUploader (Handwritten notes canvas).
Flows: SCN_Creation_de_Visite_Commerciale (Screen Flow) and RTF_MAJ_Visites_sur_Modif_Event (Record-Triggered Flow).
Quick Actions: Account.Cr_er_Visite, Visite_Commerciale__c.Mise_jour_mobile, Visite_Commerciale__c.Update_D_mo.
Einstein Prompt Templates: Plan_Visite, CR_Formated.
Lightning Record Page: Visite_Commerciale_Record_Page.
Compact Layout: Visite_Commerciale__c.Compact_Layout.
Permission Set: Utilisateur_de_Visites_Commerciales.

🛠️ Deployment Instructions
This project is designed to be deployed using Salesforce DX tools (VS Code, SFDX CLI).
Clone this GitHub repository to your local machine.
Open the project in Visual Studio Code.
Authenticate to the target Salesforce organization.
Deploy using the following command:
sf project deploy start --source-dir "force-app"


⚙️ Post-Deployment Steps
A. Assign the Permission Set
Assign the "Utilisateur de Visites Commerciales" permission set to all relevant users.
B. Configure the Account Page Layout
Add the "Créer Visite" action to the Highlights Panel.
Add the "Visites Commerciales" Related List (Single) to the page layout.
C. Optimize for Mobile Experience
Ensure the Visite_Commerciale_Record_Page is activated for Phone in the Lightning App Builder.

📖 User Guide
Creation: Navigate to an Account and click "Créer Visite". Select the Event and Contact.
Update for Demo: Use Update Demo to contextualise your visit and prepare the data for presentation.
Preparation: Use the Einstein AI button on the "Plan de Visite" field to generate talking points.
Reporting (After the visit):
Text: Use your mobile keyboard's voice dictation to record raw notes into the "CR Transcrit" field.
Handwritten Notes: Use the drawing component to sketch diagrams or write quick notes. Click "Save" to attach the drawing as a file to the record.
AI Formatting: Click the Einstein AI button on the "CR Formaté" field to transform your raw dictation into a structured report.
