---
path: /agencyspec/
lang: en
---
|  Field Name | Type | Required | Description |
|  ------ | ------ | ------ | ------ |
|  `agency_id` | ID | **Conditionally Required** | Identifies a transit brand which is often synonymous with a transit agency. Note that in some cases, such as when a single agency operates multiple separate services, agencies and brands are distinct. This document uses the term "agency" in place of "brand". A dataset may contain data from multiple agencies. This field is required when the dataset contains data for multiple transit agencies, otherwise it is optional. |
|  `agency_name` | Text | **Required** | Full name of the transit agency. |
|  `agency_url` | URL | **Required** | URL of the transit agency. |
|  `agency_timezone` | Timezone | **Required** | Timezone where the transit agency is located. If multiple agencies are specified in the dataset, each must have the same `agency_timezone`. |
|  `agency_lang` | Language code | Optional | Primary language used by this transit agency. This field helps GTFS consumers choose capitalization rules and other language-specific settings for the dataset.|
|  `agency_phone` | Phone number | Optional | A voice telephone number for the specified agency. This field is a string value that presents the telephone number as typical for the agency's service area. It can and should contain punctuation marks to group the digits of the number. Dialable text (for example, TriMet's "503-238-RIDE") is permitted, but the field must not contain any other descriptive text.|
|  `agency_fare_url` | URL | Optional | URL of a web page that allows a rider to purchase tickets or other fare instruments for that agency online.|
|  `agency_email` | Email | Optional | Email address actively monitored by the agency’s customer service department. This email address should be a direct contact point where transit riders can reach a customer service representative at the agency.|

#### Examples

- Bus services are run by several small bus agencies. But there is one big agency that is responsible for scheduling and ticketing and from a user’s perspective responsible for the bus services.The one big agency should be defined as agency within the feed. Even if the data is split internally by different small bus operators there should only be one agency defined in the feed.
  
- The feed provider runs the ticketing portal, but there are different agencies that actually operate the services and are known by users to be responsible. The agencies actually operating the services should be defined as agencies within the feed.
