---
path: /validator/
lang: en
template: doc-page
---
# Feed Issues

Review your GTFS feed to identify and address errors and warnings. The following table shows issues that can arise in your data feed.

| Issue Type          | Description                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                            |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fetch errors        | Issues that prevent Google from retrieving your feed, usually due to a data fetch setup issue. You must fix these errors before Google can create a preview feed or provide a validation report. | The FTP URL you submitted is inaccurate, causing a 404 when Google tries to fetch your feed.                                                                                                                                                                                                                                                                       |
| Validation errors   | Critical, blocking issues that must be fixed in order for your feed to work.                                                                                                                     | Missing referenced valueThe service_id referenced in trips.txt is not defined in calendar.txt.                                                                                                                                                                                                                                                                     |
| Validation warnings | Potential feed problems to review so you can be sure your feed accurately describes transit routes and schedules.                                                                                | __Example 1__ <br> A stop that your feed indicates is located in the middle of the ocean. <br> <br> Update your feed to properly locate the stop. <br><br>  __Example 2__  <br> A warning is returned because a route schedule appears too tight based on the distance between stops. <br><br> Check your information and confirm it is accurate; if it is, no further action is needed on your part. |

# Validation Warnings


Validation warnings are informational messages that indicate potential problems with your feed, some of which could prevent your transit data from being displayed to transit data consumers. 
Review warnings to ensure that your feed data is accurate and correctly coded. Where warnings indicate problems, update and then re-validate the feed.

## Warning organised by category:

- [Fares] (/warning-fares/)
- [Frequencies] (/warning-frequencies/)
- [Routes] (/warning-routes/)
- [Service date and times] (/warning-service-dates-and-times/)
- [Shapes] (/warning-shapes/)
- [Stops and stations] (/warning-stops-and-stations/) 
- [Time] (/reference/static/#agencytxt)
- [Transfers] (/warning-transfers/)
- [Trips] (/warning-trips/) 

# [Validation Errors] (/validation-errors/)

Validation errors are critical, blocking issues that prevent your feed to be correctly processed until you fix them.

