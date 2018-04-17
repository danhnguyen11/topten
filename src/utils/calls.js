export default [
    {
        Title: "Pulse Secure VPN",
        Keywords:["Tesla VPN doesn'work","Received the RSA Token but Pulse doesn't let user connect","Had VPN access before, but cannot access now"],
        Cases:[
            {
                Error: "Error Code 1329",
                Cause: "Already connected to Tesla Network or Access was not properly configured",
                ToDos: ["Add user to RSA-VPN on AD","Ask user to make sure that they are not trying to connect while connected to Tesla Network"]
            },
            {
                Error: "Error Code 1319",
                Cause: "Invalid Username or Password",
                ToDos: ["Check if user is locked on AD and RSA Dashboard","Ask user to enter Tesla password for the secondary credential","Ask user to use only the first part of the Tesla email as the username","Help user reset password"]
            },
            {
                Error: "User's RSA account doesn't have a RSA Token assignment",
                Cause: "First Request or Token was removed due to inactivity",
                ToDos: ["Ask user to send Device/Binding ID to HelpDesk@tesla.com"]
            },
            {
                Error: "Error Code 1205",
                Cause: "Virtual Adapter Conflict",
                ToDos: ["Reinstall Pulse or Upgrade User to the latest version"]
            },
            {
                Error: "Other Errors or on a Mac",
                Cause: "Others",
                ToDos: ["Reinstall Pulse","Issue user with another RSA Token with the same ID"]
            }
        ]
    },
    {
        Title: "Tesla Password Issue"
    },
    {
        Title: "SCTY Password Issue"
    },
    {
        Title: "Locked Out"
    },
    {
        Title: "Bitlocker"
    },
    {
        Title: "Microsoft Outlook"
    }
]